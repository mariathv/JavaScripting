'use strict';
const modal = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const closebtnsmodal = document.querySelectorAll('.close-modal');
const openbtnsmodal = document.querySelectorAll('.show-modal');

for (let i = 0; i < openbtnsmodal.length; i++) {
  openbtnsmodal[i].addEventListener('click', function () {
    modal[i].classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

  closebtnsmodal[i].addEventListener('click', function () {
    modal[i].classList.add('hidden');
    overlay.classList.add('hidden');
  });
}
