'use strict'

const vocabulary = new Map(); // Ассоциативный массив
vocabulary.set('cat', 'кот');
vocabulary.set('dog', 'собака');
vocabulary.set('search', 'поиск');
vocabulary.set('monkey', 'обезьяна');
vocabulary.set('good', 'хорошо');
vocabulary.set('bad', 'плохо');
vocabulary.set('apple', 'яблоко');
vocabulary.set('structure', 'структура');
vocabulary.set('algorithm', 'алгоритм');
vocabulary.set('tree', 'дерево');
vocabulary.set('graph', 'граф');
vocabulary.set('object', 'объект');
vocabulary.set('table', 'стол');

//=============================
const keysArray = [];
for (const key of vocabulary.keys()) {
  keysArray.push(key);
}
console.log(keysArray);
//======
const valuesArray = [];
for (const value of vocabulary.values()) {
  valuesArray.push(value);
}
console.log(valuesArray);
//=============================
const rusWords = [...vocabulary.values()];
const engWords = [...vocabulary.keys()];
//=============================
'const letterCompare = new Map();
const alphafabet = ['a', 'b']

compare('test', 'sett') // true
compare('love', 'evol') // true
compare('test', 'lore') // false
compare('Mom', 'Omo') // fa 
/* 
  Напишите функцию, которая проверяет,
 может ли строка быть воссоздана с
 использованием символов другой строки.
 Первый параметр функции - создаваемая строка.
 Второй параметр - используемая строка.
 Функция возвращает Boolean.
*/
/* 
1. Создаёте словарь: 
    буква -ключ,
    кол-во этих букв в строке - значение.
2. Таких словарей 2.
3. Сравнить размер словарей.
4. Сравнить содержание этих словарей.
        get
*/

const createVocabulary = (str) => {
  const vocabulary = new Map();
  debugger
  for (const letter of str) {
    if (vocabulary.has(letter)) {
      const value = vocabulary.get(letter);
      vocabulary.set(letter, value + 1);
      continue; // переходим на след. итерацию
    }
    vocabulary.set(letter, 1);
  }

  return vocabulary;
};

const compareStrings = (str1, str2) => {
  const mapToStr1 = createVocabulary(str1);
  const mapToStr2 = createVocabulary(str2);
  debugger;
  if (mapToStr1.size !== mapToStr2.size) {
    return false;
  }

  for (const letter of mapToStr1.keys()) {
    if (mapToStr1.get(letter) !== mapToStr2.get(letter)) {
      return false;
    }
  }
  return true;
};

// compare('test', 'sett'); // true
/* compare('love', 'evol'); // true
compare('test', 'lore'); // false
compare('Mom', 'Omo'); // false */

const userInput =
  'cAt mOnkey dOg example trEe table algorithm graph object apple good';

/**
 *
 * @param {string} str
 * @param {string|RegExp} separator
 * @return {string}
 */
const translate = (str, separator = ' ') => {
  return str
    .toLowerCase()
    .split(separator)
    .map((word) => (vocabulary.has(word) ? vocabulary.get(word) : word))
    .join(separator);
};