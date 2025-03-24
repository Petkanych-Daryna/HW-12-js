// Напиши скрипт, який, для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
  mood: "happy",
  hoddy: "play games",
  premium: true,
};
user.hoddy = "skydiving";
user.premium = false;

for (let key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

function countProps(obj) {
  return Object.keys(obj).length;
}
console.log(countProps(user));

// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

function findBestEmployee(employees) {
  let maxTasks = 0;
  let bestEmployee = "";

  for (let [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }

  return bestEmployee;
}

let employees = {
  Liza: 12,
  Misha: 17,
  Kate: 6,
};

console.log(findBestEmployee(employees));

// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

function countTotalSalary(employees) {
  return Object.values(employees).reduce((total, salary) => total + salary, 0);
}

let salaries = {
  Liza: 4000,
  Misha: 9000,
  Kate: 1900,
};

console.log(countTotalSalary(salaries));

// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

function getAllPropValues(arr, prop) {
  return arr.map((obj) => obj[prop]).filter((value) => value !== undefined);
}

let products = [
  { name: "Apple", price: 40, quantity: 7 },
  { name: "Banana", price: 62, quantity: 10 },
  { name: "Orange", price: 88, quantity: 20 },
];

console.log(getAllPropValues(products, "name"));

// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).

// Викличи функції для перевірки працездатності твоєї реалізації.

function calculateTotalPrice(allProdcuts, productName) {
  let product = allProdcuts.find((p) => p.name === productName);
  return product ? product.price * product.quantity : 0;
}
console.log(calculateTotalPrice(products, "Apple"));
