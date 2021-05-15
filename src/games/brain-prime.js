import play from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is prime, otherwise answer "no".';
const isPrime = (num) => {
  let result = 'yes';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      result = 'no';
      break;
    }
  }
  return result;
};
const getRound = () => {
  const question = generateRandomNumber(1, 100);
  const answer = isPrime(question);
  return [question, answer];
};
const game = { description, getRound };
const startGame = () => play(game);
export default startGame;
