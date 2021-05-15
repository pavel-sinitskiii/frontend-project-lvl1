import play from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';
const calculate = (operator, num1, num2) => {
  let result = 0;
  if (operator === '+') {
    result = num1 + num2;
  } if (operator === '-') {
    result = num1 - num2;
  } if (operator === '*') {
    result = num1 * num2;
  }
  return result;
};
const getRound = () => {
  const firstNumber = generateRandomNumber(1, 10);
  const secondNumber = generateRandomNumber(1, 10);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[generateRandomNumber(0, 2)];
  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const answer = String(calculate(randomOperator, firstNumber, secondNumber));
  return [question, answer];
};
const game = { description, getRound };
const startGame = () => play(game);
export default startGame;
