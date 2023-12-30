const string = "Hello world java script once to be";

// Метод split дозволяє розділити строку на масив вказавши розділювач за яким елементи мають додаватись в масив
console.log(string.split(" "));

// Метод join збирає з масиву строку,в дужках маємо вказати через який символ додавати елементи
const hello = ["Hello", "World"];
console.log(hello.join(" "));

// Метод indexOf  повертає індекс елементу який ви шукаєте у круглих дужках або -1 якщо елементу який ви шукаєте не існує.
//Чутливий до регістру
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers.indexOf(1));

const names = ["Polly", "Ajax", "Mango"];
let winner;

// метод includes перевіряє чи є такий елемент в масиві  якщо є повертає true якщо нема  false
//Чутливий до регістру
console.log(names.includes("Polly"));
for (const name of names) {
  if (name.toLowerCase().includes("polly")) {
    winner = name;
    break; // зупиняє цикл
  }
  console.log(name);
}

console.log(winner);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

for (const number of arr2) {
  // метод push дозволяє нам додавати елементи в кінець масиву
  arr1.push(number);
  // метод pop видаляє елемент з кінця масиву
  arr2.pop(6);
}
// for (const number of arr1) {
//   // shift метод який видаляє елементи з початку масиву
//   //unshift метод який додає елементи в початок масиву
//   arr2.shift(1);
// }

console.log(arr2);

// Нам приходить з бази данних масив користувачив

const users = ["Artem", "Perto", "Anton"];

const newUser = "Ajax";

// Метод slice повертає нам новий масив
// Дозволяє зробити копію масиву щоб не пошкодити початковий масив данних
// Метод slice приймає два параметри Start(індекс початку) та END(індекс кінця(НЕ ВКЛЮЧНО))

// .slice() = slice(0, users.length)
const users1 = users.slice(0, users.length);

users1.push(newUser, newUser);
console.log(users1);
// Метод splice який повертає всі видалені елементи
// Перший параметр це значення звідки ми почінаємо вирізати елементи, Другий параметр це параметр який означає скільки елементів треба вирізати після вказаного в першому параметрі індексі
// Третій параметр дозволяє щось додати замість видалених елементів(ПАраметрів для додавання може бути безліч треба перелічуват`и через ком`у )

const deletedUser = users.indexOf("Artem");
users.splice(deletedUser, 1, "Anton", "Чудова людина");
console.log(users);

const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];

// Метод concat слугує для обʼєднання двох масивів (Масив який ви додаєте буде додаватись в кінець іншого)
const arr5 = arr3.concat(arr4);
console.log(arr5);
