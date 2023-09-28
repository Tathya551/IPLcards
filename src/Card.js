import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Card = ({ card, hidden, onStatSelect, isUserTurn, gameEnded }) => {
  if (!card) {
    return null;
  }

  const cardDetails = Object.entries(card).map(([key, value]) => (
    <div key={key}>
      <Text
        as="span"
        fontWeight="bold"
        color="blue.500"
        cursor={isUserTurn && !gameEnded ? "pointer" : "default"}
        onClick={() => isUserTurn && !gameEnded && onStatSelect(key)}
      >
        {key}:
      </Text>{" "}
      {value}
    </div>
  ));

  return (
    <Box
      bg="white"
      color="black"
      p="4"
      borderRadius="md"
      boxShadow="md"
      m="2"
      display="inline-block"
    >
      {hidden ? "Card Back" : cardDetails}
    </Box>
  );
};

export default Card;
