#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?');
let i = 1;
while (i <= 3) {
  const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const operators = ['+', '-', '*'];
  const randomOperators = operators[Math.floor(Math.random() * 3)];
  const randomExpression = `${firstNum} ${randomOperators} ${secondNum}`;
  const calculation = (operator, num1, num2) => {
    if (operator === '+') {
      return num1 + num2;
    } if (operator === '-') {
      return num1 - num2;
    } if (operator === '*') {
      return num1 * num2;
    }
    return calculation;
  };
  const result = calculation(randomOperators, firstNum, secondNum);
  const resultStr = result.toString();
  console.log(`Question: ${randomExpression}`);
  const answer = readlineSync.question('Your answer? ');
  if (answer === resultStr) {
    console.log('Correct!');
    i += 1;
  } else if (answer !== resultStr) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}`);
    break;
  }
  if (i > 3) {
    console.log(`Congratulations, ${userName}!`);
    break;
  }
}
