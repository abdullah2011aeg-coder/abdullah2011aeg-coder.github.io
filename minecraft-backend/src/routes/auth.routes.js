import logger from '../config/logger.js';
import InventoryService from '../services/InventoryService.js';

export default async function authRoutes(app, options) {
  app.post('/register', async (request, reply) => {
    try {
      const { username, email, password } = request.body;

      // Hash password
      const hashedPassword = require('bcryptjs').hashSync(password, 10);

      // Create user
      const user = await app.prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      });

      // Create player profile
      const playerProfile = await app.prisma.playerProfile.create({
        data: {
          userId: user.id,
          posX: 0,
          posY: 64,
          posZ: 0,
          gameMode: 'SURVIVAL',
        },
      });

      // Initialize inventory
      await InventoryService.initializeInventory(app.prisma, user.id);

      // Generate JWT
      const token = app.jwt.sign({ userId: user.id }, { expiresIn: '7d' });

      logger.info(`User registered: ${username}`);

      reply.send({
        success: true,
        user: { id: user.id, username, email },
        playerProfile,
        token,
      });

    } catch (error) {
      logger.error('Registration error:', error);
      reply.status(400).send({ error: error.message });
    }
  });

  app.post('/login', async (request, reply) => {
    try {
      const { username, password } = request.body;

      const user = await app.prisma.user.findUnique({
        where: { username },
      });

      if (!user || !require('bcryptjs').compareSync(password, user.password)) {
        return reply.status(401).send({ error: 'Invalid credentials' });
      }

      const playerProfile = await app.prisma.playerProfile.findUnique({
        where: { userId: user.id },
      });

      const token = app.jwt.sign({ userId: user.id }, { expiresIn: '7d' });

      logger.info(`User logged in: ${username}`);

      reply.send({
        success: true,
        user: { id: user.id, username },
        playerProfile,
        token,
      });

    } catch (error) {
      logger.error('Login error:', error);
      reply.status(400).send({ error: error.message });
    }
  });

  app.get('/me', async (request, reply) => {
    try {
      await request.jwtVerify();
      const userId = request.user.userId;

      const user = await app.prisma.user.findUnique({
        where: { id: userId },
        include: { playerProfile: true },
      });

      reply.send(user);

    } catch (error) {
      reply.status(401).send({ error: 'Unauthorized' });
    }
  });
}
