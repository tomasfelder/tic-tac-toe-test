import { GameStatus, Player } from '../../types/game';
import Button from '../Button/Button';
import styles from './GameInfoVisualizer.module.css';

type GameStatusProps = {
  finishedGameStatus: GameStatus | null;
  currentPlayer: Player;
  onStartNewGame: () => void;
};

const GameInfoVisualizer = ({ finishedGameStatus, currentPlayer, onStartNewGame }: GameStatusProps) => {
  if (!finishedGameStatus?.finished) {
    return <p className={styles.gameInfoContainerTitle}>Player {currentPlayer} is your turn</p>;
  }

  const { winner } = finishedGameStatus;

  return (
    <div className={styles.gameInfoContainer}>
      <p className={styles.gameInfoContainerTitle}>{winner ? `The winner is ${winner}` : 'It’s a tie'}</p>
      <Button onClick={onStartNewGame}>Start a new game</Button>
    </div>
  );
};

export default GameInfoVisualizer;
