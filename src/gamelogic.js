// getRandom;
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Brain-progression;
const progression = (start, step, run) => {
  const result = [];
  for (let j = 1; j <= run; j += 1) {
    result.push(start + step * j);
  }
  return result;
};

const missingCharacter = (arr, num, length) => {
  const resultNum = [];
  const resultArr = [];
  for (let j = 0; j <= length - 1; j += 1) {
    if (j !== num) {
      resultArr.push(arr[j]);
    } if (j === num) {
      resultArr.push('..');
      resultNum.push(arr[j]);
    }
  }
  return [resultArr, resultNum];
};

// Brain-calc
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

// Brain-gcd
const gcd = (num1, num2) => {
  if (num2 === 0) {
    return Math.abs(num1);
  }
  return gcd(num2, num1 % num2);
};

// Brain-even
const evenNumber = (num) => {
  if (num % 2 !== 0) {
    return 'no';
  }
  return 'yes';
};

// Brain-prime
const primeNumber = (num) => {
  let result = 'yes';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      result = 'no';
      break;
    }
  }
  return result;
};
export default {
  getRandomNum,
  progression,
  missingCharacter,
  calculation,
  gcd,
  evenNumber,
  primeNumber,
};
