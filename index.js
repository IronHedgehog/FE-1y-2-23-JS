// const table = {
//   nazva: "Table",
//   material: "derevo",
// };

// const head = {
//   meta: "",
// };
// document.querySelector = дозволяє нам знайти та записати у змінну будь-який html тег на сторінці. Якщо тегів за пошуковим запитом багато то обереться перший який співпав
// querySelector - пошук за допомогою атрибутів,класів,idшніків,за тегом
// атрибут
const ulAttribute = document.querySelector("[ul]");
const ulClass = document.querySelector(".ul");
const ulId = document.querySelector("#ul");
const ulTag = document.querySelector("ul");
// .childnodes дозволяє нам отримати масив дитячих елементів але з нюансами(включаючи текст тобіш пробіли,переноси строк)
const child = ul.childNodes;
//.children = повертає масив дитячих тегів.

const children = ul.children;

// .firstchild = повертає перший дитячий елемент якщо ви дотримуєтись хоча б яких потреб кодстайлінгу то скоріш за все це перенос строки.
const first = ul.firstChild;
// .firstElementChild = повертає перший дитячий елемент.

const realyFisrt = ul.firstElementChild;

// .firstchild = повертає останній дитячий елемент якщо ви дотримуєтись хоча б яких потреб кодстайлінгу то скоріш за все це перенос строки.
const last = ul.lastChild;
// .lastElementChild = повертає останній дитячий елемент.

const realyLast = ul.lastElementChild;

// .nextElementSibling; = дозволяє взяти  сусіда попереду

const midleLi = realyFisrt.nextElementSibling;

// .previousElementSibling; = дозволяє взяти попереднього сусіда

const midleLiFromLast = realyLast.previousElementSibling;

console.log(midleLiFromLast);

// ПОШУК ЕЛЕМЕНТІВ

const li = document.querySelector(".li");

const previous = li.parentElement;

const nextSibling = li.nextElementSibling;

// document.querySelectorAll дозволяє знайти усі елементи на сторінці за заданими параметрами(Знаходить у вигляді масиву)
const manyLi = document.querySelectorAll(".li");
manyLi[0].attributes.src = "s;ldf,f;lsd,f";

manyLi[1].attributes.src =
  "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701475200&semt=sph";
console.log(manyLi);

// document .querySelector дозволяє нам знайти html тег на нашій сторінці
const img = document.querySelector(".li-img");
// Звернення до атрибутів картинки src та alt для їх переприсвоєння значення

img.alt = "Картинка";
img.src =
  "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701475200&semt=sph";
console.log(img);

const input = document.querySelector("#input").value;
console.log(input);

const checkbox = document.querySelector(".checkbox");

console.log(checkbox.checked);

//ТЕКСТОВИЙ КОНТЕНТ

const p = document.querySelector(".p");
console.log(p.textContent);
// .textContent дозволяє отримати текстовий контент та при бажанні його замінити
p.textContent = "Привіт";
console.log(p.textContent);

// СТИЛІ(Інлайнові)

document.body.style.backgroundColor = "DarkBlue";

const button = document.querySelector(".button");

button.style.backgroundColor = "yellow";

// ClassList додавання класівʼ
const pp = document.querySelector(".pp");
// .add додати клас
pp.classList.add("bbb");

console.log(pp);
// remove видалити клас
// pp.classList.remove("bbb");
console.log(pp);
// .contains повертає true або false в залежності від того чи є клас на який ви запитали на елементі якщо є true якщо нема false
console.log(pp.classList.contains("bbb"));
// replace  приймає два аргумента. перший для видалення другий новий який треба підставити замість старого
pp.classList.replace("bbb", "rrr");
