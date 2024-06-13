'use strict';

const account = {
   incomes: [1000, 5000, 7000],
   incomeDates: [
      '2019-11-18T21:31:17.178Z',
      '2019-11-23T07:42:02.383Z',
      '2020-11-28T09:15:04.904Z',
   ],
   outcomes: [-800, -60, -20],
   outcomeDates: [
      '2019-12-18T21:31:17.178Z',
      '2019-12-23T07:42:02.383Z',
      '2020-12-28T09:15:04.904Z',
   ],
   currency: 'EUR',
   locale: 'pt-PT',
};

const account1 = {
   movements: [1000, 5000, 7000],
   movementsDates: [
      '2019-11-18T21:31:17.178Z',
      '2019-11-23T07:42:02.383Z',
      '2020-11-28T09:15:04.904Z',
   ],
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

const btnRadio = document.getElementsByName('category');

const formatMovementDate = function (date, locale) {
   const calcDaysPassed = (date1, date2) =>
      Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

   const daysPassed = calcDaysPassed(new Date(), date);

   if (daysPassed === 0) return 'Today';
   if (daysPassed === 1) return 'Yesterday';
   if (daysPassed <= 7) return `${daysPassed} days ago`;
   else {
      return new Intl.DateTimeFormat(locale).format(date);
   }
};

const displayMovements = function (acc) {
   const description = inputDescription.value;
   // const amount = Number(inputAmount.value);
   // const now = new Date();
   // const locale = navigator.language;
   // const options = {
   //    day: 'numeric',
   //    month: 'long',
   //    year: 'numeric',
   // };

   // Add date
   // const date = new Intl.DateTimeFormat(locale, options).format(now);

   // Add category
   const getCategory = document.querySelector('input[name="category"]:checked');

   const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

   const category = capitalize(getCategory.value);

   // btnRadio.forEach((radio) => {
   //    if (radio.checked) {
   //       console.log(radio.value);
   //    }
   // });

   const movs = acc.movements;

   movs.forEach(function (mov, i) {
      const date = new Date(acc.movementsDates[i]);
      const displayDate = formatMovementDate(date, acc.locale);

      const html = `<div class="movements__row">
                  <span class="fa-solid fa-house card__icon"></span>
                  <span class="movements__row--description">
                     <label class="movements__row__description--name"
                        >${description}</label
                     >
                     <div class="movements__row__description--type">
                        ${category}
                     </div>
                  </span>
                  <div class="movements__date">${displayDate}</div>
                  <div class="movements__value">${mov}€</div>
               </div>`;

      containerMovements.insertAdjacentHTML('afterbegin', html);
   });
};

// displayMovements();

// Event Handlers
btnIncome.addEventListener('click', function (e) {
   e.preventDefault();
   displayMovements(account1.movements);
});
