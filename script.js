'use strict';
let totalScore = 20;
// console.log();
let highScore = 0;
let hiddenNum = Math.trunc(Math.random() * 20) + 1;
// console.log(hiddenNum);
const check = function (str) {
  if (totalScore > 1) {
    document.querySelector(`.message`).textContent = str;
    totalScore--;
    document.querySelector(`.score`).textContent = totalScore;
  } else {
    document.querySelector(`.message`).textContent = `You lost the game !`;
  }
};
document.querySelector('.check').addEventListener('click', function () {
  const userInput = Number(document.querySelector('.guess').value);
  console.log(userInput);
  if (!userInput) {
    document.querySelector(
      '.message'
    ).textContent = `Please Input a Valid Number ! `;
  } else if (userInput == hiddenNum) {
    document.querySelector(`.message`).textContent = 'Correct Number !';
    document.querySelector('body').style.background = ` #60b347`;
    document.querySelector('.number').style.width = `30rem`;
    document.querySelector(`.number`).textContent = hiddenNum;
    if (totalScore > highScore) {
      highScore = totalScore;
      //   console.log(hello);
      document.querySelector(`.highscore`).textContent = highScore;
    }
  } else if (userInput > hiddenNum) {
    check(`To high !`);
  } else if (userInput < hiddenNum) {
    check(`To low!`);
  }
});

document.querySelector(`.again`).addEventListener(`click`, () => {
  hiddenNum = Math.trunc(Math.random() * 20) + 1;
  totalScore = 20;
  document.querySelector(
    '.message'
  ).textContent = `Please Input a Valid Number ! `;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector('body').style.background = ` #222`;
  document.querySelector('.number').style.width = `15rem`;
  document.querySelector(`.score`).textContent = totalScore;
});
