import { useCallback, useState } from 'react';
import { GameHistory, Player } from '../types/game';

const GAME_HISTORY_KEY = 'GAME_HISTORY_KEY';

const INITIAL_GAME_HISTORY = {
  [Player.X]: 0,
  [Player.O]: 0,
};

type UseGetGameHistoryHook = [GameHistory, (newGameHistory: GameHistory) => void];

function loadGameHistory() {
  const savedGameHistory = localStorage.getItem(GAME_HISTORY_KEY);

  if (savedGameHistory) {
    return JSON.parse(savedGameHistory) as GameHistory;
  }

  return INITIAL_GAME_HISTORY;
}

function saveGameHistory(gameHistory: GameHistory) {
  localStorage.setItem(GAME_HISTORY_KEY, JSON.stringify(gameHistory));
}

const useGetGameHistory = (): UseGetGameHistoryHook => {
  const [gameHistory, setGameHistory] = useState<GameHistory>(loadGameHistory());

  const setNewGameHistory = useCallback((newGameHistory: GameHistory) => {
    saveGameHistory(newGameHistory);
    setGameHistory(newGameHistory);
  }, []);

  return [gameHistory, setNewGameHistory];
};

export default useGetGameHistory;
