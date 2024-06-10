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
