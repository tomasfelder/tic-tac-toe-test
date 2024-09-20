import { Player } from '../types/game';

function getRandomGameStarter() {
  return Math.random() < 0.5 ? Player.X : Player.O;
}

export default getRandomGameStarter;
