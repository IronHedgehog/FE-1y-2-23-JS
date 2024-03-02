const base = 15000;
const overtime = 10;
const rate = 10;

const getWage = (base, overtime, rate) => {
  return base + overtime * rate;
};

console.log(getWage(base, overtime, rate));

const worker = {
  base: 15000,
  overtime: 10,
  rate: 10,

  getWage() {
    return (this.base + this.overtime) * this.rate;
  },
};

worker.add = 20;
console.log(worker);
console.log(worker.getWage());

// 1) клас треба стоврити за допомогою ключового слова class
// 2) Назва класу завжди пишеться з великої літери

// class це креслення на папері
class Car {
  static Class = {
    ELITE: "Elite",
    STANDART: "Standart",
  };

  #class;
  // this === class Car
  // constructor === зібрати обʼєкт з тих полів,що передали для збірки (це звичайна функція)

  constructor(name = "Audi", wheels = 4, doors = 4, role = "Standart") {
    this.name = name;
    this.wheels = wheels;
    this.doors = doors;
    this.#class = role;
  }

  get role() {
    return this.role;
  }
  set role(newRole) {
    this.#class = newRole;
  }
  bibi() {
    console.log(`${this.name} бип бип `);
  }
}
// Статичні властивості це ті властивості які доступні тільки в класі в якому ви їх створили(на нещадках вони вже не доступні).
// Потрібні для зберігання інформації про класс

const superCar = new Car("superCar", 4, 4, Car.Class.ELITE);
console.log(superCar);
console.log(Car.Class.ELITE);
console.log(superCar.Class);

// polymorph - багато форм
// new = новий обʼєкт класу
// const BMW = new Car("BMW", 4, 4);
// console.log(BMW);

// const AUDI = new Car("Audi", 2, 4);
// console.log(AUDI);
const nine = new Car();
console.log(nine);

// class Audi унаслідував конструктор та всі не приватні поля для використання
class Audi extends Car {
  constructor(name, wheels, doors, engine) {
    // Підключення та використання унаслідованого конструктора
    super(name, wheels, doors);
    this.engine = engine;
  }
  bibi() {
    console.log(`${this.name} біпає по особливому`);
  }
}

class Bmw extends Car {
  constructor(name, wheels, doors, engine) {
    // Підключення та використання унаслідованого конструктора
    super(name, wheels, doors);
    this.engine = engine;
  }
  bibi() {
    console.log(`${this.name} біпає по BMWшному`);
  }
}

const audi = new Audi("Audi", 1, 3, "2L");
const bmw = new Bmw("BMW", 4, 2, "3L");
const car = new Car("Car", 4, 4);
console.log(bmw);

car.bibi();
audi.bibi();
bmw.bibi();

// інкапсуляція

class User {
  name;
  // # - на початку означає створення приватної властивості
  #email;
  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // getter та setter
  getEmail() {
    return this.#email;
  }

  changeEmail(email) {
    if (email.length === 0) {
      console.log("Введіть валідні данні");
      return;
    }
    this.#email = email;
  }
}

const Artem = new User({ name: "Artem", email: "asd@asd.com" });

console.log(Artem);
Artem.changeEmail("");
console.log(Artem);
// Artem.email = "zxc@zxc.com";// помилка так робити(ви створюєте нове поле)
console.log(Artem);

console.log(Artem.getEmail());

const animal = {
  legs: 4,
};

const dog = Object.create(animal);

dog.name = "Bobik";

console.log(dog);
// чи унаслідувалась собака(dog) від обʼєкту animal
console.log(animal.isPrototypeOf(dog)); // true

// hasOwnProperty

// obj - обʼєкт який ми маємо перебрати(той з якого маємо отримати ключі)
// key - константа в яку приходить кожний ключ з обʼєкту по черзі
const obj = {
  root: true,
  a: 5,
  b: 3,
};
for (const key in obj) {
  console.log(key);
}

for (const key in dog) {
  // hasOwnProperty - чи належить данне поле саме обʼєкту dog(чи було воно створено у обʼєкті dog)
  // ! - НЕ
  if (!dog.hasOwnProperty(key)) {
    continue;
  }
  console.log(key);
}

// Object.keys() - повертає усі власні ключи обʼєкта (не наслідувані)
const dogKeys = Object.keys(dog);

console.log(dogKeys);
