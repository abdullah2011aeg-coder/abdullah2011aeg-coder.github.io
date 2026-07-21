import logger from '../config/logger.js';
import InventoryService from '../services/InventoryService.js';

export default async function gameRoutes(app, options) {
  app.get('/inventory', async (request, reply) => {
    try {
      await request.jwtVerify();
      const userId = request.user.userId;

      const inventory = await InventoryService.getInventory(app.prisma, userId);

      reply.send(inventory);

    } catch (error) {
      reply.status(400).send({ error: error.message });
    }
  });

  app.get('/player-profile', async (request, reply) => {
    try {
      await request.jwtVerify();
      const userId = request.user.userId;

      const profile = await app.prisma.playerProfile.findUnique({
        where: { userId },
      });

      reply.send(profile);

    } catch (error) {
      reply.status(400).send({ error: error.message });
    }
  });

  app.post('/change-game-mode', async (request, reply) => {
    try {
      await request.jwtVerify();
      const userId = request.user.userId;
      const { gameMode } = request.body;

      const updated = await app.prisma.playerProfile.update({
        where: { userId },
        data: { gameMode },
      });

      logger.info(`Player ${userId} changed game mode to ${gameMode}`);

      reply.send({ success: true, gameMode });

    } catch (error) {
      reply.status(400).send({ error: error.message });
    }
  });
}
