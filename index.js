function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const consoleButton = document.querySelector("#button");

// addEventlistener = додати слухач події

//Найпопулярніші івенти click, input, submit, scroll, blur, focus, keyDown, keyUp,change.

// addEventlistener перший параметр(той шо до коми) в нього записуємо назви івенту и через кому записуєм другий параметр функцію обробник яка буде відповідати на запитання а що робити якщо ця подія відбулась
consoleButton.addEventListener("click", buttonClick);

function buttonClick(e) {
  console.log(e);
  // target = елемент на якому відбулась подія
  console.log(e.target);
  // currentTarget =  елемент на якому висить слухач події тобто addEventListener

  // Делегування події
  console.log(e.currentTarget);
}

const form = document.querySelector("form");
// submit подія відправки форми
form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  // form - це елемент на який ми повісили слухач події а до цього знайшли за допомогою квериселектора(строка 20)
  //elements = всі елементи які є  у формі для більш зручного доступу до них кожному html елементу роздали атрибут name
  // email =  значення поля name
  // value = це отримання значення inputa  при сабміті форми
  const email = form.elements.email.value;
  // Замінили текстовий контент сабміт кнопки.
  form.elements.submitButton.textContent = email;
  console.log(email);
}

const input = document.querySelector(".input");
const inputButton = document.querySelector(".inputButton");
// Подія інпут спрацьовує кожного разу коли користувач вводить якийсь новий символ в текстове поле
input.addEventListener("input", onInput);

function onInput(e) {
  // e.target.value = дозволяє взяти текс що записав користувач у інпут
  const value = e.target.value;
  // Дозволяє замінити текст кнопки при кожному спрацюванні події
  inputButton.textContent = value;
}

const changeInput = document.querySelector(".select");
// change відпрацьовує коли на інпуті втрачається фокус(синенька обвадка).Зручно працювати з checkboxa-ми радіо кнопками та селектами(випадаючими списками).Тому що івент спрацьовує одразу по зміні значення
changeInput.addEventListener("change", onChange);

function onChange(e) {
  console.log(e);
}

const textArea = document.querySelector(".textarea");
// focus подія яка спрацьовує при натисканні на текстове поле
textArea.addEventListener("focus", onFocus);

function onFocus(e) {
  console.log("FOCUS");
}
// blur спрацьовує при втраті фокусу на елементі
textArea.addEventListener("blur", onBlur);

function onBlur(e) {
  console.log("BLUR");
}

const changeColorButton = document.querySelector(".change-blue");

const body = document.querySelector("body");

changeColorButton.addEventListener("click", onClickChangeColor);

function onClickChangeColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  changeColorButton.textContent = body.style.backgroundColor;
}
// window - Усе вікно нашого браузера
// KeyDown = подія натискання клавіші(спрацьовує раніше)
// KeyUP = подія відпускання клавіші

window.addEventListener("keydown", onKeydown);

function onKeydown(e) {
  console.log(e);
  // Перевіряє натискання клавіш cmd+ESC і якшо вони затиснуті то змінює колір бекграунду
  if (e.code === "Escape" && e.metaKey === true) {
    onClickChangeColor();
  }

  // console.log(e.code);
  // console.log(e.key);
  // ControlLeft;
  // MetaLeft;
  // AltLeft;
}
