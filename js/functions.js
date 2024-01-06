// що таке функція?
// Область бачення?
// Стек викликів

// function = ключове слово для утворення функції
// Назва функції (Вимоги: латинський алфавіт, camelCase, давати змістовні назви.)
//() = в них ми передаємо параметри функції
// {} = тіло функції(Виконується при виклику функції)

// Параметри функції = це те що ми записуєм у круглих дужках після назви
//Ці змінні доступні  тільки у тілі функції
//якщо параметрів більше ніж один то ми записуєм їх по черзі через кому
// Всі параметри присвоюються по черзі
function doCoffee(milk, sirop) {
  //   console.log("milk , " + milk);
  //   console.log("Sirop , " + sirop);

  let result = "";
  if (!milk && !sirop) {
    result = "Я роблю звичайну каву";
  }
  if (milk && !sirop) {
    result = "Я роблю  каву з молоком";
  }
  if (!milk && sirop) {
    result = "Я роблю  каву з cиропом";
  }
  if (milk && sirop) {
    result = "Я роблю  каву з cиропом та з молоком";
  }
  return result;
  // return = використовується для передачі значення з тіла функції у зовнішній код
  //якщо з функції нічого не повернути тобто не використати оператор return то функція автоматично поверне undefined
}

function goWalk() {
  const favoriteCoffee = doCoffee("milk");
  //   console.log(favoriteCoffee);
}
goWalk();
// const arrowFunc = () => {};
const element = document.getElementById("start");

// doCoffee("milk");
// doCoffee() = виклик функції doCoffee
// doCoffee("milk") = "milk" = При виклику функції ми можемо передати перелік данних які необхідні функції для роботи(Аргументи)

// element.addEventListener("click", doCoffee());
// Параметри за замовчуванням = це перестраховка у тому випадку якщо аргументи не передадуть
function sum(a = 0, b = 0, c = 0) {
  //  arguments = це псевдомасив аргументів які приймає функція
  //в чому різниця між звичайним і псевдомасивом - у тому що у псевдомасиву майже немає методів масиву з якими ми зазвичай працюємо тому за допомогою Array.from() ми можемо перетворити псевдомасив у звичайний масив і використовувати усі методи масиву що ми вивчили
  // console.log(Array.from(arguments));
  let total = 0;
  for (const argument of arguments) {
    total += argument;
    console.log(total);
  }
  return total;
}

// console.log(5 + 5);
console.log(sum(10, 10000000, 1231240));
// console.log(10 + 5);
// ... rest оператор(оператор який збирає усі аргументи що надходять в один масив)
function plusString(...args) {
  console.log(args);
}

plusString("a", "c", "d");
