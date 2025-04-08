const { WebSocketServer } = require('ws');

function postProxy(httpServer) {
  const socketServer = new WebSocketServer({ server: httpServer });

  // Store connected clients with their associated userName
  const clients = new Map();

  socketServer.on('connection', (socket) => {
    socket.isAlive = true;

    // Expect the client to send their userName upon connection
    socket.on('message', (data) => {
      try {
        const message = JSON.parse(data);

        // If the message contains a userName, associate it with the socket
        if (message.type === 'register' && message.userName) {
          clients.set(message.userName, socket);
          socket.userName = message.userName;
        }
      } catch (err) {
        console.error('Error parsing message:', err);
      }
    });

    // Respond to pong messages by marking the connection alive
    socket.on('pong', () => {
      socket.isAlive = true;
    });

    // Handle socket closure
    socket.on('close', () => {
      if (socket.userName) {
        clients.delete(socket.userName);
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
  function sendMessageToUser(userName, message) {
    const client = clients.get(userName);
    if (client && client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  }

  return {
    sendMessageToUser,
  };
}

module.exports = { postProxy };
