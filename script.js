'use strict';

const incomes = {
   movements: [1000, 5000, 7000],
   movementsDates: [
      '2019-11-18T21:31:17.178Z',
      '2019-11-23T07:42:02.383Z',
      '2020-11-28T09:15:04.904Z',
   ],
   currency: 'EUR',
   locale: 'pt-PT',
};

const outcomes = {
   movements: [-800, -60, 2000],
   movementsDates: [
      '2019-12-18T21:31:17.178Z',
      '2019-12-23T07:42:02.383Z',
      '2020-12-28T09:15:04.904Z',
   ],
   currency: 'EUR',
   locale: 'pt-PT',
};

/// Elements
const labelDate = document.querySelector('date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');

const containerMovements = document.querySelector('.movements__container');

const inputDescription = document.querySelector('#description');
const inputAmount = document.querySelector('#amount');

const btnIncome = document.querySelector('#add__income');
const btnExpense = document.querySelector('#add__expense');

const displayMovements = function () {
   const description = inputDescription.value;
   const amount = inputAmount.value;
   const now = new Date();
   const locale = navigator.language;
   const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
   };

   const date = new Intl.DateTimeFormat(locale, options).format(now);

   const html = `<div class="movements__row">
                  <span class="fa-solid fa-house card__icon"></span>
                  <span class="movements__row--description">
                     <label class="movements__row__description--name"
                        >${description}</label
                     >
                     <div class="movements__row__description--type">
                        Entertainment
                     </div>
                  </span>
                  <div class="movements__date">${date}</div>
                  <div class="movements__value">${amount}€</div>
               </div>`;

   containerMovements.insertAdjacentHTML('afterbegin', html);
};

// displayMovements();

btnIncome.addEventListener('click', function (e) {
   e.preventDefault();
   displayMovements();
});
