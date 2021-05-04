#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

console.log(`Hello, ${userName}!`);
console.log('What number is missing in the progression?');
let i = 1;
while (i <= 3) {
  const progression = (length) => {
    const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const num1 = getRandomNum(1, 100);
    const num2 = getRandomNum(1, 100);
    const result = [];
    for (let j = num1; j <= length; j += num2) {
      result.push(j);
    }
    if (result.length >= 5 && result.length <= 10) {
      return result;
    }
    return progression(num1, num2);
  };
  const result = progression();
  const resultLength = result.length;
  const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const num3 = getRandomNum(0, resultLength - 1);
  const missingCharacter = (arr, num) => {
    const resultNum = [];
    const resultArr = [];
    for (let j = 0; j <= resultLength - 1; j += 1) {
      if (j !== num) {
        resultArr.push(arr[j]);
      } if (j === num) {
        resultArr.push('..');
        resultNum.push(arr[j]);
      }
    }
    return [resultArr, resultNum];
  };
  const resultSequence = missingCharacter(result, num3)[0].join(' ');
  const resultNum = missingCharacter(result, num3)[1].join(' ');
  console.log(`Question: ${resultSequence}`);
  const answer = readlineSync.question('Your answer? ');
  if (answer === resultNum) {
    console.log('Correct!');
    i += 1;
  } else if (answer !== resultNum) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${resultNum}'.\nLet's try again, ${userName}`);
    break;
  }
  if (i > 3) {
    console.log(`Congratulations, ${userName}!`);
    break;
  }
}
