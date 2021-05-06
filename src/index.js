import readlineSync from 'readline-sync';
import userName from './cli.js';

const indexJs = (gameInt) => {
  console.log(`Hello, ${userName}!`);
  console.log(`${gameInt.descGame}`);
  let i = 1;
  while (i <= 3) {
    const gameFunction = gameInt.gameLogic();
    const resultQuestion = gameFunction[0];
    const resultAnswer = gameFunction[1];
    console.log(`Question: ${resultQuestion}`);
    const answer = readlineSync.question('Your answer? ');
    if (answer === resultAnswer) {
      console.log('Correct!');
      i += 1;
    } else if (answer !== resultAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${resultAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
    if (i > 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
  }
};
export default indexJs;
