import readlineSync from 'readline-sync';

export default (game) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${game.description}`);
  const numberOfRounds = 3;
  let i = 1;
  while (i <= numberOfRounds) {
    const [question, answer] = game.getRaund();
    console.log(`Question: ${question}`);
    const userResponse = readlineSync.question('Your answer? ');
    if (userResponse !== answer) {
      console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    i += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
