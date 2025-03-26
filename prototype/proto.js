/*
[[Prototype]]
- hidden internal property that every object has
- either null or a reference to another object, which is prototype of that object

__proto__
- It is an accessor property present on Object.prototype that exposes the internal [[Prototype]] of an object.
*/

// const living = { breathe: true };
// const animal = { eats: true };
// const rabbit = { jumps: true };
// animal.__proto__ = living;
// rabbit.__proto__ = animal;

// console.log(rabbit);
// console.log(rabbit.__proto__.__proto__ === living);
// console.log(living.__proto__ === Object.prototype);

// obj = { a: 1 };
// console.log(obj);
// console.log(obj.__proto__ === Object.prototype);
// console.log(obj.__proto__.__proto__ === null);

// strObj = new String("hello");
// console.log(strObj);
// console.log(strObj.__proto__ === String.prototype);
// console.log(strObj.__proto__.__proto__ === Object.prototype);

// console.log(strLiteral.__proto__);

// const objLiteral = { a: 1, b: 1 };
// console.log(objLiteral);
// // console.log(typeof objLiteral);

// const newObj = new Object();
// console.log(newObj);
// // console.log(typeof newObj);

// const obj = Object();
// console.log(obj);
// // console.log(typeof obj);

// const strLiteral = "hello";
// console.log(strLiteral);
// console.log(typeof strLiteral);

// const strNew = new String("hello");
// console.log(strNew);
// console.log(typeof strNew);
