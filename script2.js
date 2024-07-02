'use strict';

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

// ITEM CONTROLLER
class Item {
   items = [];

   constructor(description, amount, category) {
      this.description = description;
      this.amount = amount;
      this.category = category;
   }

   //data structure

   static addMoney(description, amount) {
      //create new item
      let newMoney = new Item(description, amount);
      console.log(newMoney);
      // push it into the array
      // this.items.push(newMoney);
   }
}

// UI CONTROLLER
class App {
   constructor() {
      incomeBtn.addEventListener('click', this.addIncome.bind(this));
   }

   getDescription() {
      return {
         descriptionInput: document.querySelector('#description').value,
         amountInput: document.querySelector('#amount').value,
      };
   }

   getAmount() {
      return {
         amountInput: document.querySelector('#amount').value,
      };
   }

   addIncomeItem(item) {
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
               <div class="movements__value">${item.amount}€</div>
            </div>`;

      itemsContainer.insertAdjacentHTML('afterbegin', html);
   }

   addIncome(e) {
      e.preventDefault();
      const description = this.getDescription();
      const amount = this.getAmount();
      console.log(description);

      if (description.descriptionInput !== '' && amount.amountInput !== '') {
         const newMoney = Item.addMoney(
            description.descriptionInput,
            amount.amountInput
         );
         console.log(newMoney); // undefined -> fix it
         // this.addIncomeItem(newMoney);
      } else {
         console.log('failed');
      }
   }
}

const app = new App();
