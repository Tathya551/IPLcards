import React from "react";
import { Box, Text, List, ListItem } from "@chakra-ui/react";

export default function Instructions() {
  return (
    <Box
      p={4}
      mb={4}
      bg="whiteAlpha.800"
      borderRadius="md"
      boxShadow="md"
      textAlign="left"
      color="darkblue"
      textShadow="1px 1px 2px white"
      fontWeight="bold"
    >
      <Text as="h2" fontSize="24px" mb={2}>
        Instructions:
      </Text>
      <List styleType="disc" pl={6}>
        <ListItem>
          This is a cricket cards game, similar to what we used to play in
          childhood.
        </ListItem>
        <ListItem>
          Play solo against the computer in single-player mode or challenge a
          friend in multiplayer mode.
        </ListItem>
        <ListItem>
          Select the number of cards you want to play with, then start the game.
        </ListItem>
        <ListItem>
          In single-player, choose a difficulty level:
          <List styleType="circle" pl={8} mt={2}>
            <ListItem>
              <Text as="span" fontWeight="bold">
                Easy:
              </Text>{" "}
              Computer picks average stats.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">
                Medium:
              </Text>{" "}
              Computer picks mid-tier stats.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">
                Hard:
              </Text>{" "}
              Computer picks best stats.
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          In multiplayer, one player hosts (creates a room and selects cards),
          then shares the room code for others to join.
        </ListItem>
        <ListItem>
          Cards are distributed evenly. On your turn, choose a stat from the top
          card in your hand.
        </ListItem>
        <ListItem>
          Each card has 8 stats based on IPL career data:
          <List styleType="circle" pl={8} mt={2}>
            <ListItem>
              <Text as="span" fontWeight="bold">
                Higher is better:
              </Text>{" "}
              runs, batting average, strike rate, high score, wickets.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">
                Lower is better:
              </Text>{" "}
              bowling average, economy rate.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">
                Best bowling:
              </Text>{" "}
              more wickets or fewer runs is better (e.g., 5/24 beats 4/18).
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          If your chosen stat beats your opponent’s, you win the round;
          otherwise, they win.
        </ListItem>
        <ListItem>The round winner takes both cards into their hand.</ListItem>
        <ListItem>
          The first player to collect all cards wins the game.
        </ListItem>
        <ListItem>
          Use your cricket knowledge to pick the most likely winning stat and
          relive childhood memories!
        </ListItem>
      </List>
    </Box>
  );
}
