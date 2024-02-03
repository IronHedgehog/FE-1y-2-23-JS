const a = {
  value: 10,
  val: 5,
  v: 3,
  w: 10,
};
// обʼєкти не ітеруються тобто іх неможливо перебрати за допомогою відомих нам циклів
// for (const value of a) {
//   console.log(value);
// }

// for in дозволяэ перебрати обʼєкти та змінювати значення на необхідні якщо це треба
for (const key in a) {
  // hasOwnProperty перевіряє чи це властивості саме цього обʼєкту
  // console.log(a.key);
  const element = a[key];
  if (element === 3) {
    a[key] = 5;
    console.log(element);
  }
  console.log(element);
}
// Два способи отримати значення влистивості обʼєкту
console.log(a.value);
// console.log(a["value"]);
// Дозволяє тримати масив усіх ключів обʼєкта які ви передасте у круглі дужки
const aKeys = Object.keys(a);
console.log(aKeys);
// Отримує масив значень обʼєкту
const aValues = Object.values(a);
console.log(aValues);
// Дозволяє отримати пари ключ значення всередені масиву
const aEntries = Object.entries(a);
console.log(aEntries);

// for (const key of aKeys) {
//   console.log(`${key} : ${a[key]} `);
// }
const values = [1, 23, 3, 4, 2, 6, 6, 7, 7, 8, 9, 9, 9, 0];
console.log(...values);
const min = Math.min(values); // NaN
// ... - Spread оператор який розпилює масив данних по одному(виймає з масиву)
const minSpread = Math.min(...values); // 0 - ...values

console.log(min);
console.log(minSpread);

const valuesCopy = [...values, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
// Складні типи даних зберігаються за посиланням
console.log(values);
console.log(valuesCopy);
console.log(values === valuesCopy); //- false
// Копіювання данних ES5
const valueCopySlice = valuesCopy.slice();
// Всі складні типи данних зберігаються за посиланням
console.log(valueCopySlice === valuesCopy);
// .assign - слугує для копіювання (Динозавр у світі копіювання)

const b = {
  b: 10,
};
const copyA = Object.assign(a);
console.log(a);
copyA.y = 10;
console.log(copyA);

const abCopy = Object.assign({}, a, b);
console.log(abCopy);
