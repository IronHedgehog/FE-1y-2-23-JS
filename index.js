const int = 11;

// String ing = "asd".length > "asdf".length;
if (int % 2 === 0) {
  console.log(int % 2 === 0);
  console.log("парне");
} else {
  console.log(int % 2 === 0);
  console.log(" не парне");
}

// ------------------------- Логічні опертаори ------------

// ЛОГІЧНИЙ && (і)
// чи можемо ми дати знижку на товари від 10000 до 20000
const bread = 10000;
const tovar = 15000;
const tv = 30000;
const pc = 120000;
const noCan = tv >= 10000 && tv <= 20000;
const can = tovar >= 10000 && tovar <= 20000;
const noNoCan = pc >= 10000 && pc <= 20000;

// логічний оператор && повертає false якщо хочаб один вираз не правдивий(false) якщо перша операція = false то друга або третя навіть не прочитається
const canBread = bread >= 10000 && bread <= 20000 && bread === 10001;
console.log(noNoCan);
console.log(can);
console.log(canBread);

// ЛОГІЧНИЙ АБО (||)

// Або нам вистачає грошей на гарну пеку або на трошки гірше і погуляти

const peca = 50000;
const pekaNotBad = 40000;

const walk = peca > 50001 || (pekaNotBad > 30000 && tovar <= 10000);
console.log(walk);

const num = 7;

// оператор АБО (||) якщо хоча б одне значення є true то результат логічного порівнняння буде true
const result = num < 10 || num > 30 || num < 3;
console.log(result);
// ЛОГІЧНЕ НЕ (!)
// Оператор НЕ(!) дозволяє отримати протилежне значення або щось заперечити

console.log(!true);

console.log(!0);

console.log(!Boolean(56));

// Щоб відпочити потрібні квитки і полетіти відпочивати якщо квитків немає то відпочити не вийде
console.log(false && bread === 10000);

console.log(false || true || false);

const sub = 500;
const standart = 100;
const silver = 150;
const gold = 200;
const platinum = 250;
const iron = 500;

console.log(sub >= platinum);

// якщо умова всередені if не виконується(false) то і увесь блок коду який ви написали в if  не виконується
if (sub >= platinum) {
  const num = 2 + 2 + 3;
  console.log(num);

  // Else = виконується якщо блок IF не виконався
} else if (sub >= gold) {
  console.log(
    "Шановний саб, у вас є можливість купити голдову підписку зі знижкою"
  );
} else if (sub >= silver) {
  console.log(" Ну хоча сільвер купи");
} else {
  console.log(
    "В тебе має бути хоча б стандартна підписка бо нам треба грошики"
  );
}

switch (sub) {
  case 100:
    console.log(standart);
    break;
  case 200:
    console.log(silver);
    break;
  case 300:
    console.log(gold);
    break;
  case 400:
    console.log(platinum);
    break;
  case 500:
    console.log(iron);
    break;

  default:
    console.log("ЗАЖРАЛИСЬ");
    break;
}

// ТЕРНАРНИЙ ОПЕРАТОР
const wage = 101;
if (wage <= 100) {
  console.log("ok");
} else {
  console.log("Їди додому");
}
// Тернарний оператор створений для простих задач,для виконання невиличкої умови, її перевірки за допомогою знаку питання і повернення двух значень якщо правда повертається перше значення після знаку питання якщо не правда повертається значення після двокрапки.
const isOk = wage <= 100 ? "ok" : "Їди додому";
console.log(isOk);
