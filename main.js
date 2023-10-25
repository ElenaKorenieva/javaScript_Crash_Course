// log input to the console object
console.log("Hello World");
console.error("This is an error");
console.warn("This is a warning");
//window.alert('This is an alert');

// variables

// var - globally scopped, old syntax
// let - can be reassigned, const - constant, can't be reassigned
let myAge = 30;

// data types
// primitives
// String, Number, Boolean, null, undefined

const name1 = "John";
const age = 30;
const rating = 3.5;
const isCool = true;
const t = null;
const a = undefined;
let m; // undefined

// Concatenation
console.log("My name is " + name1 + " and I am " + age);
// Template string
console.log(`My name is ${name1} amd I am ${age}`);

// Arrays - variables that hold multiple values

const fruits = ["apples", "oranges", "pears"];
fruits[3] = "grapes";
fruits.push("mangos");
fruits.unshift("strawberries");
fruits.pop();
console.log(Array.isArray("hello"));
console.log(fruits.indexOf("oranges"));
console.log(fruits);

// Objects

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "sports", "movies"],
  address: {
    street: "50 main str",
    city: "Boston",
    state: "MA",
  },
};

const {
  firstName,
  lastName,
  address: { city },
} = person;
console.log(city);

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appointment",
    isCompleted: false,
  },
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For
for (let i = 0; i <= 10; i++) {
  console.log(`For Loop Number: ${i}`);
}

for (let i = 0; i <= todos.length; i++) {
  console.log(todos[i]);
}

for (let todo of todos) {
  console.log(todo);
}

// While

let i = 0;
while (i < 10) {
  console.log(`While Loop Number: ${i}`);
}

//forEach, map, filter

todos.forEach(function (todo) {
  console.log(todo.text);
});

const todoText = todos.map(function (todo) {
  return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function (todo) {
  return todo.isCompleted === true;
});

// chaining
const todoCompleted1 = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoCompleted1);

// Conditionals

// const x = 4;

// if (x === 10 ) {
//   console.log("x is 10");
// } else if (x > 10) {
//   console.log("x is greater than 10");
// } else {
//   console.log("x is less than 10");
// }

const x = 4;
const y = 11;

if (x > 5 || y > 10) {
  console.log("x is more than 5 or y is more than 10 ");
}

if (x > 5 && y > 10) {
  console.log("x is more than 5 or y is more than 10 ");
}

// ternary operator

const x1 = 10;

const color = x1 > 10 ? "red" : "blue";
console.log(color);

// switches

switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red or blue");
}

// functions

function addNums(num1 = 1, num2 = 1) {
  // console.log(num1 + num2);
  return num1 + num2;
}

addNums();
addNums(1, 2);
console.log(addNums(5, 5));

// arrow function
const addNums = (num1 = 1, num2 = 1) => num1 + num2;

const addNums = (num1 = 1, num2 = 1) => {
  return num1 + num2;
};

console.log(addNums(5, 5));

// OOP

function Person(firstName, lastName, dateOfBirth) {
  this.firstName = firstName;
  this.lastName = lastName;
  // this.dateOfBirth = dateOfBirth;
  this.dateOfBirth = new Date(dateOfBirth);

  // this.getBirthYear = function () {
  //   return this.dateOfBirth.getFullYear();
  // };

  // this.getFullName = function () {
  //   return `${this.firstName} ${this.lastName}`;
  // };
}

Person.prototype.getBirthYear = function () {
  return this.dateOfBirth.getFullYear();
};

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Instantiate object

const person1 = new Person("John", "Doe", "4-3-1980");
const person2 = new Person("Mary", "Smith", "3-6-1970");
console.log(person2.dateOfBirth.getFullYear());
console.log(person1);
console.log(person2.getFullName());

// DOM
// window is at very top level
console.log(window);

// Single element
const form = document.getElementById("my-form");
console.log(form);
console.log(document.querySelector(".container"));
console.log(document.querySelector("h1"));

// Multiple element
console.log(document.querySelectorAll(".item"));
console.log(document.getElementsByClassName("item"));
console.log(document.getElementsByTagName("li"));

const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item));

const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "Brad";
ul.lastElementChild.innerHTML = "<h4>Hello</h4>";

// change some style

const btn = document.querySelector(".btn");
btn.style.background = "red";

// Event listeners
btn.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("click");
  // console.log(e.target.className);
  document.querySelector("#my-form").style.background = "#ccc";

  document.querySelector("body").classList.add("bg-dark");
  document.querySelector(".items").lastElementChild.innerHTML =
    "<h1>Hello</h1>";
});

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );
    userList.appendChild(li);

    //Clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
