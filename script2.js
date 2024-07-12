'use strict';

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

incomeBtn.addEventListener('click', function (e) {
   e.preventDefault();

   const newIncome = new Item();

   incomes = [...incomes, newIncome];

   itemsContainer.innerHTML = '';

   const ui = new UI();
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
      this.updateBudgets('Transportation');
      this.updateBudgets('Housing');
      this.updateBudgets('Groceries');
      this.updateBudgets('Entertainment');
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
      const filterCat = incomes.filter((item) => item.category === `${cat}`);
      const catCount = filterCat.map((item) => +item.amount);
      const catSum = catCount.reduce((a, b) => a + b, 0);

      const lowerCase = cat.toLowerCase();
      const displayCat = (document.querySelector(`#${lowerCase}`).innerHTML =
         catSum.toFixed(2));
   }
}

const app = new UI();
