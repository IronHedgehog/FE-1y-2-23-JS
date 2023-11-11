const a = 10 % 7; // % = остачу від ділення;
console.log(a);
const b = 10 * 7; // * = множення
console.log(b);
const c = 10 / 7; // / - ділення
console.log(c);
const d = 10 + 7;
console.log(d);
const e = 10 - 7;
console.log(e);

let f = 10;
f /= 5; // *=, /=, +=, -= , %=
console.log(f);
f = f / 5;

// Оператори порівняння

const r = 11;
const o = "11";

console.log(10 > 11);
console.log(11 < 11);
console.log(r <= o);
console.log(11 >= 11);

console.log(r !== o); // ВИКОРИСТОВУВАТИ ЗАВЖДИ
console.log(r != o); // Використовувати в окремих дуже рыдких випадках

console.log(r == o); // Використовувати в окремих дуже рыдких випадках
console.log(r === o); // ВИКОРИСТОВУВАТИ ЗАВЖДИ

// ПРИВЕДЕННЯ ДО ЧИСЛА

const number = 5;
console.log(Number(number));
console.log(typeof Number(number));

const string = "5234.2323string";
console.log(Number(string));
console.log(typeof Number(string));

//parse int (Використовується для цілих чисел)

console.log(Number.parseInt(string));
console.log(Number.parseInt("12.213qw12"));
console.log(Number.parseInt("qweqweqw12"));

// parse float(Використовується для дробових чисел)
console.log(Number.parseFloat(string));
console.log(Number.parseFloat("12.123qw12"));
console.log(Number.parseFloat("asdjaldja"));

// isNAN  перевірка на число

const num = Number("jkadnflaf");
console.log(Number.isNaN(num)); // isNAN = Чи це не число?

const num1 = Number("20");
console.log(Number.isNaN(num1));
console.log(num1);

// Додавання дробових чисел

console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2);

console.log((0.1 * 10 + 0.2 * 10) / 10);

// MATH
// округлює до найближчого числа
console.log(Math.round(1.7));
// Повертає найбільше число з вибірки
console.log(Math.max(100, 50, 150, 200));
// Повертає найменше число з вибірки
console.log(Math.min(100, 50, 150, 200));
// Підносить число до коми до ступеня який вказується після коми
console.log(Math.pow(2, 4));
// MAth random повертає рандомне число (такий запис повертає випадкове число від 1 до 10)
console.log(Math.round(Math.random() * (10 - 1) + 1));

console.log(Math.ceil(7.1));
console.log(Math.floor(7.9));
// false = boolean 0 = number
console.log(false == 0);
// 010101010010101;
const u = !true;

console.log(u);
// Math.sqrt = розраховує квадратний корінь
console.log(Math.sqrt(100));
// console.log(typeof Number(Math.sqrt(100).toString()));
console.log("object".length);
