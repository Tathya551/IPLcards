const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("⏳ test server: client connected", socket.id);
  socket.emit("hello", "world");
});

const PORT = 3001;
httpServer.listen(PORT, () => {
  console.log(`💡 test server listening on http://localhost:${PORT}`);
});
