// Код працює та читається зверху вниз кожен рядок по черзі
// змінну ми спочатку маємо створити а потім будь яким чином використовувати
const number = 5;

const result = doSum(number);
const secondResult = doSum(7);
console.log(secondResult);
// console.log(number);

// hoisting - всплиття, підняття нашої функції в гору по коду(такі функції можна використовувати будь де у коді)
function doSum(number) {
  return number + 2;
}
// Стрілкові функції, hoisting-а не мають (тобто їх можна викликати лише після створення)
const sum = (a, b) => {
  return a + b;
};

console.log(result);
