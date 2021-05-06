import index from '../index.js';
import gamelogic from '../gamelogic.js';

const descGame = 'Answer "yes" if the number is prime, otherwise answer "no".';
const gameLogic = () => {
  const resultQuestion = gamelogic.getRandomNum(1, 100);
  const resultAnswer = gamelogic.primeNumber(resultQuestion);
  return [resultQuestion, resultAnswer];
};
const gameInt = { descGame, gameLogic };
const startGame = () => index(gameInt);
export default startGame;
