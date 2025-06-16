"use client";

import React, { useState, useEffect } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

const teamThemes = {
  RCB: {
    background1: "#9D0001",
    background2: "#030212",
    text: "white",
    statColor: "#DECB64",
  },
  DC: {
    background1: "#458CFE",
    background2: "#F9402E",
    text: "black",
    statColor: "white",
  },
  KKR: {
    background1: "#413769",
    background2: "#FABE04",
    text: "white",
    statColor: "#FABE04",
    outlineColor: "#413769",
    statOutlineColor: "#000000",
  },
  CSK: {
    background1: "#2A2567",
    background2: "#E9E14E",
    text: "white",
    statColor: "#E9E14E",
    outlineColor: "#000000",
    statOutlineColor: "#000000",
  },
  MI: {
    background1: "#BDAD5F",
    background2: "#25429E",
    text: "white",
    statColor: "#25429E",
    outlineColor: "#25429E",
    statOutlineColor: "white",
  },
  SRH: {
    background1: "#171916",
    background2: "#FA472C",
    text: "white",
    statColor: "white",
    outlineColor: "#000000",
    statOutlineColor: "#000000",
  },
  LSG: {
    background1: "#152851",
    background2: "#F43200",
    text: "white",
    statColor: "white",
    outlineColor: "#152851",
    statOutlineColor: "#152851",
  },
  GT: {
    background1: "#19253D",
    background2: "#D8C99E",
    text: "white",
    statColor: "white",
    outlineColor: "#19253D",
    statOutlineColor: "#19253D",
  },
  RR: {
    background1: "#252042",
    background2: "#F5399B",
    text: "white",
    statColor: "white",
    outlineColor: "#F5399B",
    statOutlineColor: "#F5399B",
  },
  PBKS: {
    background1: "#D6C478",
    background2: "#CA343B",
    text: "black",
    outlineColor: "white",
    statOutlineColor: "#D6C478",
  },
};

const teamLogos = {
  RCB: "/logos/rcb.png",
  DC: "/logos/dc.png",
  KKR: "/logos/kkr.png",
  GT: "/logos/gt.png",
  SRH: "/logos/srh.png",
  LSG: "/logos/lsg.png",
  PBKS: "/logos/pbks.png",
  MI: "/logos/mi.png",
  RR: "/logos/rr.png",
  CSK: "/logos/csk.png",
};

export default function Card({
  card,
  hidden,
  onStatSelect,
  isUserTurn,
  gameEnded,
  isUserCard,
}) {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (card) {
      const imgLogo = new Image();
      imgLogo.src = teamLogos[card.team];
      imgLogo.onload = () => setLogoLoaded(true);

      const imgCard = new Image();
      imgCard.src = card.img;
      imgCard.onload = () => setImageLoaded(true);
    }
  }, [card]);

  if (!card) return null;

  const theme = teamThemes[card.team] || {};
  const gradientStyle = {
    background: `linear-gradient(45deg, ${theme.background1} 50%, ${theme.background2} 50%)`,
  };

  const cardStyles = {
    color: theme.text || "black",
    p: "2",
    borderRadius: "12px",
    boxShadow: "md",
    m: "2",
    display: "inline-block",
    textAlign: "center",
    width: "calc(25% - 8px)",
    height: "auto",
    mr: "calc(2% + 4px)",
    ml: "calc(2% + 4px)",
    padding: "20px",
    lineHeight: "1.6",
    border: isUserCard ? "none" : "2px solid #000000",
    ...gradientStyle,
    transform: "scale(1.1)",
  };

  if (hidden) {
    return (
      <Box
        sx={{
          ...cardStyles,
          background: `url('https://akm-img-a-in.tosshub.com/indiatoday/images/author/21_08_2020-ipl_logo_20650553.jpg') center/cover no-repeat`,
          color: "transparent",
          minH: "450px",
        }}
      />
    );
  }

  const statStyles = {
    color: theme.statColor || "black",
    textShadow: `1px 1px 2px ${theme.statOutlineColor || ""}`,
    cursor: isUserTurn && !gameEnded ? "pointer" : "default",
  };

  const textStyles = {
    color: theme.text || "black",
    textShadow: `1px 1px 2px ${theme.outlineColor || ""}`,
  };

  const statsLeft = ["runs", "batAvg", "batSR", "highScore"];
  const statsRight = ["wickets", "bowlAvg", "bowlER", "bestBowling"];

  function handleMouseEnter(key) {
    const el = document.getElementById(key);
    if (el) el.style.transform = "scale(1.1)";
  }
  function handleMouseLeave(key) {
    const el = document.getElementById(key);
    if (el) el.style.transform = "scale(1)";
  }

  return (
    <Box sx={cardStyles}>
      {isUserCard && imageLoaded && (
        <img
          src={card.img}
          alt={card.name}
          style={{
            width: "110%",
            height: "175px",
            objectFit: "cover",
            objectPosition: "top right",
            marginBottom: "11px",
            borderRadius: "11px",
            transform: "scale(1.04)",
          }}
        />
      )}

      <Text fontSize="19px" fontWeight="bold" mb="2" style={textStyles}>
        {card.name.toUpperCase()}
      </Text>

      <Box mb="11px">
        {logoLoaded && (
          <img
            src={teamLogos[card.team]}
            alt={`${card.team} Logo`}
            style={{
              minWidth: "63px",
              minHeight: "55px",
              maxWidth: "65px",
              maxHeight: "65px",
              margin: "auto",
              display: "block",
              transform: "scale(1.1)",
            }}
            onLoad={() => setLogoLoaded(true)}
          />
        )}
      </Box>

      <Flex justify="space-between">
        <Box w="48%" textAlign="left">
          {statsLeft.map((key) => (
            <div
              key={key}
              id={key}
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={() => handleMouseLeave(key)}
            >
              <Text
                as="span"
                fontWeight="bold"
                style={statStyles}
                onClick={() => isUserTurn && !gameEnded && onStatSelect(key)}
              >
                {key}:
              </Text>{" "}
              {card[key]}
            </div>
          ))}
        </Box>
        <Box w="48%" textAlign="right">
          {statsRight.map((key) => (
            <div
              key={key}
              id={key}
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={() => handleMouseLeave(key)}
            >
              {card[key]}{" "}
              <Text
                as="span"
                fontWeight="bold"
                style={statStyles}
                onClick={() => isUserTurn && !gameEnded && onStatSelect(key)}
              >
                {key}
              </Text>
            </div>
          ))}
        </Box>
      </Flex>
    </Box>
  );
}
