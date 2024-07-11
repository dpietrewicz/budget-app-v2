'use strict';

const account = {
   id: [111, 222, 333],
   description: ['apple', 'orange', 'watermelon'],
   amount: [1, 2, 3],
   category: ['Groceries', 'Transportation', 'Housing'],
   date: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
   ],
};

const incomeBtn = document.querySelector('#add__income');
const expenseBtn = document.querySelector('#add__expense');

const description = document.querySelector('#description');
const amount = document.querySelector('#amount');

const inputForm = document.querySelector('#input__form');
const type = document.querySelector('.select__type');
const moneyAvailable = document.querySelector('#amount__available');
const moneyIn = document.querySelector('#amount__in');
const moneyOut = document.querySelector('#amount__out');
const itemsContainer = document.querySelector('#items__container');

const inputType = document.querySelector('.form__input--type');
const inn = document.querySelector('.inputs__container--type');

let incomes = [
   {
      id: 3600,
      description: 'water',
      amount: '5',
      category: 'Groceries',
      date: '11/07/2024',
   },
   {
      id: 3300,
      description: 'rent',
      amount: '1000',
      category: 'Housing',
      date: '21/07/2024',
   },
];

// let housing = [];

incomeBtn.addEventListener('click', function (e) {
   e.preventDefault();

   const newIncome = new Item();

   incomes = [...incomes, newIncome];

   const ui = new UI();

   console.log(incomes);

   // const desc = document.querySelector('#description').value;
   // console.log(desc);
   // account.description.push(desc);
   // console.log(account);

   // const newArr = account.amount.map((item) => item);
   // console.log(newArr);
   // newIncome.clearInputs();
});

// ITEM CONTROLLER
class Item {
   constructor(id, description, amount, category, date) {
      this.id = id;
      this.description = description;
      this.amount = amount;
      this.category = category;
      this.date = date;
      this.createId();
      this.getInputValues();
      this.capitalize();
      this.addDate();
      // this.addValues();
   }

   createId() {
      this.id = Math.floor(Math.random() * 10000);
   }

   getInputValues() {
      this.description = document.querySelector('#description').value;
      this.amount = document.querySelector('#amount').value;
      this.category = document.querySelector(
         'input[name="category"]:checked'
      ).value;
   }

   capitalize() {
      this.category = this.category[0].toUpperCase() + this.category.slice(1);
      return this.category;
   }

   addDate() {
      this.date = new Intl.DateTimeFormat('pt-PT').format(this.date);
      // this.date = new Date().toISOString();
   }

   // addValues() {
   //    incomes.id.push(this.id);
   //    incomes.description.push(this.description);
   //    incomes.amount.push(+this.amount);
   //    incomes.category.push(this.category);
   //    incomes.date.push(this.date);
   // }

   clearInputs() {
      this.description = document.querySelector('#description').value = '';
      this.amount = document.querySelector('#amount').value = '';
      this.category = document.querySelector(
         'input[name="category"]:checked'
      ).checked = false;
   }
}

class UI {
   constructor() {
      this.displayData();
      this.updateIn();
      this.updateBudgets('Groceries');
      this.updateBudgets('Housing');
   }

   displayData() {
      incomes.forEach((item) => {
         console.log(item.category);
         const html = `<div class="movements__row">
                     <span class="fa-solid fa-house card__icon"></span>
                     <span class="movements__row--description">
                        <label class="movements__row__description--name"
                           >${item.description}</label
                        >
                        <div class="movements__row__description--type">
                           ${item.category}
                        </div>
                     </span>
                     <div class="movements__date">${item.date}</div>
                     <div class="movements__value">${item.amount}</div>
                     <p class="symbol">€</p>
                      </div>`;

         itemsContainer.insertAdjacentHTML('afterbegin', html);
      });
   }

   updateIn() {
      // const allIncome = document.querySelectorAll('.movements__value');
      const incomeCount = incomes.map((item) => +item.amount);
      console.log(incomeCount);
      const incomeSum = incomeCount.reduce(function (a, b) {
         return a + b;
      }, 0);

      const displayIn = (document.querySelector('#amount__in').innerHTML =
         incomeSum.toFixed(2));
   }

   updateBudgets(cat) {
      console.log(`Hello '${cat}'`);
      const filterCat = incomes.filter((item) => item.category === `${cat}`);
      const catCount = filterCat.map((item) => +item.amount);
      const catSum = catCount.reduce((a, b) => a + b, 0);

      const lower = cat.toLowerCase();
      const displayCat = (document.querySelector(`#${lower}`).innerHTML =
         catSum.toFixed(2));
      console.log(filterCat);
      console.log(catCount);
   }
}

const app = new UI();
// [...account.description].forEach(function (child) {
//    // console.log(child);
// });

// Array.from(account).forEach((item) => console.log(item));

// const arr3 = Object.keys(account).map(function (key) {
//    return account[key];
// });
// console.log(arr3);

// const arr4 = Object.entries(account);
// // console.log(arr4);

// for (let el in account) {
//    console.log(`On ${el}, it's ${account[el]}!`);
// }
