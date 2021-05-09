import gameplay from '../index.js';
import getRandomNum from '../utils.js';

const description = 'What number is missing in the progression?';
const progression = (start, step, length) => {
  const result = [];
  for (let j = 1; j <= length; j += 1) {
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
const getRaund = () => {
  const startOfProgression = getRandomNum(1, 10);
  const stepOfProgression = getRandomNum(1, 10);
  const lengthProgression = getRandomNum(5, 10);
  const randomProgression = progression(startOfProgression, stepOfProgression, lengthProgression);
  const progressionLength = randomProgression.length;
  const hiddenNum = getRandomNum(0, progressionLength - 1);
  const question = missingCharacter(randomProgression, hiddenNum, progressionLength)[0].join(' ');
  const answer = missingCharacter(randomProgression, hiddenNum, progressionLength)[1].join(' ');
  return [question, answer];
};
const game = { description, getRaund };
const startGame = () => gameplay(game);
export default startGame;
