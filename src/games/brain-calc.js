import index from '../index.js';
import gamelogic from '../gamelogic.js';

const descGame = 'What is the result of the expression?';
const gameLogic = () => {
  const firstNum = gamelogic.getRandomNum(1, 10);
  const secondNum = gamelogic.getRandomNum(1, 10);
  const operators = ['+', '-', '*'];
  const randomOperators = operators[Math.floor(Math.random() * 3)];
  const resultQuestion = `${firstNum} ${randomOperators} ${secondNum}`;
  const result = gamelogic.calculation(randomOperators, firstNum, secondNum).toString();
  return [resultQuestion, result];
};
const gameInt = { descGame, gameLogic };
const startGame = () => index(gameInt);
export default startGame;
