// Напиши скрипт, який виконає наступні операції.

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.

// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).

// Наприклад, для першої категорії вийде:

// Категорія: Тварини
// Кількість елементів: 4

//  <ul id="categories">
//    <li class="item">
//      <h2>Животные</h2>

//      <ul>
//        <li>Кот</li>
//        <li>Хомяк</li>
//        <li>Лошадь</li>
//        <li>Попугай</li>
//      </ul>
//    </li>
//    <li class="item">
//      <h2>Продукты</h2>

//      <ul>
//        <li>Хлеб</li>
//        <li>Петрушка</li>
//        <li>Творог</li>
//      </ul>
//    </li>
//    <li class="item">
//      <h2>Технологии</h2>

//      <ul>
//        <li>HTML</li>
//        <li>CSS</li>
//        <li>JavaScript</li>
//        <li>React</li>
//        <li>Node</li>
//      </ul>
//    </li>
//  </ul>;

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const ul = document.querySelector("#ingredients");
const liItems = ingredients.map((ingredient) => `<li>${ingredient}</li>`);

// join() - прибирає з розмітки коми
ul.insertAdjacentHTML("beforeend", liItems.map((item) => item).join(""));

// for (const ingredient of ingredients) {
//   const li = `<li>${ingredient}</li>`;
//   console.log(`<li>${ingredient}</li>`);
// }

// ul.insertAdjacentHTML("beforeend", li);
for (let index = 0; index < ingredients.length; index++) {
  //   const li = document.createElement("li");
  //   li.textContent = ingredients[index];
  //
  //   console.log(li);
}
// console.log(liItems);

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector("#gallery");

const galleryItems = images.map(
  (image) => `<li><img class="img" src="${image.url}" alt="${image.alt}"/></li>`
);

gallery.insertAdjacentHTML(
  "beforeend",
  galleryItems.map((item) => item).join("")
);

// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.

// Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

const decrement = document.querySelector("#decrement");
const increment = document.querySelector("#increment");
const value = document.querySelector("#value");

increment.addEventListener("click", incrementClick);
decrement.addEventListener("click", decrementClick);

function incrementClick(e) {
  value.innerHTML = Number(value.textContent) + 1;
}
function decrementClick(e) {
  if (value.textContent <= 0) {
    return;
  } else {
    value.innerHTML = Number(value.textContent) - 1;
  }
}
