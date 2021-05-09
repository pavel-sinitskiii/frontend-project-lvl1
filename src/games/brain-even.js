import gameplay from '../index.js';
import getRandomNum from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const evenNumber = (num) => (num % 2 !== 0 ? 'no' : 'yes');
const getRaund = () => {
  const question = getRandomNum(1, 100);
  const answer = evenNumber(question);
  return [question, answer];
};
const game = { description, getRaund };
const startGame = () => gameplay(game);
export default startGame;
