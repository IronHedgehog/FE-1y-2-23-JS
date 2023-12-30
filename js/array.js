// 1) Що таке масив?
// 2) Як з ним працювати?
// 3) Навчимось перебирати масив

const array = [];

const itemsOnCart = ["orange", "banana", "apple"];
// Масив = індексована колекція
// індекси розразовуються з 0 тому перший елемент в масиві має індекс 0
// orange має індекс - 0
// banana має індекс - 1
// apple має індекс - 2

itemsOnCart[3] = "pear";

itemsOnCart[100] = "boasds";

console.log(itemsOnCart[0]);
console.log(itemsOnCart[1]);
console.log(itemsOnCart[2]);
console.log(itemsOnCart[3]);
console.log(itemsOnCart[100]);
// властивість length повертає довжину масиву(кількість елементів масиву)
itemsOnCart.length = 50;
console.log(itemsOnCart);

const numbers = [
  1, 2, 3, 4, 5, 5, 6, 7, 6, 4, 4, 3, 3, 2, 1, 1, 23, 4, 5, 5, 3, 3, 22, 1, 23,
  3, 123, 123, 123, 12, 312, 5, 34, 5, 2341, 23,
];

const arr = [];
// лічильник(i)  стартує з 0, довжина масиву стартує з 1

for (let i = 1; i <= 10; i += 1) {
  // .push() додає елементи у кінець масиву
  arr.push(i);
}
// console.log(arr);

let sum = 0;

// for (let number of numbers) {
//   //   sum = sum + number;
//   if (number % 3 === 0) {
//     sum += number;
//   }
//   console.log("Число не парне");
//   break;
// }
// console.log(sum);

const clients = [
  "Artem",
  "Mykola",
  "Ivan",
  "Ivan",
  "Ivan",
  "Ivan",
  "Ivan",
  "Ivan",
];

const nameToFind = "Ivan";
for (const client of clients) {
  if (client === nameToFind) {
    console.log("ми знайшли тебе");
    break;
  }
  console.log(" це новий користувач");
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Переприсвоєння першого елементу підмасиву
// console.log((matrix[0][0] = 10));

let result = 0;

for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i]);
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
    result += matrix[i][j];
  }
}
console.log(result);

const arrrrr = [null, undefined, "10", null, 10, 15, 20, {}, [1, 2, 3]];
const resultt = 0;

for (const number of arrrrr) {
  if (number === null || number === undefined) {
    continue;
  }
  result += Number.parseInt(number);
  console.log(result);
}

console.log(result);
