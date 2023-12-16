//OR =   || = логічний оператор АБО

// Ми підемо гуляти,якщо на вулиці хороша погода(true) або в нас є парасолька(false).

// a = на вулиці хороша погода
// b = в нас є парасолька

// Матриця значень
// a = true, b = false = > true
// a = true, b = true = > true
// a = false, b = false = > false
// a = false, b = true = > true

// ЗАКОНОМІРНІСТЬ якщо у нас є ХОЧА Б ОДНЕ true ми йдем гулять

// ---------------------------------------------------------

//AND =  && = логічне І.

// Ми вивчемо JS та іноді побачим круті фішки ,якщо будем ходити на заняття(false) І робити домашні завдання!(false)

// a = будем ходити на заняття
// b = робити домашні завдання

// a = false, b = false => false
// a = true, b = true =>  true
// a = true, b = false => false
// a = false, b = true => false

// ЗАКОНОМІРНІСТЬ: повертає true якщо ВСІ ОПЕРАНДИ true

// ЧОМУ ЦІ ОПЕРАТОРИ ЛІНИВІ?

// const canWalk = isWeatherGood() && hasUmbrella();
// console.log(canWalk);

// function isWeatherGood() {
//   console.log("Виклик гарної погоди");
//   return false;
// }

// function hasUmbrella() {
//   console.log("Виклик парасольки");
//   return true;
// }

// ПРИКЛАД

const hasGoodMarks = true;
const isOldMan = false;
const value = 30;

const result = hasGoodMarks && isOldMan && value > 30 && (value = 30);

// hasGoodMarks && isOldMan = false;

// value > 30 = false

// value = 30 = true
