import index from '../index.js';
import gamelogic from '../gamelogic.js';

const descGame = 'What number is missing in the progression?';
const gameLogic = () => {
  const num1 = gamelogic.getRandomNum(1, 10);
  const num2 = gamelogic.getRandomNum(1, 10);
  const length = gamelogic.getRandomNum(5, 10);
  const result = gamelogic.progression(num1, num2, length);
  const resultLength = result.length;
  const num3 = gamelogic.getRandomNum(0, resultLength - 1);
  const resultQuestion = gamelogic.missingCharacter(result, num3, resultLength)[0].join(' ');
  const resultAnswer = gamelogic.missingCharacter(result, num3, resultLength)[1].join(' ');
  return [resultQuestion, resultAnswer];
};
const gameInt = { descGame, gameLogic };
const startGame = () => index(gameInt);
export default startGame;
