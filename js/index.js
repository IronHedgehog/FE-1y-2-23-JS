// Приклад імперативного коду
// Описуємо процес обчислення у вигляді повної інструкціїї(послідовності) дії
const nums = [1, 2, 3, 4, 5];

const filteredArray = [];

for (let index = 0; index < nums.length; index++) {
  if (index % 2 === 0) {
    if (index === 0) continue;
    filteredArray.push(index);
  }
}

// console.log(filteredArray);

// Приклад декларативного коду
// Ми з вами приховуємо повну реалізацію коду.
//ОПисує те що ми хочемо зробити а не як це зробити

// метод масиву filter = приховує у собі логіку перебору масиву.Повертає усі значення які задовольняють умові
const filteredNums = nums.filter((value) => {
  // console.log(value);
  if (value % 2 === 0) {
    return value;
  }
});

// console.log(filteredNums);

// dirty function - функція яка мотує аргументи

function dirtyMultiply(array, value) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= value;
  }
}
// dirtyMultiply(nums, 2);

// console.log(nums);

// pureFunctions, чисті функції - не мотує початкові данні,Результат залежить від переданих значень але їх не змінено.
// Повертаються нові обʼєкти
function pureMultiply(array, value) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * value);
  }
  return result;
}

pureMultiply(nums, 2);

// console.log(nums);

// Перебираючі методи

// Перебираючі методи отримують масив, створюють порожній і заопвнюють його за умовою яку ви вкажете у колбеці

// Синтаксис більшості перебираючих методів
// array.filter(callback[currentValue,index,array])

// foreach() - метод перебору який нічого не повертає

const numbers = [1, 2, 3, 4, 5];
// Звичайний for (імперативний стиль)
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// foreach() - метод який є аналогом for (декларативний стиль)
// numbers.forEach((number) => console.log(number));

// numbers.forEach((number, index, arrays) =>
//   console.log(`Num: ${number},index:${index} масив: ${arrays}`)
// );

// map - повертає нам новий масив тієї ж довжини

const nums1 = [1, 2, 3, 4, 5];

const multiplyNumber = nums1.map((num) => num * 2);

console.log(multiplyNumber);
console.log(nums1);

const transactions = [
  {
    id: 1,
    type: "deposit",
    amount: 200,
  },
  {
    id: 2,
    type: "withdraw",
    amount: 100,
  },
  {
    id: 3,
    type: "deposit",
    amount: 200,
  },
];

const totalAmount = transactions.map((transaction) => {
  return transaction.type;
});

console.log(totalAmount);

const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// якщо умова яку ви задали дорівнює true то елемент додається в новий масив
const filteredArr = nums2.filter((num) => num > 5);
console.log(filteredArr);

const transactionType = transactions.filter(
  (transaction) => transaction.type === "withdraw"
);

console.log(transactionType);

// .find - створений для пошуку, знайти у масиві

console.log(nums2.find((num) => num < 10));

const getTransactionById = (arr, id) =>
  arr.find((transaction) => transaction.id === id);

console.log(getTransactionById(transactions, 3));

// every() some() -повертають true або false

// every() - перевіряє чи всі елементи масиву пройшли перевірку якщо так повертає true якщо ні false

// some() - перевіряє,що хоча б один елемент пройшов перевірку в такому випадку повертає true в інакших false

const nums3 = [1, 2, 23, 34, 45, 6];

console.log(nums3.every((number) => number >= 23));
console.log(nums3.some((number) => number >= 23));

const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

// sort - мотує початковий масив
// reduce
