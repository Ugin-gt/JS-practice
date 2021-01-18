'use strict'

// Реализовать функцию конструктор MyArray.

function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}
MyArray.prototype = new MyArrayProto();

// Реализовать следующие методы функции конструктора:
// MyArray.isMyArray();  // подсказка: instanceof

function MyArrayProto() {

  MyArray.isMyArray = function (obj) {
    return obj instanceof MyArray;
  };

  // Реализовать прототип для создаваемых коллекций, со следующими методами:
  // MyArray.prototype.push();
  // Метод push() додає один або більше елементів 
  // у кінець масиву та повертає нову довжину масиву.

  this.push = function push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      ++this.length;
    }
    return this.length;
  };

  // MyArray.prototype.pop(); // tip: delete */
  // Метод pop() видаляє останній елемент масиву
  // та повертає цей елемент.

  this.pop = function pop() {
    if (this.length <= 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  };

  // MyArray.prototype.unshift();
  // Метод unshift() додає один або декілька елементів 
  // на початок масиву і повертає новий розмір масиву.

  this.unshift = function unshift(...args) {
    // args.length > 0 ? console.log(this.length += args.length) : typeof Error(`Недопустимый ввод`);

    for (let i = (this.length + args.length - 1); i >= args.length; i--) {
      this[i] = this[--this.length];
    }
    for (let i = 0; i < args.length; i++) {
      this[i] = args[i];
    }
  };


  // MyArray.prototype.shift();
  // Метод shift() видаляє перший елемент з масиву
  // і повертає цей елемент. Цей метод змінює довжину масиву.

  this.shift = function shift() {
    if (this.length > 0) {
      const firstItem = this[0];
      delete this[0];
      for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
      }
      delete this[--this.length];
      return firstItem;
    }
  };

  // MyArray.prototype.concat();
  // Метод concat() повертає новий масив, що складається
  // із масиву, в контексті якого метод був викликаний,
  // поєднаного із масивом (масивами) та/або іншими значеннями,
  // що були передані як аргументи.

  this.concat = function concat(myArrayInstance) {
    const result = new MyArray();

    for (let i = 0; i < this.length; i++) {
      result.push(this[i]);
    }

    for (let i = 0; i < myArrayInstance.length; i++) {
      result.push(myArrayInstance[i]);
    }
    return result;
  };

  // MyArray.prototype.reverse(); 
  // Метод reverse() перевертає масив на місці, змінюючи
  // послідовність елементів на протилежну. Тобто, перший елемент
  // стає останнім, а останній — першим.

  this.reverse = function reverse() {
    const copy = new MyArray();
    for (let i = 0; i < this.length; i++) {
      copy.push(this[i]);
    }
    for (let i = 0; i < this.length; i++) {
      this[i] = copy.pop();
    }
  };

  // MyArray.prototype.forEach(); 
  // Метод forEach() виконує надану функцію
  // один раз для кожного елемента масиву.

  this.forEach = function forEach(cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i, this);
    }
  };

  // MyArray.prototype.map();
  // Метод map() створює новий масив з результатами виклику
  // наданої функції на кожному елементі масиву, який викликав метод.

  this.map = function map(cb) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      result.push(cb(this[i], i, this));
    }
    return result;
  };

  // MyArray.prototype.some(), .every(), .filter();

  // Метод some() з'ясовує, чи містить масив хоч один елемент,
  // для якого зазначена функція callback повертає true
  // (або значення, що зводиться до true). Повертає значення типу Boolean.

  this.some = function some(checkFunction) {
    for (let i = 0; i < this.length; i++) {
      if (checkFunction(this[i], i, this)) {
        return true;
      }
    }
    return false;
  };

  // Метод every() перевіряє, чи всі елементи масиву відповідають
  // умові, що задана функцією, яка передається як аргумент.
  // Повертає булеве значення.

  this.every = function every(checkFunction) {
    for (let i = 0; i < this.length; i++) {
      if (!checkFunction(this[i], i, this)) {
        return false;
      }
    }
    return true;
  };

  // Метод filter() створює новий масив з усіма елементами,
  // що пройшли перевірку вказаною функцією.

  this.filter = function filter(checkFunction) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (checkFunction(this[i], i, this)) {
        result.push(this[i])
      }
    }
    return result;
  };

};

const userArray = new MyArray(1, 2, 3, 4, 5);

console.log(userArray);


const arr = [1123, 124, 12467, 3, 6, 8545, 8685, 34, 46, 34257, 4];
const sortArray = [1, 2, 3, 4, 5, 13, 15, 20, 25, 27];

const linearSearch = (arr, value) => {  // O(n) - linear
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  // TODO: Если элемент не найден: return -1
  return -1;
};

const multuplyTable = (count) => {  // O(n^2) - квадратичная
  const table = [];
  for (let i = 1; i < count; i++) {
    for (let j = 1; j < count; j++) {
      table.push(`${i} * ${j} = ${i * j}`);
    }
  }


  return table;
};


const binarySearch = (arr, value) => {  // O(logn) - логарифм

  let start = 0;
  let end = arr.length - 1;
  let middle = Math.round(arr.length / 2);

  while (start <= end) {
    middle = Math.floor((end + start) / 2);

    if (value === arr[middle]) {
      return middle;
    }
    if (value > arr[middle]) {
      start = middle + 1;

    } else {
      end = middle - 1

    }
  }
}





