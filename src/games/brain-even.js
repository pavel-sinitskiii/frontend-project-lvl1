import play from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 !== 0;
const getRound = () => {
  const question = generateRandomNumber(1, 100);
  const answer = isEven(question) ? 'no' : 'yes';
  return [question, answer];
};
const game = { description, getRound };
const startGame = () => play(game);
export default startGame;
