import gameplay from '../index.js';
import getRandomNum from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const gcd = (num1, num2) => {
  if (num2 === 0) {
    return Math.abs(num1);
  }
  return gcd(num2, num1 % num2);
};
const getRaund = () => {
  const firstNum = getRandomNum(0, 10);
  const secondNum = getRandomNum(0, 10);
  const question = `${firstNum} ${secondNum}`;
  const resultAnswer = gcd(firstNum, secondNum).toString();
  return [question, resultAnswer];
};
const game = { description, getRaund };
const startGame = () => gameplay(game);
export default startGame;
