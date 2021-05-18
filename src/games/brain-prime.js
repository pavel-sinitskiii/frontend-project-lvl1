import play from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is prime, otherwise answer "no".';
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const getRound = () => {
  const question = generateRandomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};
const game = { description, getRound };
const startGame = () => play(game);
export default startGame;
