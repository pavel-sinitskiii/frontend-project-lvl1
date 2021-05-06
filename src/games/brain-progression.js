import index from '../index.js';
import gamelogic from '../gamelogic.js';

const descGame = 'What number is missing in the progression?';
const gameLogic = () => {
  const startOfProgression = gamelogic.getRandomNum(1, 10);
  const step = gamelogic.getRandomNum(1, 10);
  const lengthProgression = gamelogic.getRandomNum(5, 10);
  const randomProgression = gamelogic.progression(startOfProgression, step, lengthProgression);
  const progressionLength = randomProgression.length;
  const hiddenNum = gamelogic.getRandomNum(0, progressionLength - 1);
  const resultQuestion = gamelogic.missingCharacter(randomProgression, hiddenNum, progressionLength)[0].join(' ');
  const resultAnswer = gamelogic.missingCharacter(randomProgression, hiddenNum, progressionLength)[1].join(' ');
  return [resultQuestion, resultAnswer];
};
const gameInt = { descGame, gameLogic };
const startGame = () => index(gameInt);
export default startGame;
