#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

console.log(`Hello, ${userName}!`);
console.log('Find the greatest common divisor of given numbers.');
let i = 1;
while (i <= 3) {
  const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const firstNum = getRandomNum(0, 100);
  const secondNum = getRandomNum(0, 100);
  const gcd = (num1, num2) => {
    if (num2 === 0) {
      return Math.abs(num1);
    }
    return gcd(num2, num1 % num2);
  };
  const result = gcd(firstNum, secondNum);
  const resultStr = result.toString();
  console.log(`Question: ${firstNum} ${secondNum}`);
  const answer = readlineSync.question('Your answer? ');
  if (answer === resultStr) {
    console.log('Correct!');
    i += 1;
  } else if (answer !== resultStr) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
    break;
  }
  if (i > 3) {
    console.log(`Congratulations, ${userName}!`);
    break;
  }
}
