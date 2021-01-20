
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

compare('test','sett') // true
compare('love','evol') // true
compare('test','lore') // false
compare('Mom','Omo') // false

/* 
  Напишите функцию, которая проверяет,
 может ли строка быть воссоздана с
 использованием символов другой строки.
 Первый параметр функции - создаваемая строка.
 Второй параметр - используемая строка.
 Функция возвращает Boolean.
*/