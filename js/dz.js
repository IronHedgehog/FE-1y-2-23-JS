const num = 10;
let i = 0;
while (i < num) {
  i++; // Додавання на наступній ітерації на кожній ітерації додається одиничка
  //   console.log(i);
}
// i++ increment = додавання +1
//   ++i; // додавання на цій ітерації
// i += 1; // на кожній ітерації додається одиничка
//   i = i + 1; // на кожній ітерації додається одиничка

// 1 ччастина циклу for це лічильник(індекс, iterator)
// 2 частина, умова виходу(коли ми маємо вийти з циклу)
// 3 частина математична дія яка буде відбуватись з індексом(iterator)
for (let i = 0; i <= 20; i++) {
  // i % 2 !== 0 = перевірка на непарність
  if (i % 2 !== 0) {
    continue;
  }
  // якщо число прошло перевірко тобіш парне ми його виводимо
  //   console.log(i);
}

for (let i = 7; i <= 70; i += 7) {
  //   console.log(i);
}
// [] = масив
// "" = строка
// Індекси елементу рахуються з нуля(перший елемент має індекс 0)
const string = "asd";
const index = string.indexOf("a");
// console.log(index);
const array = ["A", "B", 3, 4, 5]; // масив з числами

let counter = 0;
while (counter < array.length) {
  //array звертання до змінної у якій зберігається масив
  // [counter] = звертання до елементу масиву за індексом
  //   console.log(array[counter]);
  counter++;
}

const numbers = [1, 2, 3, 4, 5, "b", 7, 8, "c", 10];

for (let index = 0; index < numbers.length; index++) {
  if (index === 7) {
    break;
  }
  //   console.log(numbers[index]);
}

const n = 15;
for (let index = 0; index < 30; index++) {
  if (index >= n) {
    break;
  }
  //   console.log(index);
}

for (let index = 1; index <= 20; index++) {
  if (index % 3 === 0) {
    continue;
  }
  //   console.log(index);
}

// цикл, в якому умова перевіряється після виконання тіла циклу.
const count = 1;
do {
  console.log(count);
} while (count === 2);

for (let i = 0; i <= 20; i++) {
  //   const element = array[index];
}
