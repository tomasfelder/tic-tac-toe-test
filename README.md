# Tic Tac Toe Game Exercise (TypeScript)

## Objective
Create a functional Tic Tac Toe game using React with TypeScript, HTML canvas, Konva, and react-konva libraries.

## Getting Started
1. Fork this repository to your GitHub account.
2. Clone your forked repository to your local machine.
3. Install the dependencies by running `npm install` in the project directory.
4. Start the development server with `npm start`.

## Core Requirements
1. Implement a 3x3 Tic Tac Toe game board.
2. Allow two players to take turns.
3. Display the current player's turn.
4. Indicate when a player wins or when the game ends in a draw.
5. Provide a way to start a new game.
6. Keep track of each player's score.

## Technical Requirements
- Use React with TypeScript for the application structure.
- Implement the game board using HTML canvas with Konva and react-konva libraries.
- Ensure proper typing for all components, functions, and variables.
- Ensure the game is responsive and works on different screen sizes.

## Game Interaction
- Clicking on a board cell should place the current player's symbol (X or O).

## Bonus Features (Optional)
1. Drag-and-Drop Gameplay:
   - Implement a "bank" of X's and O's for each player.
   - Allow players to drag their symbols from the bank to the game board.
2. Add animations for placing symbols or winning combinations.
3. Implement an AI opponent for single-player mode.
4. Add sound effects for moves and wins.

## Deliverables
- Complete source code in your forked GitHub repository.
- Update the README file with:
  - Instructions on how to run the project.
  - Brief explanation of your implementation choices.
  - Any challenges faced and how you overcame them.
  - List of implemented bonus features (if any).

## Time Limit
You have up to 1 day to complete this exercise, but feel free to submit it earlier if you're satisfied with your work.

## Evaluation Criteria
- Functionality and completeness of the game
- Code quality, organization, and proper use of TypeScript
- User experience and interface design
- Creative solutions and any additional features

## Submission
1. Ensure all your changes are committed and pushed to your forked repository.
2. Send us the link to your forked repository.
3. If you've deployed the game (optional), include the live demo link.

## Sketch
Here's a basic sketch of the expected layout:

+-----------------------------------+
|        Tic Tac Toe Game           |
+-----------------------------------+
|   Player X: 0  |  Player O: 0     |
+-----------------------------------+
|       |       |       |
|   X   |   O   |   X   |
|       |       |       |
+-------+-------+-------+
|       |       |       |
|   O   |   X   |       |
|       |       |       |
+-------+-------+-------+
|       |       |       |
|       |   O   |   X   |
|       |       |       |
+-----------------------------------+
|   Current Turn: Player O          |
+-----------------------------------+
|        [New Game Button]          |
+-----------------------------------+
Bonus: Player Banks
X X X X X     O O O O O

## Additional Resources and Guidelines

### Konva Documentation
To help you implement the game mechanics, especially for mouse interactions and optional drag-and-drop functionality, please refer to the following Konva documentation:

- [Konva Overview](https://konvajs.org/docs/index.html)
- [React Konva](https://konvajs.org/docs/react/Intro.html)
- [Drag and Drop](https://konvajs.org/docs/drag_and_drop/Drag_and_Drop.html)

These resources will provide you with the necessary information to handle user interactions within the canvas.

### Mouse Gestures
For implementing game moves and interactions, you'll need to use mouse events. Refer to the Konva Events documentation to understand how to capture and handle mouse clicks, moves, and other relevant events.

### Drag and Drop (for Bonus Feature)
If you choose to implement the drag-and-drop bonus feature, the Drag and Drop section of the Konva documentation will be particularly useful. It explains how to make shapes draggable and how to handle drop events.

### Important Note on AI Usage
Please note that the use of AI-powered coding assistants or generators (such as ChatGPT, GitHub Copilot, or similar tools) is not allowed for this exercise. We want to evaluate your personal coding skills and problem-solving abilities. All code should be written by you without AI assistance.

## Tips for Success
- Start by implementing the core game logic before moving on to the UI.
- Use TypeScript's type system to your advantage to create clear interfaces and type definitions for your game state and components.
- Break down the problem into smaller, manageable components.
- Comment your code to explain your thought process and any complex logic.
- Don't hesitate to refer to the Konva documentation whenever you're unsure about how to implement a specific feature or interaction.

Remember, we're not just looking for a working game, but also for clean, well-organized, and thoughtfully implemented code. Good luck!