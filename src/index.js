import readlineSync from 'readline-sync';

const roundsCount = 3;
export default (game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${game.description}`);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = game.getRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer? ');
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
