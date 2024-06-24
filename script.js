'use strict';

const account = {
   incomes: {
      name: ['salary', 'interest', 'selling'],
      amount: [1000, 5000, 7000],
      category: ['Groceries', 'Entertainment', 'Housing'],
      date: [
         '2019-11-18T21:31:17.178Z',
         '2019-11-23T07:42:02.383Z',
         '2020-11-28T09:15:04.904Z',
      ],
      currency: 'EUR',
      locale: 'pt-PT',
   },

   outcomes: {
      name: ['book', 'coke', 'dinner'],
      amount: [-10, -6, -50],
      category: ['Entertainment', 'Housing', 'Entertainment'],
      date: [
         '2019-12-18T21:31:17.178Z',
         '2019-12-23T07:42:02.383Z',
         '2020-12-28T09:15:04.904Z',
      ],
      currency: 'EUR',
      locale: 'pt-PT',
   },
};

const account1 = {
   movements: [1000, 5000, 7000],
   movementsDates: [
      '2019-11-18T21:31:17.178Z',
      '2019-11-23T07:42:02.383Z',
      '2020-11-28T09:15:04.904Z',
   ],
};

const account123 = {
   incomes: [],
   outcomes: [],
};

/// Elements
/*
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

const addMovement = function () {};

const addNewMovement = function (acc) {
   const description = inputDescription.value;
   const amount = +inputAmount.value;

   // Add category
   const getCategory = document.querySelector('input[name="category"]:checked');
   const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
   const category = capitalize(getCategory.value);

   acc.name.push(description);
   acc.amount.push(amount);
   acc.date.push(new Date().toISOString());
   acc.category.push(category);
};

const displayMovements = function (acc) {
   const movs = acc.incomes;
   // console.log(movs);
   // console.log(acc);

   movs.forEach(function (acc, i, inout) {
      const date = new Date(acc.date[i]);
      const displayDate = formatMovementDate(date, acc.locale);
      const name = acc.name[i];
      const amount = acc.amount[i];
      const category = acc.category[i];

      const html = `<div class="movements__row">
                  <span class="fa-solid fa-house card__icon"></span>
                  <span class="movements__row--description">
                     <label class="movements__row__description--name"
                        >${name}</label
                     >
                     <div class="movements__row__description--type">
                        ${category}
                     </div>
                  </span>
                  <div class="movements__date">${displayDate}</div>
                  <div class="movements__value">${amount}€</div>
               </div>`;

      containerMovements.insertAdjacentHTML('afterbegin', html);
   });
};

// displayMovements();

// Event Handlers
btnIncome.addEventListener('click', function (e) {
   e.preventDefault();
   addNewMovement(account);
   displayMovements(account);
});

// How to create universal displayMovements function to keep current account - object structure?

console.log(Object.keys(account));
console.log(Object.values(account));
console.log(Object.entries(account));
*/

/*

// ITEM CONTROLLER
const itemCtrl = function () {
   //item constructor
   const Item = function (id, description, amount) {
      this.id = id;
      this.description = description;
      this.amount = amount;
   };

   //data structure
   const data = {
      incomes: [],
      outcomes: [],
   };

   //public method
   return {
      logData: function () {
         return data;
      },

      addMoney: function (description, amount) {
         //create random id
         let ID = itemCtrl.createID();
         //create new item
         newMoney = new Item(ID, description, amount);
         // push it into the array
         data.incomes.push(newMoney);

         return newMoney;
      },

      createID: function () {
         //create random id number between 0 and 10000
         const idNum = Math.floor(Math.random() * 1000);
         return idNum;
      },
   };
};

// UI CONTROLLER
const UICtrl = (function () {
   const UISelectors = {
      incomeBtn: '#add__income',
      expenseBtn: '#add__expense',
      description: '#description',
      amount: '#amount',
      moneyAvailable: '#amount__available',
      moneyIn: '#amount__in',
      moneyOut: '#amount__out',
      itemsContainer: '#items__container',
   };

   //public methods
   return {
      //return ui selectors
      getSelectors: function () {
         return UISelectors;
      },
      getDescriptionInput: function () {
         return {
            descriptionInput: document.querySelector(UISelectors.description)
               .value,
         };
      },
      getValueInput: function () {
         return {
            amountInput: document.querySelector(UISelectors.amount).value,
         };
      },
      addIncomeItem: function (item) {
         //create new div
         const div = document.createElement('div');
         //add class
         div.classList = 'item income';
         //add id to the item
         div.id = `item-${item.id}`;
         //add html
         div.innerHTML = `
         
                     <label class="movements__row__description--name"
                        >${item.description}</label>
               `;

         //insert income into the list
         document
            .querySelector(UISelectors.itemsContainer)
            .insertAdjacentElement('afterbegin', div);
      },
   };
})();

//APP CONTROLLER

const App = (function () {
   const loadEventListeners = function () {
      //get ui selectors
      const UISelectors = UICtrl.getSelectors();
      //add new income
      document
         .querySelector(UISelectors.incomeBtn)
         .addEventListener('click', addIncome);
   };

   //add new income
   const addIncome = function () {
      //get description and amount values
      const description = UICtrl.getDescriptionInput();
      console.log(description);
      const amount = UICtrl.getValueInput();
      // if inputs are not empty
      if (description.descriptionInput !== '' && amount.amountInput !== '') {
         //add new item
         const newMoney = itemCtrl.addMoney(
            description.descriptionInput,
            amount.amountInput
         );
         UICtrl.addIncomeItem(newMoney);
      }
   };

   //init function
   return {
      init: function () {
         loadEventListeners();
      },
   };
})(itemCtrl, UICtrl);

App.init();


<div class="movements__row">
                  <span class="fa-solid fa-house card__icon"></span>
                  <span class="movements__row--description">
                     <label class="movements__row__description--name"
                        >${item.description}</label
                     >
                     <div class="movements__row__description--type">
                        Entertainement
                     </div>
                  </span>
                  <div class="movements__value">${item.amount}€</div>
               </div>


*/

const incomeBtn = document.querySelector('#add__income');
const expenseBtn = document.querySelector('#add__expense');

const inputForm = document.querySelector('#input__form');
const type = document.querySelector('.select__type');
const moneyAvailable = document.querySelector('#amount__available');
const moneyIn = document.querySelector('#amount__in');
const moneyOut = document.querySelector('#amount__out');
const itemsContainer = document.querySelector('#items__container');

const inputType = document.querySelector('.form__input--type');
const inn = document.querySelector('.inputs__container--type');
const radioButtons = document.querySelectorAll('input[name="category"]');
console.log(description.value);

description;

class Item {
   data = [];

   constructor(description, amount, category, date) {
      this.description = description;
      this.amount = amount;
      this.category = category;
      this.capitalize();
   }

   capitalize() {
      this.category = this.category[0].toUpperCase() + this.category.slice(1);
      return this.category;
   }

   // capitalize = (str) => str[0].toUpperCase() + str.slice;
   // getCategoryInput(e) {
   //    e.preventDefault();
   //    const cat = document.querySelector('input[name="category"]:checked');
   //    // const type111 = type.value;
   //    // const tt = inputType.value;
   //    let selectedCat;
   //    for (const radioButton of radioButtons) {
   //       if (radioButton.checked) {
   //          selectedCat = radioButton.value;
   //          break;
   //       }
   //    }
   //    console.log(selectedCat);
   // }
}

class UI {
   displayMovement(mov) {
      const html = `<div class="movements__row">
                  <span class="fa-solid fa-house card__icon"></span>
                  <span class="movements__row--description">
                     <label class="movements__row__description--name"
                        >${mov.description}</label
                     >
                     <div class="movements__row__description--type">
                        ${mov.category}
                     </div>
                  </span>
                  <div class="movements__value">${mov.amount}€</div>
               </div>`;

      itemsContainer.insertAdjacentHTML('afterbegin', html);
   }

   // formatMovementDate = function (date, locale) {
   //    const calcDaysPassed = (date1, date2) =>
   //       Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

   //    const daysPassed = calcDaysPassed(new Date(), date);

   //    if (daysPassed === 0) return 'Today';
   //    if (daysPassed === 1) return 'Yesterday';
   //    if (daysPassed <= 7) return `${daysPassed} days ago`;
   //    else {
   //       return new Intl.DateTimeFormat(locale).format(date);
   //    }
   // };
}

incomeBtn.addEventListener('click', function (e) {
   e.preventDefault();
   //Get form values
   const description = document.querySelector('#description').value;
   const amount = document.querySelector('#amount').value;
   const category = document.querySelector(
      'input[name="category"]:checked'
   ).value;

   //Instantiate movement
   const movement = new Item(description, amount, category);
   console.log(movement);

   //Instantiate UI
   const ui = new UI();

   //Validate
   if (description === '' || amount === '') {
      // Error alert

      alert('Please fill in all fields');
   } else {
      // Add Movement to list
      ui.displayMovement(movement);
   }
});

// class App {
//    data = [];

//    constructor() {
//       //Get current data
//       incomeBtn.addEventListener('click', this.getCategoryInput);
//    }

//    getDescriptionInput(e) {
//       e.preventDefault();
//       console.log(description.value);
//    }

//    getAmountInput() {
//       console.log(amount.value);
//    }

//    getCategoryInput(e) {
//       e.preventDefault();
//       // const cat = document.querySelector('input[name="category"]:checked');
//       // const type111 = type.value;
//       // const tt = inputType.value;
//       let selectedCat;
//       for (const radioButton of radioButtons) {
//          if (radioButton.checked) {
//             selectedCat = radioButton.value;
//             break;
//          }
//       }
//       console.log(selectedCat);
//       // const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
//       // this.category = capitalize(getCategory.value);
//    }

//    addIncome() {
//       const description = this.getDescriptionInput;
//       const amount = this.getAmountInput;

//       const newMoney = Item.addMoney();
//    }
// }

// const app = new App();
