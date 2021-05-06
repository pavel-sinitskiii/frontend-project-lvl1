import index from '../index.js';
import gamelogic from '../gamelogic.js';

const descGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameLogic = () => {
  const resultQuestion = gamelogic.getRandomNum(1, 100);
  const result = gamelogic.evenNumber(resultQuestion);
  return [resultQuestion, result];
};
const gameInt = { descGame, gameLogic };
const startGame = () => index(gameInt);
export default startGame;
