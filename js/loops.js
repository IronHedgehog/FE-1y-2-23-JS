// while , do while, for,for of

let counter = 0;

while (counter < 10) {
  //   console.log(counter);
  counter++;
}

let clientList = 20;
const maxClients = 30;

while (clientList <= maxClients) {
  console.log(clientList);
  clientList += 1;
}
// ЦИКЛ з постумовою (Спочатку зроби, потім перевір)

let number;

do {
  //   number = prompt("Число від 1 до 10");
} while (number >= 1 && number <= 10);

console.log(number);

const highMark = 10;

// i = iterator
for (let i = 1; i <= highMark; i += 1) {
  console.log(i);
}

// i = вираз ініціалізації - лічильник
//  умова при якій ми маємо вийти з циклу
//  дія яка має відбуватись при правдивій умові

for (let i = 0; i < highMark; i += 1) {
  console.log(`${highMark} % ${i} = `, highMark % i);
}

const array = [1, 2, 3, 4, 5];

// for (const number of array) {
//   console.log(number * 2);
// }

const num = 15;

for (let i = 0; i < 10; i += 1) {
  if (num % i === 0) {
    console.log(i);
    //   оператор break виходить з циклу при першому задовільному результаті
    break;
  }
}

for (let i = 0; i < num; i += 1) {
  if (i % 2 === 0) {
    // console.log(i);

    //   оператор continue  закінчує цю ітерацію
    continue;
  }
  console.log(i);
}

// for (let index = 1; index <= 10; index++) {
//   console.log(index * 7);
// }
