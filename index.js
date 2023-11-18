const name = "Artem".length;
console.log(name);

console.log();
//  Конкатинація строк (сшивання строк (+))
const greetings = "Привіт" + name;
console.log(greetings);
const number = 5;
const string = "5";
console.log(number + string);
console.log(number);

// .length повертає нам довжину елементу
const lengthMessage = "alsdjlashfhaa/f".length;
console.log(lengthMessage);

const sale = "Sale";
let povidomlennia = "Super sAlE - 70%";

// povidomlennia.toLowerCase() опустили перевіряємо повідомлення до нижнього регістру
// .includes() який дозволяє перевірити чи є такий символ або слово в строці або реченні,змінній тощо....
// sale.toLowerCase()  опустили до нижнього регістру філтр за яким видаляємо спам
if (povidomlennia.toLowerCase().includes(sale.toLowerCase())) {
  povidomlennia = "";
}
povidomlennia;

const message = "AKLSDLKASFKLBGKLSDBKLJSBNKLWEBFNLKWE";
// Case (lower , Upper)  Зменшують усі літери до нижнього регістру або до верхнього регістру
const smallMessage = message.toLowerCase();
console.log(smallMessage);
const bigMessage = message.toUpperCase();
console.log(bigMessage);

// Строки - це індексований набір буковок(індекс завжди на одиницю менший від загальної кількості буковок тому що рахується з 0)

// indexOf - метод який дозволяє визначити індекс символу, якщо елементу не існує завжди повертає -1
const something = "Привіт, Артем";
const indexL = something.indexOf("П");
const indexD = something.indexOf("D");
const lengthL = something.length;
console.log(indexL);
console.log(indexD);
console.log(lengthL);

const text = "Привіт, ти тиакийто-такийто-то ...";

// Метод includes дозволяє перевірити чи є данний символ в реченні(Повертає true або false)
console.log(text.includes(" "));

// startsWith та endsWith повертає  true або false startsWith перевіряє існування тексту на початку рядка endsWith перевіряє у кінці рядка
console.log(text.startsWith("Податок сплачено"));
console.log(text.endsWith("."));

const userText = "      Все добре     ";
console.log(userText.trim());
// trim( ) обрізає пробіли спочатку речення та після кінця речення
console.log(userText.trim().indexOf(""));

console.log(text.length);

// padStart,padEnd додає символи які ви вказуєте другим аргументом так щоб у вашому рядку було стільки символів скільки ви вкажету у першому параметрі
console.log(text.padStart(40, "0"));
console.log(text.padEnd(50, "0"));

const shoc = "Привіт,Артем! ";
console.log(shoc.length);
console.log(shoc.padEnd(14, "!"));

const event = "У нас щось сталось ";

const bigEvent = "ЩоСь Велике";

const num = 2 + 10 - (100 / 2) * 10;
// Конкатинація
console.log(shoc + event + bigEvent);
// Шаблонний рядок

// Інтерполяція -це спосіб використання змінних у рядках та де інде де потрібно в випадку з шаблонними рядками синтаксис наступний ${назва змінної значення якої необхідно}
console.log(`${shoc}${event}.${bigEvent} ${num}`);

const hello = "Hello!";
const lengthHello = hello.length;
console.log(lengthHello - 1);
// знаходження останнього індекса у будь чому
const index = lengthHello - 1;
