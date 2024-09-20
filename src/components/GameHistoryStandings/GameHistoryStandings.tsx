import { GameHistory, Player } from '../../types/game';
import styles from './GameHistoryStandings.module.css';

type GameHistoryStandingsProps = {
  gameHistory: GameHistory;
};

const GameHistoryStandings = ({ gameHistory }: GameHistoryStandingsProps) => (
  <div className={styles.gameHistoryContainer}>
    <span className={styles.gameHistoryContainerTitle}>
      <strong>Player {Player.X}:</strong> {gameHistory[Player.X]} wins
    </span>
    <span className={styles.gameHistoryContainerTitle}>
      <strong>Player {Player.O}:</strong> {gameHistory[Player.O]} wins
    </span>
  </div>
);

export default GameHistoryStandings;
