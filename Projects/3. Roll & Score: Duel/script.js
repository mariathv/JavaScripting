'use strict';
let play = 1;
let scores = [0, 0];
let turn = 0;
const rolldice = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const hold = document.querySelector('.btn--hold');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
console.log(`player ${turn} turn`);
document.getElementById('current--0').textContent = 0;
document.getElementById('current--1').textContent = 0;
document.getElementById('score--1').textContent = 0;
document.getElementById('score--0').textContent = 0;
scores = [0, 0];
dice.classList.add('.hidden');

function holdbuttonclick() {
  if (play == 1) {
    console.log('pressed');
    let prevturn = turn;
    document
      .querySelector(`.player--${turn}`)
      .classList.remove('player--active');
    if (turn == 0) {
      score0.textContent = Number(score0.textContent) + scores[0];
      scores[0] = 0;
      current0.textContent = 0;
      turn = 1;
    } else if (turn == 1) {
      score1.textContent = Number(score1.textContent) + scores[1];
      scores[1] = 0;
      current1.textContent = 0;
      turn = 0;
    }
    document.querySelector(`.player--${turn}`).classList.add('player--active');

    if (document.getElementById(`score--${prevturn}`).textContent > 10) {
      turn = prevturn;
      document.getElementById(`name--${turn}`).textContent += '🎉';
      play = 0;
      document
        .querySelector(`.player--${turn}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${turn}`)
        .classList.remove('player--active');
      dice.classList.add('hidden');
    }
    console.log(`player ${turn + 1} turn`);
  }
}

console.log(play);
rolldice.addEventListener('click', function () {
  if (play == 1) selectdice();
});
hold.addEventListener('click', holdbuttonclick);

document.querySelector('.btn--new').addEventListener('click', init);

function selectdice() {
  let current = document.getElementById(`current--${turn}`);
  let scorecurr = document.getElementById(`score--${turn}`);
  let dicerand = Math.trunc(Math.random() * 6) + 1;
  let img;
  if (dicerand == 1) {
    scores[turn] = 0;
    current.textContent = 0;
    img = 'dice-1.png';
    dice.src = img;
    scorecurr.textContent = 0;
    holdbuttonclick();
    return;
  } else {
    img = `dice-${dicerand}.png`;
  }
  dice.src = img;
  scores[turn] += dicerand;
  current.textContent = scores[turn];
}
