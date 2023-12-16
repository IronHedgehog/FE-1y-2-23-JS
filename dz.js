// Написати скрипт відкриття та закриття модального вікна по кнопці.(task1)

//Використовуючи  код у файлі task1 написати скрипт закриття модального вікна по кліку на бекдроп(task1)

// Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранні  будь якого колір фону боді змінюється відповідно(task2 задача 3)

const form = document.querySelector(".form");

form.addEventListener("change", onClick);

function onClick(e) {
  //e.target.value = 97% взяти значеня з будь якого інпуту
  // target = ціль = елемент на якому відпрацювала подія(на який елемент тицьнув користувач)
  // value = дозволяє забрати значення інпуту
  // console.log(e.target.value);

  document.body.style.backgroundColor = e.target.value;
}

// Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.(task2 задача 4)

const inputEL = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

inputEL.addEventListener("input", onInput);

function onInput(e) {
  //   console.log(e.target.value);
  span.textContent = e.target.value;

  //   console.log(e.target.value.length === 0);
  //   console.log(e.target.value === "");
  if (e.target.value === "") {
    span.textContent = "Незнайомець";
  }
}

// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів(файл task2 задача 5)

function classListToggle(classToAdd, classToRemove) {
  validationInput.classList.add(classToAdd);
  validationInput.classList.remove(classToRemove);
}

const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", onBlur);
// подія blur - це подія яка спрацьовує при втраті фокусу
function onBlur(e) {
  // dataset можливість отримати значення атрибутів елемента
  //   console.log(validationInput.dataset.length);
  if (e.target.value.length <= Number(validationInput.dataset.length)) {
    classListToggle("valid", "invalid");
  } else if (e.target.value.length > Number(validationInput.dataset.length)) {
    classListToggle("invalid", "valid");
  }
}

// Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// Якщо введена відповідна кількість, то border інпут стає зеленим,   якщо неправильне — червоним.
// Для додавання стилів, використовуй CSS-класи valid і invalid.

//Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.(task2  задача 6)

const inputRange = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputRange.addEventListener("input", onRangeScroll);

function onRangeScroll(e) {
  // inputRange.value повертає числове значення інпуту типу рендж від 0 до 100  але в css  нам треба ще вказати одиницю вимірювання тому дописуємо + "px" або іншу одиницю вимірювання в залежності віт того що вам потрібно
  //   console.log(inputRange.value + "px");
  spanEl.style.fontSize = inputRange.value + "px";
}

// кахут
// переврка дз
// булева логіка
// цикли
