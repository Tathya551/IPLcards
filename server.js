import express from "express";
import { createServer } from "http";
import { Server as IOServer } from "socket.io";
import next from "next";
import cardData from "./data/cardData.js";

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handleNext = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();
  const httpSrv = createServer(app);
  const io = new IOServer(httpSrv, {
    cors: { origin: "*", methods: ["GET", "POST"] },
  });

  const games = new Map();

  io.on("connection", (socket) => {
    console.log("→ client connected:", socket.id);

    socket.on("createRoom", ({ count } = {}) => {
      console.log("📨 createRoom from", socket.id, "count =", count);
      const roomId = String(Math.floor(Math.random() * 900) + 100);
      socket.join(roomId);

      const deck = shuffle(cardData).slice(0, count || cardData.length);
      const half = Math.ceil(deck.length / 2);
      const hands = {
        [socket.id]: deck.slice(0, half),
      };

      games.set(roomId, {
        sockets: [socket.id],
        hands,
        turn: socket.id,
        count: count || cardData.length,
      });

      socket.emit("roomCreated", { roomId });
      console.log("📨 roomCreated →", roomId);
    });

    socket.on("joinRoom", ({ roomId }) => {
      console.log("📨 joinRoom", roomId, "from", socket.id);
      const game = games.get(roomId);
      if (!game || game.sockets.length >= 2) {
        return socket.emit("errorMessage", "Room not found or full");
      }
      socket.join(roomId);
      game.sockets.push(socket.id);

      const deck = shuffle(cardData).slice(0, game.count);
      const half = Math.ceil(deck.length / 2);
      const [hostId] = game.sockets;
      game.hands[hostId] = deck.slice(0, half);
      game.hands[socket.id] = deck.slice(half);

      io.to(roomId).emit("gameStart", {
        hands: game.hands,
        turn: game.turn,
      });
      console.log("📨 gameStart →", roomId);
    });

    socket.on("selectStat", ({ roomId, stat }) => {
      const game = games.get(roomId);
      if (!game || game.turn !== socket.id) return;

      const [p1, p2] = game.sockets;
      const me = socket.id;
      const them = me === p1 ? p2 : p1;
      const myHand = game.hands[me];
      const opHand = game.hands[them];

      const myCard = myHand.shift();
      const oc = opHand.shift();
      const result = compare(stat, myCard, oc);

      if (result === "User") {
        myHand.push(myCard, oc);
        game.turn = me;
      } else if (result === "Computer") {
        opHand.push(oc, myCard);
        game.turn = them;
      } else {
        myHand.push(myCard);
        opHand.push(oc);
      }

      let ended = false,
        winner = null;
      if (game.hands[p1].length === 0) {
        ended = true;
        winner = p2;
      } else if (game.hands[p2].length === 0) {
        ended = true;
        winner = p1;
      }

      io.to(roomId).emit("roundResult", {
        stat,
        userId: me,
        oppId: them,
        values: { [me]: myCard[stat], [them]: oc[stat] },
        nextHands: game.hands,
        nextTurn: game.turn,
        gameEnded: ended,
        winner,
      });
    });

    socket.on("disconnect", () => {
      console.log("← client disconnected:", socket.id);
    });
  });

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function parseBB(stat) {
    if (typeof stat !== "string" || !stat.includes("/"))
      return { wickets: -1, runs: -1 };
    const [w, r] = stat.split("/").map((n) => parseInt(n, 10));
    return { wickets: w, runs: r };
  }

  function compare(stat, uCard, oCard) {
    const u = uCard[stat],
      c = oCard[stat];
    if (stat === "bestBowling") {
      const ub = parseBB(u),
        cb = parseBB(c);
      if (ub.wickets !== cb.wickets)
        return ub.wickets > cb.wickets ? "User" : "Computer";
      if (ub.runs !== cb.runs) return ub.runs < cb.runs ? "User" : "Computer";
      return "Nobody";
    }
    if (isNaN(u) || isNaN(c)) {
      if (isNaN(u) && isNaN(c)) return "Nobody";
      return isNaN(u) ? "Computer" : "User";
    }
    if (stat === "bowlAvg" || stat === "bowlER") {
      if (u < c) return "User";
      if (u > c) return "Computer";
      return "Nobody";
    }
    if (u > c) return "User";
    if (u < c) return "Computer";
    return "Nobody";
  }

  app.all(/.*/, (req, res) => handleNext(req, res));

  const port = parseInt(process.env.PORT || "3000", 10);
  httpSrv.listen(port, () =>
    console.log(`> Server listening on http://localhost:${port}`)
  );
});
