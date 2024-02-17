/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
    if (type === Transaction.DEPOSIT) {
      account.transactions.push({
        id: 1,
        type: Transaction.DEPOSIT,
        amount: amount,
      });
    } else {
      account.transactions.push({
        id: 2,
        type: Transaction.WITHDRAW,
        amount: amount,
      });
    }
  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    if (amount <= 0) {
      alert("Введіть значення більше нуля");
      return;
    }
    this.createTransaction(amount, Transaction.DEPOSIT);
    account.balance += amount;
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > account.balance) {
      alert("У вас невистачає коштів");
      return;
    }
    this.createTransaction(amount, Transaction.WITHDRAW);
    account.balance -= amount;
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    //   Масив транзакції
    const transactions = this.transactions;
    for (const transaction of transactions) {
      if (id === id) {
        return transaction;
      }
    }
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    const transactions = this.transactions;
    let total = 0;
    for (const transaction of transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      } else {
        total;
      }
    }

    return total;
  },
  //   getTransactionTotal(type) {
  //     const totalAmount = this.transactions.reduce((total, transaction) => {
  //       return transaction.type === type ?  : total;
  //     }, 0);
  //     return `Загалом ${type} операції: ${totalAmount}`;
  //   },
};

// account.deposit(500);

// account.withdraw(300);

// console.log(account.getTransactionDetails(2));

// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// const balance = account.getBalance();
// console.log(balance);

// console.log(account.transactions);
// console.log(account.balance);

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

const { name, age, hobby, premium } = user;
console.log(name, age, hobby, premium);
