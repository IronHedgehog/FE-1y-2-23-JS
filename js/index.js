console.log("as");
// callback - це функція яка ніколи сама по собі не відпрацьовує, вона створена для відпрацювання в інших функціях
const greatingsUser = function (name) {
  console.log(`Привіт,${name}`);
};
// callback
const logInTroubles = function (trouble) {
  console.log(trouble);
};

function ga(a, b, c, d, f) {
  console.log(a, b, c, d, f);
}

function filters(message) {
  console.log(message);
}
// функція вищого порядку - функція яка приймає параметрами інші функції
// pure Function - чиста функція - одна функція - одна дія(логіка)
let counter = 0;
function logIn(success, error, ga, filters) {
  if (Math.random() * 100 > 80) {
    console.log("Рандом більше 80");
    success("Artem");
    ga();
  } else {
    counter += 1;
    if (counter === 3) {
      filters("Ваш акаунт заблоковано підтвердіть шо це ви на пошті");
      counter = 0;
    }
    console.log("Рандом менше 80");
    error("Сталась помилка, спробуй ще");
  }
}

// logIn(greatingsUser, logInTroubles, ga, filters);

// Arrow functions
// function declaration - утворення функцій через ключеве слово function
// function getSum(a, b) {
//   return a + b;
// }

// console.log(getSum(2, 2));

// стрілкова функція - стрілка

// Склад

// Ключове слово - const
// назва функції (getSum)
// = присвоєння результату функції у змінну getSum
//  () = приймаємо параметри
// () =>{} = синтаксис утворення стрілкової функції

// => - в стрілку вмонтовано return
// синтаксис раннього повернення
const getSum = (a, b) => {
  const c = 5;
  return c + a + b;
};

console.log(getSum(2, 2));

// якщо у вас один параметр то дужки кругі не є обовʼязковими
const logInn = (...args) => {
  console.log(args);
};
logInn("A", "r", "t", "e", "m");
// якщо функція не приймає жодного параметру то обовʼязково мають бути круглі дужки
const logOut = () => {};
