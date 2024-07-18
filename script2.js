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
      description: 'selling',
      amount: '500',
      category: 'Groceries',
      date: '11/07/2024',
   },
   {
      id: 3300,
      description: 'salary',
      amount: '10000',
      category: 'Housing',
      date: '21/07/2024',
   },
];

let expenses = [
   {
      id: 4300,
      description: 'rent',
      amount: '1000',
      category: 'Housing',
      date: '21/07/2024',
   },
];

incomeBtn.addEventListener('click', function (e) {
   e.preventDefault();

   Item.transactionType();
   const newIncome = new Item();

   incomes = [...incomes, newIncome];

   itemsContainer.innerHTML = '';

   const ui = new UI();
   // ui.displayData(transactions);

   Item.clearInputs();
});

expenseBtn.addEventListener('click', function (e) {
   e.preventDefault();

   const newExpense = new Item();
   Item.transactionType('expense');

   expenses = [...expenses, newExpense];

   itemsContainer.innerHTML = '';

   const ui = new UI();
   // ui.displayData(transactions);

   Item.clearInputs();
});

// ITEM CONTROLLER
class Item {
   constructor(id, description, amount, category, date, type) {
      this.id = id;
      this.description = description;
      this.amount = amount;
      this.category = category;
      this.date = date;
      this.type = type;
      this.validateInputValues();
   }

   validateInputValues() {
      if (description.value && amount.value !== '') {
         this.getInputValues();
         this.createId();
         this.capitalize();
         this.addDate();
      } else {
         return alert('Please fill in values');
      }
   }

   getInputValues() {
      this.description = description.value;
      this.amount = amount.value;
      this.category = document.querySelector(
         'input[name="category"]:checked'
      ).value;
   }

   createId() {
      this.id = Math.floor(Math.random() * 10000);
   }

   capitalize() {
      this.category = this.category[0].toUpperCase() + this.category.slice(1);
      return this.category;
   }

   addDate() {
      this.date = new Intl.DateTimeFormat('pt-PT').format(this.date);
      // this.date = new Date().toISOString();
   }

   static transactionType() {
      this.type = 'income';
      console.log(type);
   }

   static clearInputs() {
      this.description = document.querySelector('#description').value = '';
      this.amount = document.querySelector('#amount').value = '';
      // this.category = document.querySelector(
      //    'input[name="category"]:checked'
      // ).checked = false;
   }
}

class UI {
   constructor() {
      this.displayData();
      this.updateIn();
      this.updateOut();
      this.updateBudgets('Transportation');
      this.updateBudgets('Housing');
      this.updateBudgets('Groceries');
      this.updateBudgets('Entertainment');
   }

   displayData() {
      const transactions = [...incomes, ...expenses];
      console.log(transactions);
      transactions.forEach((item) => {
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

   // In sum of last transactions
   updateIn() {
      // const allIncome = document.querySelectorAll('.movements__value');
      const incomeCount = incomes.map((item) => +item.amount);
      const incomeSum = incomeCount.reduce(function (a, b) {
         return a + b;
      }, 0);

      moneyIn.innerHTML = incomeSum.toFixed(2);
   }

   // Out sum of last transactions
   updateOut() {
      // const allIncome = document.querySelectorAll('.movements__value');
      const expensesCount = expenses.map((item) => +item.amount);
      const expensesSum = expensesCount.reduce(function (a, b) {
         return a + b;
      }, 0);

      moneyOut.innerHTML = expensesSum.toFixed(2);
   }

   // Cards update
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
// app.displayData(transactions);
