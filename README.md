# IPL Cards Game

Welcome to the IPL Cards Game! This interactive web application lets you relive the nostalgia of cricket-themed trading card games. You can play solo against a configurable AI or challenge friends in real time via multiplayer mode.

## Features

- **Dynamic Card Rendering**  
  Each card represents an IPL cricketer with eight real career statistics: runs, batting average, strike rate, high score, wickets, bowling average, economy rate, and best bowling figures.

- **Single-Player Mode with Difficulty Levels**  
  Choose Easy, Medium, or Hard AI settings to adjust the computer’s strategy when selecting stats.

- **Real-Time Multiplayer Mode**  
  Invite a friend to a room code and play head-to-head. Cards are shuffled and dealt equally; turns pass via Socket.IO events.

- **Card Distribution Logic**  
  At game start, select how many cards to play with; the deck is shuffled and split evenly between players.

- **Streak Tracking**  
  See your current winning streak and all-time highest streak as you play.

- **Responsive Design**  
  Built with React and Chakra UI for a seamless experience across desktop and mobile devices.

## How to Play

1. **Select Game Mode**  
   Choose **Single Player** or **Multiplayer** from the mode selector.

2. **Single-Player Setup**

   - Pick an even number of cards (e.g. 10, 20, …).
   - Select a difficulty (Easy, Medium, Hard).
   - Click **Start Game**.

3. **Multiplayer Setup**

   - One player clicks **Host Game** to generate a room code.
   - The second player enters the code and clicks **Join Game**.
   - Once both are connected, click **Start Game**.

4. **Compare Stats**  
   On your turn, click one of the eight stats on your top card.

5. **Win Rounds**  
   If your chosen stat beats the opponent’s, you win the round and take their card; otherwise they take yours.

6. **Win the Game**  
   The first player to collect all the cards wins!

## Installation

```bash
# Clone the repo
git clone https://github.com/username/ipl-cards-game.git

cd ipl-cards-game

# Install dependencies
npm install

# Start development server
npm start
# or
npm run dev
```

Open your browser to `http://localhost:3000`.

## Live Demo

Try it online: [https://iplcards.vercel.app](https://iplcards.vercel.app)

## Technologies Used

- **React**
- **Chakra UI**
- **Socket.IO**
- **Node.js & Express**

## Contributing

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m "Add YourFeature"`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

Feel free to report issues or suggest enhancements. Happy gaming!
