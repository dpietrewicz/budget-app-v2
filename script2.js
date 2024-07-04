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

let incomes = [];

incomeBtn.addEventListener('click', function (e) {
   e.preventDefault();

   const newIncome = new Item();
   incomes = [...incomes, newIncome];
   UI.displayData();

   console.log(newIncome);
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
   }
}

class UI {
   static displayData() {
      incomes.forEach(function (item, i) {
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
      });

      //       let displayData = incomes.map((item) => {
      //          return `<div class="movements__row">
      // //                <span class="fa-solid fa-house card__icon"></span>
      // //                <span class="movements__row--description">
      // //                   <label class="movements__row__description--name"
      // //                      >${item.description}</label
      // //                   >
      // //                   <div class="movements__row__description--type">
      // //                      ${item.category}
      // //                   </div>
      // //                </span>
      // //                <div class="movements__date">${item.date}</div>
      // //                <div class="movements__value">${item.amount}€</div>
      // //             </div>`;
      //       });
      //       itemsContainer.innerHTML = displayData.join(' ');
   }
}
