//  == - не суворе порівняння(порівнює елементи за значенням а не за типом)
console.log("12" == 12); // true
// === - суворе порівняння (порівнює елементи за значенням та за типом данних)
console.log(12 === "12"); //false

// Number
// ParseInt()
// parseInt = якщо може повертає зі строки ціле число(працює на початку рядка до найближчого незрозумілого символу)

const string = "123.15asd";
//parseInt для цілих чисел
console.log(Number.parseInt(string));
// ParseFloat для дробових чисел
console.log(Number.parseFloat(string));

// ! =  НЕ

// Конкатинація(зшивання строк (+)) та інтерполяція(шаблонізація(утворення шаблонної строки ``))

const a = "Hello";
const b = "world";
const c = ",";

// Конкатинація, зшивання(поєднання) рядків
console.log(a + c + b);

// інтерполяція(``)
//якщо ви хочете додати змінну треба записати її в середину ${ваша змінна}
console.log(`${a},${b} asdasdasdasdn ${b} lkanlsknlkanscn `);

//Властивість = це шось що описує предмет(характеристика ознака) а шо таке метод = це якась дія(шось вирізати? шось обʼєднати, зібрати з масиву строку)

const str = "asdasd";
console.log(str.toUpperCase());

// || то хоча б один елемент має дорівнювати true щоб відпрацювало
console.log(false || "asd");
// && обидва елементи мають дорівнювати true щоб відпрацювало
console.log(false && "asd");

const age = 19;

// якщо умова true (age >= 18) то підставиться значення "adult"
// якщо умова false (age >= 18) то підставиться значення "child"
const type = age >= 18 ? "adult" : "child";

console.log(type);

const t = "David";

if (true) {
  const t = "Mary";
  console.log(t);
}
console.log(t);
