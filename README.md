# Cricket Cards Game

## Overview

The Cricket Cards Game is an interactive web application inspired by the concept of sports trading cards games. In this game, players engage in rounds of card comparisons based on cricket player statistics. The current version of the game is designed for single-player gameplay against a computer opponent.

## Features

- **Start Game**: Users can initiate a game which randomly distributes a set of cricket player cards between the user and the computer.
- **Gameplay**: In each round, the player views the top card of their stack and selects a cricket stat for comparison against the computer's top card.
- **Stat Comparison**: Stats such as runs, batting average, strike rate, wickets, etc., are compared, and the winner of the round takes the opponent's card.
- **Winning Condition**: The game continues until one player acquires all cards.

## Technologies Used

- **ReactJS**: The frontend is built using ReactJS, offering a dynamic and responsive user interface.
- **Chakra UI**: The application uses Chakra UI for styling components and layouts.

## Installation and Setup

1. Clone the repository:
   git clone <repository-url>

2. Install dependencies:
   npm install

3. Run the application:
   npm start

## Future Scope

- **Multiplayer Support**: Plans to extend the game to support multiplayer mode, allowing users to play with friends in real-time.
- **Backend Integration**:
- Development of a Node.js/Express backend.
- Integration with Socket.IO for real-time gameplay and player interaction.
- **Player Profiles and Statistics**: Implementation of user profiles to track individual player stats and history.
- **Enhanced Game Logic**: Refinement of the game's rules and mechanics for a more engaging multiplayer experience.
- **Security and Performance Optimizations**: Ensuring the game's backend is secure and performs efficiently under different loads.
