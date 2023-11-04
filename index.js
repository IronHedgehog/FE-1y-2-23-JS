const name = "Artem";
let age = 17;
var isOnline = true || false;
const theBiggestInt = 9007199254740991n;
// x = undefined;
const nul = null;

const symb = Symbol(12);

const art = () => {};
const notANumber = NaN;

console.log(typeof art);

// console.log(x);
console.log(age < 18);
console.log(age < 16);

// String = ""
// "фіфі" - тип данних строка
// будь-яке число - тип данних Number
// Boolean - true(Правда) або false(неправда)
// undefined = За цією адресою або шляхом нічого не знайдено
// null - Значення яке встановлюється розробниками для позначки,що в майбутньому тут будуть якісь оновлення

age = age + 1;
console.log("A love JS");

// ВЗАЄМОДІЯ З КОРИСТУВАЧЕМ
// alert("Чи точно ви бажаєте покинути наш сайт з собакою?");

// const promptt = prompt("Чи є тобі 18?");
// Метод який дозволяє збирати данні з користувача та записувати ці данні у змінну для майбутнього використання
// alert(promptt);
// console.log(promptt);

let session = confirm("Чи ви ще за компʼютером?");

alert(session);
