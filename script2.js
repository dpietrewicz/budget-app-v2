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
   constructor(description, amount, category) {
      this.description = description;
      this.amount = amount;
      this.category = category;
   }

   //data structure
   items = [];

   addMoney(description, amount) {
      //create new item
      newMoney = new Item(description, amount);
      // push it into the array
      items.push(newMoney);
   }
}

// UI CONTROLLER
class UI {
   constructor() {
      incomeBtn.addEventListener('click', this.getDescription());
   }

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
               <div class="movements__date">${mov.date}</div>
               <div class="movements__value">${mov.amount}€</div>
            </div>`;

      itemsContainer.insertAdjacentHTML('afterbegin', html);
   }

   getInputs(e) {
      const description = document.querySelector('#description').value;
      const amount = document.querySelector('#amount').value;

      console.log(description, amount);
      e.preventDefault();
   }
}

const mov1 = new UI();
