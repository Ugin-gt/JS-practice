'use strict'

const set = new Set([1, 1, 2, 3, 4, 5]);

/* for (const item of set.values()) {	/* for (const item of set.values()) {
  console.log(item);	  console.log(item);
}	}
*/

const arr = [...set];
const newSet = new Set([...arr]);


const num1 = [1, 2, 12, 4, 235, 31, 3, 325, 234, 12, 13544, 43, 256];
const num2 = [1, 2, 12, 4, 235, 31, 3, 325, 564, 156, 456, 15496, 56];

const Unique = new Set([...nums1, ...num2]);

const unique = [...new Set([...nums1, ...nums2])]; // уникальные значения из двух массивов

// Деструктуризация - особый синтаксис создания переменных
// Деструктуризация объектов:

const auto = {
  color: 'Green',
  model: 'toyota',
  year: 2017,
  countDoor: 5,
  engine: {
    volume: 2.4,
    type: 'ECF',
  }
};

function countWeight(auto) {

  const { color, model, year } = auto;
  console.log(color, model, year);
};

const {
  engine: {
    volume: { value },
  },
} = auto;

console.log(value);

const { model, year, ...restOfAuto } = auto;

/// Деструктуризация массива:

const nums = [10, 20, 30, 4, 5];
const [firstNumber, , thirdNumber, , fifthNumber] = nums;
const [, sec, ...restOfNums] = nums;

// Деструктуризация входных параметров

function getAutoModel({ model, ...restOfCar }) {
  console.log(restOfCar);
  return model;
}

function getFullName(user) {
  return `${user.firstName} ${user.lastName}`;
};

function getFullName2({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
};
