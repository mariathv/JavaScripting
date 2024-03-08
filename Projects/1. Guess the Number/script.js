'use strict';
let randnum = Math.floor(Math.random() * 50) + 1;
document.querySelector('.highscore').value = 0;
document.querySelector('.check').addEventListener('click', function () {
  if (!document.querySelector('.guess').value) {
    document.querySelector('.message').textContent = 'No Value-';
    return;
  }
  console.log(randnum);
  let scr = Number(document.querySelector('.score').textContent);
  let val = document.querySelector('.guess').value;
  if (val > 50) {
    document.querySelector('.message').textContent = 'Between 1 & 20!!!';
    return;
  }
  if (val > randnum) {
    scr--;
    if (scr == 0) {
      document.querySelector('.message').textContent = 'You Lost';
      return;
    }
    document.querySelector('.score').value = scr;
    document.querySelector('.score').textContent = scr;

    let diff = val - randnum;
    if (diff > 10) document.querySelector('.message').textContent = 'Too High';
    else document.querySelector('.message').textContent = 'High';
  } else if (val < randnum) {
    scr--;
    if (scr == 0) {
      document.querySelector('body').style.backgroundColor = '#C05746';
      document.querySelector('.message').textContent = 'You Lost';
      return;
    }
    document.querySelector('.score').value = scr;
    document.querySelector('.score').textContent = scr;
    let diff = randnum - val;
    if (diff > 10) document.querySelector('.message').textContent = 'Too Low';
    else document.querySelector('.message').textContent = 'Low';
  } else {
    document.querySelector('.message').textContent = 'CORRECT! 🙌';
    document.querySelector('body').style.backgroundColor = '#7FB694';
    document.querySelector('.number').textContent = randnum;
    console.log(document.querySelector('.highscore').value);
    if (document.querySelector('.highscore').value < scr) {
      document.querySelector('.highscore').value = scr;
      document.querySelector('.highscore').textContent = scr;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').textContent = ' ';
  document.querySelector('.score').value = 20;
  randnum = Math.floor(Math.random() * 20) + 2;
  document.querySelector('.number').value = '?';
  document.querySelector('body').style.backgroundColor = '#222';
});
