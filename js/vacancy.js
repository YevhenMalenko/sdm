window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  let burger = document.querySelector('.header__btn'),
      menu = document.querySelector('.menu');

  burger.addEventListener('click', function () {
      this.classList.toggle('active');
      menu.classList.toggle('active');
      document.body.classList.toggle('lock');
  });

  //Modal

  let button = document.querySelectorAll('.request__btn'),
      requestForm = document.getElementById('modal'),
      vacancyBtn = document.querySelectorAll('.vacancy__btn'),
      vacancyForm = document.getElementById('vacancy-modal'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelectorAll('.modal-close');

  button.forEach(function (item) {
      item.addEventListener('click', function () {
          overlay.style.display = 'block';
          requestForm.style.display = 'block';
          document.body.style.overflow = 'hidden';
      });
  });

  vacancyBtn.forEach(function (item) {
      item.addEventListener('click', function () {
          overlay.style.display = 'block';
          vacancyForm.style.display = 'block';
          document.body.style.overflow = 'hidden';
      });
  });

  close.forEach(function (item) {
      item.addEventListener('click', function () {
          overlay.style.display = 'none';
          vacancyForm.style.display = 'none';
          requestForm.style.display = 'none';
          document.body.style.overflow = '';

      });

  });

});


 