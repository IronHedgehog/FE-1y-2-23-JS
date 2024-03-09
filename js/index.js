// Метод для створення DOM вузла
const heading = document.createElement("h1");

console.log(heading);
heading.textContent = "Цей елемент має зʼявитись на сторінці";
console.log(heading);
// Методи для додавання на сторінку(можуть через кому додавати безліч дом вузлів тобіш тегів)

// append - додає елемент після усіх дітей
document.body.append(heading);
// prepend - додає елемент перед усіма дітьми
document.body.prepend(heading);
// after - працює так само як append
document.body.after(heading);
// before - працює так само як prepend
document.body.before(heading);

const list = document.querySelector(".list");

// Створити тег для додавання

const li = document.createElement("li");
const li2 = document.createElement("li");
li.textContent = "остання лішка";
li2.textContent = "JS перша лішка";
// appendChild додає останнім дитячим елементом
list.appendChild(li);
// insertBefore - встановлює елемент який ви передаєте першим параметром перед елементом,що ви передаєте другим параметром
list.insertBefore(li2, li);

li2.remove();

// innerHTML - видалення елементів
// innerHTML - будь-який тег який ви запишите у середину innerHTML буде створено на сторінці.

// Видаляє(чистить) елемет на якому його викликали (ЧИТАННЯ)
// Додає те, що ми попросили (Заміни)
// document.body.innerHTML = "<h1>Привіт, я тут чітерю трошки</h1>";
//

// innerHTML - "" файний спосіб видалити елементи
// document.body.innerHTML = "";
// insertAdjacentHTML - додавання елементів
const test = document.querySelector(".test");

const template =
  "<h1>Привіт, я тут чітерю трошки</h1> <ul><li>1</li><li>2</li></ul>";

test.insertAdjacentHTML("beforeend", template);

const buttom = document.querySelector("button");

// dataset - властивості шукати без слова дата
console.log(buttom.dataset.save);
console.log(buttom.dataset.delete);
