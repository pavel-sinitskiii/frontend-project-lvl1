import index from '../index.js';
import gamelogic from '../gamelogic.js';

const descGame = 'Find the greatest common divisor of given numbers.';
const gameLogic = () => {
  const firstNum = gamelogic.getRandomNum(0, 10);
  const secondNum = gamelogic.getRandomNum(0, 10);
  const resultQuestion = `${firstNum} ${secondNum}`;
  const resultAnswer = gamelogic.gcd(firstNum, secondNum).toString();
  return [resultQuestion, resultAnswer];
};
const gameInt = { descGame, gameLogic };
const startGame = () => index(gameInt);
export default startGame;
