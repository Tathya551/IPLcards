import React, { useState } from "react";
import { ChakraProvider, Box, Button, Flex, Select } from "@chakra-ui/react";
import Card from "./Card";
import cardData from "./cardData";

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Instructions = () => {
  return (
    <Box
      p="4"
      mb="4"
      bg=""
      borderRadius="md"
      boxShadow="md"
      textAlign="left"
      color="darkblue"
      textShadow="1px 1px 2px white"
      fontWeight="bold"
    >
      <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Instructions:</h2>
      <ul style={{ paddingLeft: "20px" }}>
        <li>
          This is a cricket cards game, similar to what we used to play in
          childhood.
        </li>
        <li>Here, you'll play against the computer.</li>
        <li>
          Select the number of cards you want to play with, and then start the
          game.
        </li>
        <li>
          The cards will be distributed evenly, and it will be your turn to
          choose a stat.
        </li>
        <li>Each card has 8 stats based on the cricketers' IPL careers.</li>
        <li>
          If the stat you choose is better than the computer's, you win the
          round, otherwise, the computer wins.
        </li>
        <li>The winner of the round gets the opponent's card.</li>
        <li>
          The player who acquires all of the opponent's cards wins the game.
        </li>
        <li>
          Use your cricket knowledge to choose the most probable winning stat
          and relive childhood memories!
        </li>
      </ul>
    </Box>
  );
};

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [userCards, setUserCards] = useState([]);
  const [computerCards, setComputerCards] = useState([]);
  const [selectedStat, setSelectedStat] = useState(null);
  const [resultMessage, setResultMessage] = useState("");
  const [isUserTurn, setIsUserTurn] = useState(true);
  const [gameEnded, setGameEnded] = useState(false);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [highestStreak, setHighestStreak] = useState(0);
  const [selectedCardCount, setSelectedCardCount] = useState(cardData.length);

  const distributeCards = () => {
    const shuffledCards = shuffleArray(cardData).slice(0, selectedCardCount);
    const halfIndex = Math.ceil(shuffledCards.length / 2);
    const userHand = shuffledCards.slice(0, halfIndex);
    const computerHand = shuffledCards.slice(halfIndex);
    setUserCards(userHand);
    setComputerCards(computerHand);
  };

  const startGame = () => {
    distributeCards();
    setGameStarted(true);
  };

  const parseBestBowling = (stat) => {
    if (stat === "NaN") {
      return { wickets: -1, runs: -1 };
    }

    if (typeof stat !== "string") {
      return { wickets: -1, runs: -1 };
    }

    const [wickets, runs] = stat
      .split("/")
      .map((num) => parseInt(num.trim(), 10));
    return { wickets, runs };
  };

  const compareBestBowling = (userStat, computerStat) => {
    const userBestBowling = parseBestBowling(userStat);
    const computerBestBowling = parseBestBowling(computerStat);

    if (!userBestBowling && !computerBestBowling) {
      return 0;
    } else if (!userBestBowling) {
      return -1;
    } else if (!computerBestBowling) {
      return 1;
    } else {
      if (userBestBowling.wickets > computerBestBowling.wickets) {
        return 1;
      } else if (userBestBowling.wickets < computerBestBowling.wickets) {
        return -1;
      } else {
        if (userBestBowling.runs < computerBestBowling.runs) {
          return 1;
        } else if (userBestBowling.runs > computerBestBowling.runs) {
          return -1;
        } else {
          return 0;
        }
      }
    }
  };

  const handleStatSelect = (stat) => {
    if (gameEnded || stat === "team" || stat === "name") return;

    setSelectedStat(stat);
    let userStat = userCards[0][stat];
    let computerStat = computerCards[0][stat];

    let winner = "";

    if (stat === "bestBowling") {
      const comparison = compareBestBowling(userStat, computerStat);
      if (comparison === 1) {
        winner = "User";
        setIsUserTurn(true);
        setCurrentStreak((prev) => prev + 1);
        setHighestStreak((prev) => Math.max(prev, currentStreak + 1));
      } else if (comparison === -1) {
        winner = "Computer";
        setIsUserTurn(false);
        setCurrentStreak(0);
      } else {
        winner = "Nobody";
        setCurrentStreak(0);
      }
    } else {
      if (isNaN(userStat) || isNaN(computerStat)) {
        if (isNaN(userStat) && isNaN(computerStat)) {
          winner = "Nobody";
        } else if (isNaN(userStat)) {
          winner = "Computer";
          setIsUserTurn(false);
          setCurrentStreak(0);
        } else {
          winner = "User";
          setIsUserTurn(true);
          setCurrentStreak((prev) => prev + 1);
          setHighestStreak((prev) => Math.max(prev, currentStreak + 1));
        }
      } else if (stat === "bowlER" || stat === "bowlAvg") {
        if (userStat < computerStat) {
          winner = "User";
          setIsUserTurn(true);
          setCurrentStreak((prev) => prev + 1);
          setHighestStreak((prev) => Math.max(prev, currentStreak + 1));
        } else if (userStat > computerStat) {
          winner = "Computer";
          setIsUserTurn(false);
          setCurrentStreak(0);
        } else {
          winner = "Nobody";
          setCurrentStreak(0);
        }
      } else {
        if (userStat > computerStat) {
          winner = "User";
          setIsUserTurn(true);
          setCurrentStreak((prev) => prev + 1);
          setHighestStreak((prev) => Math.max(prev, currentStreak + 1));
        } else if (userStat < computerStat) {
          winner = "Computer";
          setIsUserTurn(false);
          setCurrentStreak(0);
        } else {
          winner = "Nobody";
          setCurrentStreak(0);
        }
      }
    }

    setResultMessage(
      <>
        {stat}:
        <br />
        <br />
        {userCards[0].name.toUpperCase()} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; {computerCards[0].name.toUpperCase()} <br />
        {userStat} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        {computerStat}
      </>
    );

    const newUserCards = [...userCards.slice(1)];
    const newComputerCards = [...computerCards.slice(1)];
    if (stat === "bestBowling") {
      const comparison = compareBestBowling(userStat, computerStat);
      if (comparison === 1) {
        newUserCards.push(userCards[0], computerCards[0]);
      } else if (comparison === -1) {
        newComputerCards.push(computerCards[0], userCards[0]);
      } else {
        newUserCards.push(userCards[0]);
        newComputerCards.push(computerCards[0]);
      }
    } else if (isNaN(userStat) || isNaN(computerStat)) {
      if (isNaN(userStat) && isNaN(computerStat)) {
        newUserCards.push(userCards[0]);
        newComputerCards.push(computerCards[0]);
      } else if (isNaN(userStat)) {
        newComputerCards.push(computerCards[0], userCards[0]);
      } else {
        newUserCards.push(userCards[0], computerCards[0]);
      }
    } else if (stat === "bowlER" || stat === "bowlAvg") {
      if (userStat < computerStat) {
        newUserCards.push(userCards[0], computerCards[0]);
      } else if (userStat > computerStat) {
        newComputerCards.push(computerCards[0], userCards[0]);
      } else {
        newUserCards.push(userCards[0]);
        newComputerCards.push(computerCards[0]);
      }
    } else {
      if (userStat > computerStat) {
        newUserCards.push(userCards[0], computerCards[0]);
      } else if (userStat < computerStat) {
        newComputerCards.push(computerCards[0], userCards[0]);
      } else {
        newUserCards.push(userCards[0]);
        newComputerCards.push(computerCards[0]);
      }
    }

    setUserCards(newUserCards);
    setComputerCards(newComputerCards);

    if (newUserCards.length === 0 || newComputerCards.length === 0) {
      setGameEnded(true);
    }
  };

  const sortedRuns = cardData.map((card) => card.runs).sort((a, b) => b - a);
  const sortedBatAvg = cardData
    .map((card) => card.batAvg)
    .sort((a, b) => b - a);
  const sortedBowlAvg = cardData
    .map((card) => card.bowlAvg)
    .sort((a, b) => a - b);
  const sortedHighScore = cardData
    .map((card) => card.highScore)
    .sort((a, b) => b - a);

  const sortedBatSR = cardData.map((card) => card.batSR).sort((a, b) => b - a);
  const sortedWickets = cardData
    .map((card) => card.wickets)
    .sort((a, b) => b - a);
  const sortedBowlER = cardData
    .map((card) => card.bowlER)
    .sort((a, b) => a - b);

  const handleComputerTurn = () => {
    const statRanks = {
      runs: sortedRuns.indexOf(computerCards[0].runs),
      batAvg: sortedBatAvg.indexOf(computerCards[0].batAvg),
      bowlAvg: isNaN(computerCards[0].bowlAvg)
        ? cardData.length + 1
        : sortedBowlAvg.indexOf(computerCards[0].bowlAvg),
      highScore: sortedHighScore.indexOf(computerCards[0].highScore),
      batSR: sortedBatSR.indexOf(computerCards[0].batSR),
      wickets: sortedWickets.indexOf(computerCards[0].wickets),
      bowlER: isNaN(computerCards[0].bowlER)
        ? cardData.length + 1
        : sortedBowlER.indexOf(computerCards[0].bowlER),
    };

    let topThreeStats = Object.keys(statRanks)
      .sort((a, b) => statRanks[a] - statRanks[b])
      .slice(0, 2);

    let selectedStat = topThreeStats[Math.floor(Math.random() * 2)];

    handleStatSelect(selectedStat);
  };

  const handleContinue = () => {
    setResultMessage("");
    setSelectedStat(null);

    if (userCards.length === 0 || computerCards.length === 0) {
      setGameStarted(false);
      const continueButton = document.getElementById("continue-button");
      if (continueButton) continueButton.disabled = true;
      setHighestStreak((prev) => Math.max(prev, currentStreak));
    }

    if (!isUserTurn) {
      handleComputerTurn();
    }
    if (!isUserTurn && currentStreak > 0) {
      setCurrentStreak((prev) => prev + 1);
    } else {
      setCurrentStreak(0);
    }
  };

  const restartGame = () => {
    setGameStarted(false);
    setGameEnded(false);
    setResultMessage("");
    setSelectedStat(null);
    distributeCards();
  };

  return (
    <ChakraProvider>
      <Box
        textAlign="center"
        p="10"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url('https://media.istockphoto.com/id/802008002/video/5-days-test-cricket-match-playing-between-two-team-in-a-stadium-at-night-with-flood-light.jpg?s=640x640&k=20&c=NPTl5x9BD19uDlZYRNKgE3KdAjPhVfNmUpNGAbMnkxo=')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            marginTop: "-5px",
            color: "darkblue",
            textShadow: "1px 1px 2px white",

            fontWeight: "bold",
          }}
        >
          IPL CARDS GAME
        </h1>
        {!gameStarted && (
          <Flex justify="center" align="center">
            <Select
              value={selectedCardCount}
              onChange={(e) => setSelectedCardCount(Number(e.target.value))}
            >
              {[...Array(cardData.length / 2).keys()]
                .map((i) => (i + 1) * 2)
                .map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
            </Select>
            <Button onClick={startGame} ml={4}>
              Start Game
            </Button>
          </Flex>
        )}
        {!gameStarted && (
          <Box mt={4} p={4} bg="rgba(255, 255, 255, 0.8)" borderRadius="lg">
            <Instructions />
          </Box>
        )}
        {gameStarted && (
          <Flex justify="center" mb={4}>
            <Card
              card={userCards[0]}
              hidden={false}
              onStatSelect={handleStatSelect}
              isUserTurn={isUserTurn}
              gameEnded={gameEnded}
              isUserCard={true}
            />
            <div
              style={{ margin: "0 16px", alignSelf: "center", height: "80px" }}
            >
              {resultMessage && (
                <div
                  style={{
                    position: "relative",
                    top: "-20px",
                    fontSize: "27.98px",
                    color: "darkblue",
                    textShadow: "1px 1px 2px white",

                    fontWeight: "bold",
                  }}
                >
                  {resultMessage}
                </div>
              )}
              {gameStarted && (
                <div
                  style={{
                    marginTop: "50px",
                    color: "darkblue",
                    textShadow: "1px 1px 2px white",

                    fontWeight: "bold",
                    fontSize: "23px",
                  }}
                >
                  {isUserTurn ? "User's Turn" : "Computer's Turn"}
                  <div>Current Streak: {currentStreak}</div>
                  <div>Highest Streak: {highestStreak}</div>
                </div>
              )}
              {gameStarted && !isUserTurn && (
                <Button
                  id="continue-button"
                  onClick={handleContinue}
                  disabled={resultMessage.length > 0}
                >
                  Continue
                </Button>
              )}
              {gameEnded && <Button onClick={restartGame}>Restart Game</Button>}
              {gameEnded &&
                (userCards.length === 0 || computerCards.length === 0) && (
                  <div>
                    {userCards.length === 0 ? "Computer Wins!" : "User Wins!"}
                  </div>
                )}
            </div>
            <Card card={computerCards[0]} hidden={true} isUserCard={false} />
          </Flex>
        )}
        {gameStarted && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                fontSize: "29px",
                marginTop: "29px",
                marginLeft: "30px",
                color: "darkblue",
                textShadow: "1px 1px 2px white",

                fontWeight: "bold",
              }}
            >
              CARDS REMAINING - {userCards.length}
            </div>
            <div
              style={{
                fontSize: "29px",
                marginTop: "29px",
                marginRight: "30px",
                color: "darkblue",
                textShadow: "1px 1px 2px white",

                fontWeight: "bold",
              }}
            >
              CARDS REMAINING - {computerCards.length}
            </div>
          </div>
        )}
      </Box>
    </ChakraProvider>
  );
};

export default App;
