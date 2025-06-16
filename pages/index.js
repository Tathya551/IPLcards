"use client";

import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Button,
  Select,
  Input,
} from "@chakra-ui/react";
import Card from "../components/Card";
import Instructions from "../components/Instructions";
import { useSocket } from "../hooks/useSocket";
import cardData from "../data/cardData";

const processed = cardData.map((c) => ({
  ...c,
  bowlER: c.bowlER === 0 ? NaN : c.bowlER,
  bowlAvg: c.bowlAvg === 0 ? NaN : c.bowlAvg,
  bestBowling: c.bestBowling === "0/0/-" ? NaN : c.bestBowling,
}));

const shuffleArr = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export default function Home() {
  const [mode, setMode] = useState("single");
  const [difficulty, setDiff] = useState("hard");
  const [count, setCount] = useState(processed.length);

  const [started, setStarted] = useState(false);
  const [uCards, setUCards] = useState([]);
  const [cCards, setCCards] = useState([]);
  const [userTurn, setUserTurn] = useState(true);
  const [msg, setMsg] = useState("");
  const [curStreak, setCur] = useState(0);
  const [highStreak, setHigh] = useState(0);
  const [ended, setEnded] = useState(false);

  const [roomId, setRoomId] = useState("");
  const [isHost, setIsHost] = useState(false);
  const [mStarted, setMStarted] = useState(false);
  const [turn, setTurn] = useState(null);
  const [mMsg, setMMsg] = useState("");

  function dealLocal() {
    const deck = shuffleArr(processed).slice(0, count);
    const half = Math.ceil(deck.length / 2);
    setUCards(deck.slice(0, half));
    setCCards(deck.slice(half));
    setEnded(false);
    setMsg("");
    setCur(0);
    setHigh(0);
    setUserTurn(true);
  }

  const startSingle = () => {
    dealLocal();
    setStarted(true);
  };
  const restartSingle = () => {
    setStarted(false);
    dealLocal();
  };

  const parseBB = (s) => {
    if (typeof s !== "string" || !s.includes("/"))
      return { wickets: -1, runs: -1 };
    const [w, r] = s.split("/").map((n) => parseInt(n, 10));
    return { wickets: w, runs: r };
  };
  function compare(stat, u, o) {
    if (stat === "bestBowling") {
      const ub = parseBB(u),
        cb = parseBB(o);
      if (ub.wickets !== cb.wickets)
        return ub.wickets > cb.wickets ? "User" : "Computer";
      if (ub.runs !== cb.runs) return ub.runs < cb.runs ? "User" : "Computer";
      return "Nobody";
    }
    if (isNaN(u) || isNaN(o)) {
      if (isNaN(u) && isNaN(o)) return "Nobody";
      return isNaN(u) ? "Computer" : "User";
    }
    if (stat === "bowlAvg" || stat === "bowlER") {
      if (u < o) return "User";
      if (u > o) return "Computer";
      return "Nobody";
    }
    if (u > o) return "User";
    if (u < o) return "Computer";
    return "Nobody";
  }

  const handleSingleStat = (stat) => {
    if (ended || stat === "team" || stat === "name") return;
    const u = uCards[0][stat],
      o = cCards[0][stat];
    const w = compare(stat, u, o);
    if (w === "User") {
      setUserTurn(true);
      setCur((s) => s + 1);
      setHigh((h) => Math.max(h, curStreak + 1));
    } else {
      setUserTurn(false);
      setCur(0);
    }
    setMsg(
      `${stat}:\n\n${uCards[0].name.toUpperCase()} ${u}` +
        `   vs   ${cCards[0].name.toUpperCase()} ${o}`
    );
    const uH = uCards.slice(1),
      oH = cCards.slice(1);
    if (w === "User") uH.push(uCards[0], cCards[0]);
    else if (w === "Computer") oH.push(cCards[0], uCards[0]);
    else {
      uH.push(uCards[0]);
      oH.push(cCards[0]);
    }
    setUCards(uH);
    setCCards(oH);
    if (!uH.length || !oH.length) setEnded(true);
  };

  const handleCompTurn = () => {
    const card = cCards[0];
    const ranks = {
      runs: processed
        .map((c) => c.runs)
        .sort((a, b) => b - a)
        .indexOf(card.runs),
      batAvg: processed
        .map((c) => c.batAvg)
        .sort((a, b) => b - a)
        .indexOf(card.batAvg),
      batSR: processed
        .map((c) => c.batSR)
        .sort((a, b) => b - a)
        .indexOf(card.batSR),
      highScore: processed
        .map((c) => c.highScore)
        .sort((a, b) => b - a)
        .indexOf(card.highScore),
      wickets: processed
        .map((c) => c.wickets)
        .sort((a, b) => b - a)
        .indexOf(card.wickets),
      bowlAvg: isNaN(card.bowlAvg)
        ? Infinity
        : processed
            .map((c) => c.bowlAvg)
            .sort((a, b) => a - b)
            .indexOf(card.bowlAvg),
      bowlER: isNaN(card.bowlER)
        ? Infinity
        : processed
            .map((c) => c.bowlER)
            .sort((a, b) => a - b)
            .indexOf(card.bowlER),
    };
    const sorted = Object.entries(ranks)
      .sort(([, a], [, b]) => a - b)
      .map(([s]) => s);
    let pool;
    if (difficulty === "hard") pool = sorted.slice(0, 2);
    else if (difficulty === "medium") pool = sorted.slice(2, 4);
    else pool = sorted.slice(4);
    handleSingleStat(pool[Math.floor(Math.random() * pool.length)]);
  };

  const handleContinue = () => {
    setMsg("");
    if (!userTurn) handleCompTurn();
  };

  const socket = useSocket({
    roomCreated: ({ roomId }, sock) => {
      setRoomId(roomId);
      setIsHost(true);
    },
    gameStart: ({ hands, turn }, sock) => {
      setMStarted(true);
      setTurn(turn);
      const me = sock.id;
      const you = Object.keys(hands).find((id) => id !== me);
      setUCards(hands[me]);
      setCCards(hands[you]);
    },
    roundResult: (data, sock) => {
      const me = sock.id;
      const them = data.userId === me ? data.oppId : data.userId;
      setMMsg(
        `${data.stat}:\n\n` +
          `${data.userId === me ? "You" : "Opponent"} ${data.values[me]}` +
          `   vs   ${data.oppId === me ? "You" : "Opponent"} ${
            data.values[them]
          }`
      );
      setTurn(data.nextTurn);
      setUCards(data.nextHands[me]);
      setCCards(data.nextHands[them]);
      if (data.gameEnded) {
        alert(data.winner === me ? "You Win!" : "Opponent Wins!");
      }
    },
    errorMessage: (msg) => {
      alert(msg);
    },
  });

  const hostGame = () => {
    if (!socket) return;
    socket.emit("createRoom", { count });
  };

  const joinGame = () => {
    if (!socket) return;
    socket.emit("joinRoom", { roomId });
  };

  return (
    <ChakraProvider>
      <Box
        textAlign="center"
        p="10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5))," +
            "url('https://media.istockphoto.com/id/802008002/video/5-days-test-cricket-match-playing-between-two-team-in-a-stadium-at-night-with-flood-light.jpg?s=640x640&k=20&c=NPTl5x9BD19uDlZYRNKgE3KdAjPhVfNmUpNGAbMnkxo=')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            color: "darkblue",
            textShadow: "1px 1px 2px white",
            fontWeight: "bold",
          }}
        >
          IPL CARDS GAME
        </h1>

        <Flex justify="center" gap="4" mb="4">
          <Select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="single">Single Player</option>
            <option value="multi">Multiplayer</option>
          </Select>
        </Flex>

        {mode === "single" && !started && (
          <Flex justify="center" gap="4" mb="4">
            <Select value={count} onChange={(e) => setCount(+e.target.value)}>
              {[...Array(processed.length / 2).keys()]
                .map((i) => (i + 1) * 2)
                .map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
            </Select>
            <Select
              value={difficulty}
              onChange={(e) => setDiff(e.target.value)}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </Select>
            <Button onClick={startSingle}>Start Game</Button>
          </Flex>
        )}

        {mode === "multi" && !mStarted && (
          <Flex justify="center" gap="4" mb="4">
            {!isHost && (
              <>
                <Select
                  value={count}
                  onChange={(e) => setCount(+e.target.value)}
                  width="80px"
                >
                  {[...Array(processed.length / 2).keys()]
                    .map((i) => (i + 1) * 2)
                    .map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                </Select>
                <Button onClick={hostGame}>Host Game</Button>
              </>
            )}
            <Input
              placeholder="Room"
              value={roomId}
              readOnly={isHost}
              onChange={(e) => setRoomId(e.target.value)}
              width="80px"
            />
            {!isHost && (
              <Button onClick={joinGame} isDisabled={!roomId.trim()}>
                Join Game
              </Button>
            )}
            {isHost && !mStarted && (
              <Box color="darkblue" fontWeight="bold">
                Waiting for opponent…
              </Box>
            )}
          </Flex>
        )}

        {mode === "single" && !started && (
          <Box mt="4" p="4" bg="rgba(255,255,255,0.8)" borderRadius="md">
            <Instructions />
          </Box>
        )}

        {((mode === "single" && started) || (mode === "multi" && mStarted)) && (
          <Flex justify="center" align="flex-start" gap="6" mb="4">
            <Card
              card={uCards[0]}
              hidden={false}
              onStatSelect={
                mode === "single"
                  ? handleSingleStat
                  : (stat) => socket?.emit("selectStat", { roomId, stat })
              }
              isUserTurn={mode === "single" ? userTurn : turn === socket?.id}
              gameEnded={mode === "single" ? ended : false}
              isUserCard
            />

            <Box textAlign="center" mx="4">
              <Box
                fontSize="24px"
                color="darkblue"
                textShadow="1px 1px 2px white"
                fontWeight="bold"
                whiteSpace="pre-wrap"
                mb="2"
              >
                {mode === "single" ? msg : mMsg}
              </Box>
              <Box
                color="darkblue"
                textShadow="1px 1px 2px white"
                fontWeight="bold"
                fontSize="20px"
                mb="2"
              >
                {mode === "single"
                  ? userTurn
                    ? "Your Turn"
                    : "Computer's Turn"
                  : turn === socket?.id
                  ? "Your Turn"
                  : "Opponent's Turn"}
              </Box>
              {mode === "single" && (
                <>
                  <Box>Current Streak: {curStreak}</Box>
                  <Box>Highest Streak: {highStreak}</Box>
                </>
              )}
              {mode === "single" && !userTurn && !ended && (
                <Button mt="4" onClick={handleContinue} isDisabled={!msg}>
                  Continue
                </Button>
              )}
              {mode === "single" && ended && (
                <Button mt="4" onClick={restartSingle}>
                  Restart Game
                </Button>
              )}
            </Box>

            <Card card={cCards[0]} hidden isUserCard={false} />
          </Flex>
        )}

        {((mode === "single" && started) || (mode === "multi" && mStarted)) && (
          <Flex justify="space-between" px="30px">
            <Box
              fontSize="20px"
              color="darkblue"
              textShadow="1px 1px 2px white"
            >
              Your Cards: {uCards.length}
            </Box>
            <Box
              fontSize="20px"
              color="darkblue"
              textShadow="1px 1px 2px white"
            >
              Opponent Cards: {cCards.length}
            </Box>
          </Flex>
        )}
      </Box>
    </ChakraProvider>
  );
}
