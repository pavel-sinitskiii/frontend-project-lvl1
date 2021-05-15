import play from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const gcd = (num1, num2) => (num2 === 0 ? Math.abs(num1) : gcd(num2, num1 % num2));
const getRound = () => {
  const firstNumber = generateRandomNumber(0, 10);
  const secondNumber = generateRandomNumber(0, 10);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(gcd(firstNumber, secondNumber));
  return [question, answer];
};
const game = { description, getRound };
const startGame = () => play(game);
export default startGame;
