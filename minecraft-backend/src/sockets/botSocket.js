import logger from '../config/logger.js';

export function setupBotSocket(io, prisma) {
  const botNamespace = io.of('/bot');

  botNamespace.on('connection', (socket) => {
    logger.info(`Bot interface connected: ${socket.id}`);

    socket.on('disconnect', () => {
      logger.info(`Bot interface disconnected: ${socket.id}`);
    });
  });
}

export default setupBotSocket;
