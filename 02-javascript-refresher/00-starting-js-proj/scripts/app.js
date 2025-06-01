// import and exports
// import { apikKey } from "./util.js";
// import apikKey, { abc as test, xyz as content } from "./util.js";
// console.log(apikKey, abc, xyz);
// import * as util from "./util.js";
// console.log(util.default, util.abc, util.xyz);

// Variables, Values & Operators
// let userMessage = "Hello World!!!";
// const PI = 3.14;

// console.log(userMessage);

// console.log(10 / 5);
// console.log("hello" + " world");
// console.log(10 === 5);

// if (10 == 10) {
//   console.log("works!");
// }

// functions
// function createGreeting(userName = "Dilnawaz", message = "Hi,") {
//   console.log("Hi, Dilnawaz");
//   console.log(userName);
//   console.log(message);
//   return "Hi, I am " + userName + " " + message;
// }

// greet();
// greet();

// const msg = createGreeting("Dilnawaz", "Hello!");
// console.log(msg);
// console.log(createGreeting("Ali", "Whats up!"));
// console.log(createGreeting("Jabir"));

// Exercise
/*
Exercise: Working with Functions
Your task is to write a new function that should be named combine and have the following characteristics:

Accept three input values

Calculate a new value based on the three input values: a * b / c (if a, b & c are the input values)

Return the calculated result

Learning Objective:
Create a new function that utilizes parameters and returns a value.

Hints:
Create a new function via the function keyword

Make sure the name contains no typo (it should be combine)

Separate multiple parameters via commas

Use the * and / operators for the required calculation

Don't forget to return the calculated result via the return keyword

Solution:
In JavaScript, functions can be created via the function keyword. Hence a combine function can be created like this:

function combine() {
}
This function won't do anything yet though.

To solve this exercise, the function should accept three input values - i.e., three parameters:

function combine(a, b, c) {
}
The parameter names are totally up to you - instead of a, b and c, you could've also used val1, val2 and val3 or anything else!

To derive the requested calculation result, you can then add a new variable or constant inside of the function (and use the * and / operators for the actual calculation):

function combine(a, b, c) {
  const result = a * b / c; // or use "let" => up to you
}
Last but not least, the result must be returned - this can be achieved by the built-in return keyword:

function combine(a, b, c) {
  const result = a * b / c; // or use "let" => up to you
  return result;
}


*/

// Anonymous Function
// Function keyword anonymous
// export default function(){
//     console.log("hello")
// }
// arrow anonymous
// export default () => {
//   console.log("hello");
// };

// Arrow Function
// const greetUser = () => {
//   console.log("Hello World!");
// };
// const greetUserArr = () => console.log("Hello World!");

// Objects & Classes
// const user = {
//   name: "Max",
//   age: 34,
//   greet() {
//     console.log("User Obj");
//     console.log(this.age, "name");
//   },
// };

// console.log(user.name);
// user.greet();

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log("Hi!");
//   }
// }

// const user1 = new User("Manuel", 35);
// console.log(user1);

//Arrays & Arrays Methods
// const hobbies = ["Sports", "Cooking", "Reading"];

// console.log(hobbies[0]);

// hobbies.push("Working");
// console.log(hobbies);

// const itemIndex = hobbies.findIndex((item) => item === "Cooking");
// console.log(itemIndex);

// const edittedHobbies = hobbies.map((item) => item + "!");
// console.log(edittedHobbies);

// const hobbiesTransformed = hobbies.map((item) => ({
//   item,
// }));
// console.log(hobbiesTransformed);

// Exercise Arrays
/*
Exercise: Array Methods
Your task is to add the missing logic to a transformToObjects() function that should transform a list of numbers into a list of JavaScript objects.

In the newly returned array, every object must have a val key and the input array's number as a value.

For example, for the provided input [1, 2, 3] the transformToObjects([1, 2, 3]) function should return [{val: 1}, {val: 2}, {val: 3}].

Learning Objective
Derive a new array, based on existing array, where every element was transformed to an object.


HINTS:
Use the built-in map() method to transform all values in an array

map() takes a function as an argument - this function will be executed for every array item

Solution:
Inside the transformToObjects() function, you should use the map() method to transform all values of the received numberArray parameter (which will be an array of numbers).

The following code transforms the received number array as requested:

function transformToObjects(numberArray) {
   return numberArray.map(number => {
    return {val: number}
   });
}
This code uses an arrow function. Of course, you could also use a "normal function" (with the function keyword).
*/

// Destructuring
// const userName = ["Dilnawaz", "Khan"];
// const firstName = userName[0];
// const lastName = userName[1];

// const [firstName, lastName] = ["Dilnawaz", "Khan"];
// console.log(firstName, lastName);

// const user = {
//   name: "Dilnawaz",
//   age: 28,
// };
// const name = user.name
// const age = user.age

// const { name: fullName, age } = {
//   name: "Dilnawaz",
//   age: 28,
// };

// console.log(fullName, age);

// Spread Operators
// const hobbies = ["Cooking", "Reading"];
// const user = {
//   name: "Dilnawaz",
//   age: 34,
// };
// const newHobbies = ["Reading"];
// const newUser = {
//   isAdmin: true,
// };

// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const extendedUser = { ...user, ...newUser };
// console.log(extendedUser);

// control statement
// const password = "123";
// if (password === "abc") {
//   console.log("abc works");
// } else if (password === "ABC") {
//   console.log("ABC works");
// } else if (password === "123") {
//   console.log("123 works");
// } else {
//   console.log("none worked");
// }

// const hobbies = ["Cooking", "Reading"];
// for (const hobby of hobbies) {
//   console.log(hobby);
// }

// Manipulating DOM
// const list = document.querySelector('ul');
// list.remove()

// Functions as values
// function handleTimeout() {
//   console.log("Timeout");
// }

// const handleTimeout2 = () => {
//   console.log("Timeout2");
// };

// const timerId = setTimeout(() => {
//   console.log("Timeout");
// }, 0);
// const timerId = setTimeout(handleTimeout, 100);
// const timerId2 = setTimeout(handleTimeout2, 100);

// console.log(timerId, timerId2);

// function greeter(greetFn) {
//   greetFn();
// }

// greeter(() => console.log("Hi Greet"));

// Definig Functions inside functions
// function init() {
//   function greet() {
//     console.log("Hi");
//   }

//   greet();
// }

// init();

// Reference vs. Primitive value
// let userMessage = "Hello";
// userMessage = userMessage.concat("!!!");

const hobbies = ["Sports", "Cookings"];
hobbies.push("Working");
console.log(hobbies);
