import { useCallback, useRef, useState } from 'react';
import { BoardCells, GameStatus, Player, Point } from '../../types/game';
import Board from '../Board/Board';
import { INITIAL_BOARD } from '../../consts/game';
import getGameStatus from '../../functions/getGameStatus';
import styles from './GameContainer.module.css';
import GameInfoVisualizer from '../GameInfoVisualizer/GameInfoVisualizer';
import useGetGameHistory from '../../hooks/useGetGameHistory';
import GameHistoryStandings from '../GameHistoryStandings/GameHistoryStandings';
import getRandomGameStarter from '../../functions/getRandomGameStarter';

const GameContainer = () => {
  const [finishedGameStatus, setFinishedGameStatus] = useState<GameStatus | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState<Player>(getRandomGameStarter());
  const [board, setBoard] = useState<BoardCells>(INITIAL_BOARD);
  const [gameHistory, setGameHistory] = useGetGameHistory();

  const movesCount = useRef(0);

  const onCellClicked = (point: Point) => {
    const { x, y } = point;

    const updatedMatrix = [...board];
    updatedMatrix[x] = [...updatedMatrix[x]];

    if (updatedMatrix[x][y]) {
      return;
    }

    updatedMatrix[x][y] = currentPlayer;

    setBoard(updatedMatrix);

    movesCount.current += 1;

    const currentGameStatus = getGameStatus(updatedMatrix, point, movesCount.current);

    if (currentGameStatus.finished) {
      setFinishedGameStatus(currentGameStatus);

      if (currentGameStatus.winner) {
        setGameHistory({
          ...gameHistory,
          [currentGameStatus.winner]: gameHistory[currentGameStatus.winner] + 1,
        });
      }
      return;
    }

    setCurrentPlayer(prevPlayer => (prevPlayer === Player.X ? Player.O : Player.X));
  };

  const onStartNewGame = useCallback(() => {
    setFinishedGameStatus(null);
    setBoard(INITIAL_BOARD);
    setCurrentPlayer(getRandomGameStarter());
    movesCount.current = 0;
  }, []);

  return (
    <div className={styles.gameContainer}>
      <h1 className={styles.title}>Tic Tac Toe</h1>
      <GameHistoryStandings gameHistory={gameHistory} />
      <Board
        board={board}
        onCellClicked={onCellClicked}
        finishedGameStatus={finishedGameStatus}
        currentPlayer={currentPlayer}
      />
      <GameInfoVisualizer
        finishedGameStatus={finishedGameStatus}
        currentPlayer={currentPlayer}
        onStartNewGame={onStartNewGame}
      />
    </div>
  );
};

export default GameContainer;
