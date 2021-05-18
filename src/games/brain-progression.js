import play from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';
const getProgression = (start, step, length) => {
  const result = [];
  for (let j = 0; j <= length; j += 1) {
    result.push(start + step * j);
  }
  return result;
};
const getQuestion = (progression, index) => {
  const result = progression;
  result[index] = '..';
  return result;
};
const getRound = () => {
  const start = generateRandomNumber(1, 10);
  const step = generateRandomNumber(1, 10);
  const length = generateRandomNumber(5, 10);
  const progression = getProgression(start, step, length);
  const progressionLength = progression.length;
  const hiddenNumberIndex = generateRandomNumber(0, progressionLength - 1);
  const question = getQuestion(progression, hiddenNumberIndex).join(' ');
  const answer = String(start + (hiddenNumberIndex * step));
  return [question, answer];
};
const game = { description, getRound };
const startGame = () => play(game);
export default startGame;
