// Як створити обʼєкт?
// iніціалізований = створений
// обʼєкти наповнються парами ключ: значення
// Наприклад material:dub, width: 2m,height: 1m
// Кожна пара ключ значення розділяється комою
const table = {
  // ключ (завжди строка) - material , значення - "dub"
  material: "dub",
  width: "2m",
  height: "1m",
  color: "black",
  // this - наш обʼєкт (обʼєкт в якому ви використовуєте this)
  total() {
    console.log(this.color, this.height, this.material, this.width);
  },
  totalTable() {
    console.log(table.color, table.height, table.material, table.width);
  },
};

table.total();
table.totalTable();
// table.color - зверенення до властивості стола такої як колор
// console.log(table.color);
// В рядку нище у нас відбувається заміна властивості
table.color = "red";
// console.log(table.color);
// Менш зручний спосіб отримати властивість обʼєкту
// console.log(table["material"]);

table["material"] = "paper";
// console.log(table["material"]);

// console.log(table);
// якщо властивості до якої ви звертаєтесь не існує то вона буде створена
table.type = "Gamer";

// console.log(table.type);

// Видалення властивості з обʼєкту
delete table.type;

// console.log(table.type);

let title = "doTable";
let stars = 5;
//Такий синтаксис був обовʼязковим в ES5
const es5book = {
  title: title,
  stars: stars,
};

// ES6

const es6book = {
  title,
  stars,
};

console.log(es5book);
console.log(es6book);

const es5table = {
  top: function toTheTop() {
    console.log("Ваш стіл улітає в космос");
  },
  bottom: function toTheBottom() {
    console.log("Ваш стіл пробиває дно");
  },
};

es5table.top();
es5table.bottom();

const es6table = {
  top() {
    console.log("Ваш стіл улітає в космос");
  },
  bottom() {
    console.log("Ваш стіл пробиває дно");
  },
};

es6table.top();
es6table.bottom();
