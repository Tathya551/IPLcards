import { Server } from "socket.io";
import cardData from "../../data/cardData";

export default function handler(req, res) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server, {
      path: "/api/socket",
      addTrailingSlash: false,
      cors: { origin: "*", methods: ["GET", "POST"] },
    });

    res.socket.server.io = io;
    io.games = new Map();

    io.on("connection", (socket) => {
      socket.on("createRoom", ({ count } = {}) => {
        const roomId = String(Math.floor(Math.random() * 900) + 100);
        socket.join(roomId);

        const numCards = count || cardData.length;
        const deck = shuffle(cardData).slice(0, numCards);
        const half = Math.ceil(deck.length / 2);

        io.games.set(roomId, {
          sockets: [socket.id],
          hands: { [socket.id]: deck.slice(0, half) },
          turn: socket.id,
          count: numCards,
        });

        socket.emit("roomCreated", { roomId });
      });

      socket.on("joinRoom", ({ roomId }) => {
        const game = io.games.get(roomId);
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
      });

      socket.on("selectStat", ({ roomId, stat }) => {
        const game = io.games.get(roomId);
        if (!game || game.turn !== socket.id) return;

        const [p1, p2] = game.sockets;
        const me = socket.id;
        const them = me === p1 ? p2 : p1;
        const myHand = game.hands[me];
        const opHand = game.hands[them];

        const myCard = myHand.shift();
        const opCard = opHand.shift();
        const result = compare(stat, myCard, opCard);

        if (result === "User") {
          myHand.push(myCard, opCard);
          game.turn = me;
        } else if (result === "Computer") {
          opHand.push(opCard, myCard);
          game.turn = them;
        } else {
          myHand.push(myCard);
          opHand.push(opCard);
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
          values: { [me]: myCard[stat], [them]: opCard[stat] },
          nextHands: game.hands,
          nextTurn: game.turn,
          gameEnded: ended,
          winner,
        });
      });

      socket.on("disconnect", () => {});
    });
  }

  res.end();
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function parseBestBowling(s) {
  if (typeof s !== "string" || !s.includes("/"))
    return { wickets: -1, runs: -1 };
  const [w, r] = s.split("/").map((n) => parseInt(n, 10));
  return { wickets: w, runs: r };
}

function compare(stat, uCard, oCard) {
  const u = uCard[stat],
    c = oCard[stat];
  if (stat === "bestBowling") {
    const ub = parseBestBowling(u),
      cb = parseBestBowling(c);
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
