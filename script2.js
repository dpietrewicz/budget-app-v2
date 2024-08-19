'use strict';

// 1. Implement SORTING

const incomeBtn = document.querySelector('#add__income');
const expenseBtn = document.querySelector('#add__expense');
const sortBtn = document.querySelector('#sort__btn');

const description = document.querySelector('#description');
const amount = document.querySelector('#amount');

const inputForm = document.querySelector('#input__form');
const type = document.querySelector('.select__type');
const moneyBalance = document.querySelector('#amount__balance');
const dateBalance = document.querySelector('#date__balance');
const moneyIn = document.querySelector('#amount__in');
const moneyOut = document.querySelector('#amount__out');
const itemsContainer = document.querySelector('#items__container');

const inputType = document.querySelector('.form__input--type');
const inn = document.querySelector('.inputs__container--type');

let data = [
   {
      id: 1900874625,
      description: 'selling',
      amount: '300',
      category: 'Groceries',
      date: '11/07/2024',
      type: 'income',
   },
   {
      id: 1901087367,
      description: 'salary',
      amount: '1000',
      category: 'Housing',
      date: '21/07/2024',
      type: 'income',
   },
   {
      id: 1901121733,
      description: 'rent',
      amount: '800',
      category: 'Housing',
      date: '21/07/2024',
      type: 'expense',
   },
];

let expenses222 = [
   {
      id: 1901121733,
      description: 'rent',
      amount: '800',
      category: 'Housing',
      date: '21/07/2024',
      type: 'expense',
   },
];

incomeBtn.addEventListener('click', function (e) {
   e.preventDefault();

   const radioButton = document.querySelector('input[name="category"]:checked');

   if (description.value && amount.value !== '' && radioButton !== null) {
      const newIncome = new Item();
      newIncome.type = 'income';

      data = [...data, newIncome];

      itemsContainer.innerHTML = '';

      const ui = new UI();

      Item.clearInputs();
   } else {
      return alert('Please fill in values and select category');
   }
});

expenseBtn.addEventListener('click', function (e) {
   e.preventDefault();

   const radioButton = document.querySelector('input[name="category"]:checked');

   if (description.value && amount.value !== '' && radioButton !== null) {
      const newExpense = new Item();
      newExpense.type = 'expense';

      data = [...data, newExpense];

      itemsContainer.innerHTML = '';

      const ui = new UI();

      Item.clearInputs();
   } else {
      return alert('Please fill in values and select category');
   }
});

sortBtn.addEventListener('click', function (e) {
   e.preventDefault(e);

   UI.sortData();
});

// ITEM CONTROLLER
class Item {
   constructor(id, description, amount, category, date) {
      this.id = id;
      this.description = description;
      this.amount = amount;
      this.category = category;
      this.date = date;
      this.addItem();
   }

   addItem() {
      this.getInputValues();
      this.createId();
      this.capitalize();
      this.addDate();
   }

   getInputValues() {
      this.description = description.value;
      this.amount = amount.value;
      this.category = document.querySelector(
         'input[name="category"]:checked'
      ).value;
   }

   createId() {
      // this.id = Math.floor(Math.random() * 10000);
      this.id = (Date.now() + '').slice(-10);
   }

   capitalize() {
      this.category = this.category[0].toUpperCase() + this.category.slice(1);
      return this.category;
   }

   addDate() {
      this.date = new Intl.DateTimeFormat('pt-PT').format(this.date);
      // this.date = new Date().toISOString();
   }

   static clearInputs() {
      this.description = document.querySelector('#description').value = '';
      this.amount = document.querySelector('#amount').value = '';
      // this.category = document.querySelector(
      //    'input[name="category"]:checked'
      // ).checked = false;
   }
}

let sort = false;

class UI {
   constructor() {
      this.displayData();
      this.updateIn();
      this.updateOut();
      this.updateBudgets('Transportation');
      this.updateBudgets('Housing');
      this.updateBudgets('Groceries');
      this.updateBudgets('Entertainment');
      this.updateBalance();
      this.deleteItem();
      // this.sortData();
   }

   displayData() {
      itemsContainer.innerHTML = '';

      // const transactions = [...incomes, ...expenses];
      // const tsort = transactions.sort((a, b) => {
      //    return a.type + b.type;
      // });

      // const movs = sort ? tsort : transactions;

      data.forEach((item) => {
         const type = item.type === 'income' ? 'up' : 'down';
         const formattedMov = this.formatCur(item.amount);
         const html = `<div class="movements__row item">
                     <span class="fa-solid fa-arrow-${type} card__icon"></span>
                     <span class="movements__row--description">
                        <label class="movements__row__description--name"
                           >${item.description}</label
                        >
                        <div class="movements__row__description--type">
                           ${item.category}
                        </div>
                     </span>
                     <div class="movements__date">${item.date}</div>
                     <div class="movements__value">${formattedMov}</div>
                     <i class="fa-regular fa-trash-can trash" id="delete__btn"></i>
                      </div>`;

         itemsContainer.insertAdjacentHTML('afterbegin', html);
      });
   }

   getIdNumber(item) {
      const amountId = item.parentElement.id;
      console.log(amountId);
   }

   deleteItem() {
      const deleteBtn = document.querySelector('#delete__btn');
      deleteBtn.addEventListener('click', function (e) {
         console.log(e.target);
         console.log('sss');
         // this.getIdNumber(e.target);
         console.log(e.parentElement);
      });
   }

   static sortData() {
      this.displayData(true);
   }

   formatCur(value) {
      return new Intl.NumberFormat('en-us', {
         style: 'currency',
         currency: 'USD',
      }).format(value);
   }

   filterIncomes() {
      const incomeFilter = data.filter((item) => item.type === 'income');
      return incomeFilter;
      console.log(incomeFilter);
   }

   filterOutcomes() {
      const expenseFilter = data.filter((item) => item.type === 'expense');
      return expenseFilter;
   }

   // In sum of last transactions
   updateIn() {
      const incomes = this.filterIncomes();

      const incomeCount = incomes.map((item) => +item.amount);

      const incomeSum = incomeCount.reduce(function (a, b) {
         return a + b;
      }, 0);

      moneyIn.innerHTML = this.formatCur(incomeSum);
   }

   // Out sum of last transactions
   updateOut() {
      const expenses = this.filterOutcomes();

      const expensesCount = expenses.map((item) => +item.amount);

      const expensesSum = expensesCount.reduce(function (a, b) {
         return a + b;
      }, 0);

      moneyOut.innerHTML = this.formatCur(expensesSum);
   }

   // Cards update
   updateBudgets(cat) {
      const incomes = this.filterIncomes();
      const filterIn = incomes.filter((item) => item.category === `${cat}`);

      const expenses = this.filterOutcomes();
      const filterOut = expenses.filter((item) => item.category === `${cat}`);

      const countIn = filterIn.map((item) => +item.amount);
      const countOut = filterOut.map((item) => +item.amount);

      const sumIn = countIn.reduce((a, b) => a + b, 0);
      const sumOut = countOut.reduce((a, b) => a + b, 0);

      const lowerCase = cat.toLowerCase();

      const total = sumIn - sumOut;

      const displayCat = (document.querySelector(`#${lowerCase}`).innerHTML =
         this.formatCur(total));
   }

   updateBalance() {
      const incomes = this.filterIncomes();
      const sumIn = incomes
         .map((item) => +item.amount)
         .reduce((a, b) => a + b, 0);

      const expenses = this.filterOutcomes();
      const sumOut = expenses
         .map((item) => +item.amount)
         .reduce((a, b) => a + b, 0);

      const balance = sumIn - sumOut;

      moneyBalance.innerHTML = this.formatCur(balance);
      dateBalance.innerHTML = new Intl.DateTimeFormat('pt-PT').format();
   }
}

const app = new UI();
// app.displayData(transactions);
