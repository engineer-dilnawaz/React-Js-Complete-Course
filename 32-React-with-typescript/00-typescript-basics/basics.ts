// Primitives: number, string, boolean
// More complex: arrays, objects
// functions: parameters

// Primitives
let age: number = 20;
age = 12.4;

let userName: string;
userName = "Dilnawaz Khan";

let isInstructor: boolean;
isInstructor = false;

// let hobbies:null

// More complex

let hobbies: string[];

hobbies = ["sports", "coding"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Dilnawaz",
  age: 32,
};

// person = {
//   isEmployee: true,
// };

let people: {
  name: string;
  age: number;
}[];

// type inference
let course = "React - The complete guide";

// course = 123;

// Union Type

let courseId: string | number = "React - The complete guide";
courseId = 23121;

// Type Alias

type Person = {
  name: string;
  age: number;
};

// Functions & Types

function add(a: number, b: number): number {
  return a + b;
}

function printOut(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];

  return newArray;
}

const demoArray = [1, 2, 3];
const demoNames = ["abc", "xyz"];

const updatedArray = insertAtBeginning(demoArray, -1);
const updatedArray1 = insertAtBeginning(demoNames, "GHJ");

// updatedArray[0].split('')
