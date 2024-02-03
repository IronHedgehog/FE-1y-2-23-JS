// 1)Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.

// 1)Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance"
// 2)Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку.

// {} = літерал обʼєкту (тобто так виглядає пустий обʼєкт)
// ownerName ,accountNumber,balance - ключі(завжди строка)
// "Artem","0000 0000 0000 0000",0 - значення ключів

const minusMoneyButton = document.querySelector("#minus");
const plusMoneyButton = document.querySelector("#plus");

const bankAccount = {
  ownerName: "Artem",
  accountNumber: "0000 0000 0000 0000",
  balance: 0,

  deposit(newMoney) {
    this.balance += newMoney;
    alert(
      `Ви поповнили рахунок на ${newMoney} гривнів,тепер у вас на рахунку ${this.balance} гривнів`
    );
  },
  withdraw(cash) {
    if (this.balance < cash) {
      alert("Не вистачає коштів для проведення операції");
    } else {
      this.balance -= cash;
      alert(`Ваш баланс ${this.balance}`);
    }
  },
};

minusMoneyButton.addEventListener("click", onMinusButtonClick);

plusMoneyButton.addEventListener("click", onPlusButtonClick);

function onMinusButtonClick(e) {
  bankAccount.withdraw(700);
}

function onPlusButtonClick(e) {
  bankAccount.deposit(10);
}

console.log(bankAccount);

//2) Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

//3) Створіть об’єкт "user", якbq буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. Використайте інпути для запису значень властивостей в об’єкт

const user = {
  name: "",
  email: "",
  password: "",
  login(name, email, password) {
    //   trim() обрізає пробіли з обох боків від тексту
    if (email.includes("@") && password.trim().length >= 6) {
      user.name = name;
      this.email = email;
      this.password = password;
      alert("Ваші данні гуд");
    } else {
      alert("ВАщі данні не гуд");
    }
  },
};

const form = document.querySelector("#form");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  //  form.elements - надає доступ до усіх елементів форми(було б непогано попередньо проіменувати інпути)
  //   console.log(form.elements);
  const nameValue = form.elements.name.value;
  const emailValue = form.elements.email.value;
  const passwordValue = form.elements.password.value;
  user.login(emailValue, passwordValue);
}
console.log(user);

// const user = document.getElementById("input1").value;
// const email = document.getElementById("input2").value;
// const password = document.getElementById("input3").value;

//4) Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку. Якщо метод повернув "true" то змінити колір тексту поля title на зелений.
