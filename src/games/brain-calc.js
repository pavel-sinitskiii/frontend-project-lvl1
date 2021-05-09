import gameplay from '../index.js';
import getRandomNum from '../utils.js';

const description = 'What is the result of the expression?';
const calculation = (operator, num1, num2) => {
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
const getRaund = () => {
  const firstNum = getRandomNum(1, 10);
  const secondNum = getRandomNum(1, 10);
  const operators = ['+', '-', '*'];
  const randomOperators = operators[Math.floor(Math.random() * 3)];
  const question = `${firstNum} ${randomOperators} ${secondNum}`;
  const answer = calculation(randomOperators, firstNum, secondNum).toString();
  return [question, answer];
};
const game = { description, getRaund };
const startGame = () => gameplay(game);
export default startGame;
