import gameplay from '../index.js';
import getRandomNum from '../utils.js';

const description = 'Answer "yes" if the number is prime, otherwise answer "no".';
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
const getRaund = () => {
  const question = getRandomNum(1, 100);
  const answer = primeNumber(question);
  return [question, answer];
};
const game = { description, getRaund };
const startGame = () => gameplay(game);
export default startGame;
