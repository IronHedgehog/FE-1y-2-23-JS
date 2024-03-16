// 'keyUp, keyDown'

document.addEventListener("keydown", (event) => {
  // preventDefault - забороняє дії за заовчуванням
  event.preventDefault();

  console.log(event);
  if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
    document.body.style.backgroundColor = "#000000";
  }

  if (event.shiftKey && event.code === "KeyQ") {
    console.log("keyQ");
  }
});

// обʼєкт події - це обʼєкт що нам передає addEventListener для того щоб ми могли відстежити та отримати данні при яких обставинах з елементом відбувся івент який ми чекали
document.addEventListener("keyup", (event) => {
  // code - код повертає назву фізичної клавіші на клавіатурі(не залежить від мови)
  // key - ключ повертає символ який був згенерований за допомогою натискання на клавішу
  // console.log("КОд", event.code);
  // console.log("ключ", event.key);
  // console.log(event);
});

// ---------------ПОдії мишки-------------------

document.addEventListener("mousedown", (evt) => {
  // console.log("MouseDown");
});

// click це повний цикл натискання кнопки мишки
document.addEventListener("click", (evt) => {
  // console.log("click");
});

document.addEventListener("mouseup", (evt) => {
  // console.log("Mouseup");
});

const div = document.querySelector(".div");
// mouseover - наведення
div.addEventListener("mouseover", () => {
  // div.style.backgroundColor = "#000000";
});

//mouseout - ми перестали наводитись на елмент
div.addEventListener("mouseout", () => {
  // div.style.backgroundColor = "tomato";
});

div.addEventListener("dblclick", () => {
  console.log("dblclick");
});

div.addEventListener("contextmenu", (e) => {
  // e.preventDefault() - забороняє появу контекстного меню
  // e.preventDefault();
  console.log("Людина відкрила менюшку іструментів");
});

document.body.addEventListener("mousemove", (e) => {
  // e.clientX, e.clientY - відраховуються від верхнього лівого кута
  // console.log("X", e.clientX);
  // console.log("Y", e.clientY);
});
div.addEventListener("mousemove", (e) => {
  // e.pageX -
  console.log("X", e.pageX);
  console.log("Y", e.pageY);
});
