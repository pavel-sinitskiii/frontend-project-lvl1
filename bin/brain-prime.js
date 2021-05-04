#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is prime, otherwise answer "no".');
const primeNumber = (num) => {
  let result = true;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      result = false;
      break;
    }
  }
  return result;
};

let i = 1;
while (i <= 3) {
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const randomNum = getRandom(1, 100);
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer? ', {
    trueValue: ['yes'],
    falseValue: ['no'],
  });
  if (answer !== true && answer !== false) {
    console.log("Answer is not correct!\nLet's try again");
    break;
  } if (primeNumber(randomNum) === true && answer === true) {
    console.log('Correct!');
    i += 1;
  } else if (primeNumber(randomNum) === true && answer === false) {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
    break;
  }
  if (primeNumber(randomNum) === false && answer === false) {
    console.log('Correct!');
    i += 1;
  } else if (primeNumber(randomNum) === false && answer === true) {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    break;
  }
  if (i > 3) {
    console.log(`Congratulations, ${userName}!`);
    break;
  }
}