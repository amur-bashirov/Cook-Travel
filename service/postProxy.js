const { WebSocketServer } = require('ws');

function postProxy(httpServer) {
  const socketServer = new WebSocketServer({ server: httpServer });

  // Store connected clients with their associated userName
  const clients = new Map();

  socketServer.on('connection', (socket) => {
    socket.isAlive = true;
    console.log('[WebSocket] New connection established.');
  
    socket.on('message', (data) => {
      try {
        const message = JSON.parse(data);
  
        if (message.type === 'register' && message.userName) {
          clients.set(message.userName, socket);
          socket.userName = message.userName;
          console.log(`[WebSocket] Registered client with userName: ${message.userName}`);
        }
      } catch (err) {
        console.error('[WebSocket] Error parsing message:', err);
      }
    });
  
    socket.on('pong', () => {
      socket.isAlive = true;
    });
  
    socket.on('close', () => {
      if (socket.userName) {
        clients.delete(socket.userName);
        console.log(`[WebSocket] Connection closed for user: ${socket.userName}`);
      } else {
        console.log('[WebSocket] A socket closed without registered userName');
      }
    });
  });

  // Periodically send out a ping message to make sure clients are alive
  setInterval(() => {
    socketServer.clients.forEach((client) => {
      if (!client.isAlive) {
        if (client.userName) {
          clients.delete(client.userName);
        }
        return client.terminate();
      }

      client.isAlive = false;
      client.ping();
    });
  }, 10000);

  // Function to send a message to a specific user
  // In sendMessageToUser, you can log the message sending:
function sendMessageToUser(userName, message) {
  const client = clients.get(userName);
  if (client && client.readyState === WebSocket.OPEN) {
    console.log(`[WebSocket] Sending message to ${userName}:`, message);
    client.send(JSON.stringify(message));
  } else {
    console.warn(`[WebSocket] Client for ${userName} not available or not open.`);
  }
}

  return {
    sendMessageToUser,
  };
}

module.exports = { postProxy };
