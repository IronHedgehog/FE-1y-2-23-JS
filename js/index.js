const market = {
  tovari: [{ apple: "red" }, { chair: "black" }],
  car: "car",
  products: "products",
};

console.log(market.tovari);
// Значення за замовчуванням підтягуються тільки в тому випадку якщо значення = undefined
// Через двокрапку ви можете дати нову назву вашій змінній , якщо ви того бажаєте
// const {
//   tovari: superTovari,
//   car = null,
//   products = null,
//   water = true,
// } = market;

const { car, ...elements } = market;
console.log(car);
console.log(elements);

// console.log(superTovari, car, products, water);
console.log(market);
// for (const tovar of market.tovari) {
//   console.log(tovar);
//   const { apple, chair } = tovar;
//   console.log(apple, chair);
// }

// 1)Записуємо ключове слово для створення змінної
// 2) Зрозуміти,що саме ви хочети деструктуризувати (якщо ви хочете дістати обʼєкти з масиву вам треба деструктуризувати масив). []
// Якщо ви хочете дістати значення обʼєкту вам треба деструктуризувати обʼєкт {}

// 3) Вказати шлях з якого треба деструктруузавти ці властивості
const [appleObj, chairObj] = market.tovari; // деструктуризація масиву
console.log(appleObj, chairObj);
const { apple } = appleObj; // деструктуризація обʼєкту
const { chair } = chairObj; // деструктуризація обʼєкту
console.log(apple, chair);

const options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["cake", "donut"],
  extra: true,
};

const {
  // глибока деструктуризація (деструктуризація обʼєкта в обʼєкті)
  size: { width, height },
  // глибока деструктуризація (деструктуризація масива в обʼєкті)
  items: [cake, donut],
  extra,
} = options;
console.log(width, height, cake, donut, extra);

const rgb = [250, 150, 200];

// const [red, green, blue, alfa = 0.3] = rgb;
const [, , blue] = rgb;

console.log(blue);

const countTotalSalary = function (employee) {
  // твій код
};

const users = {
  mango: 100,
  poly: 150,
  alfred: 80,
};

const users2 = {
  kiwi: 200,
  lux: 50,
  chelsy: 150,
};

countTotalSalary(users); // 330

countTotalSalary(users2); // 400
