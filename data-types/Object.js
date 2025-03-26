// returns empty object if no argument, null, or undefined is passed
// const obj1 = new Object();
// const obj2 = new Object(null);
// const obj3 = new Object(undefined);
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// when an object is passed, it returns the same object
// const original = { a: 1 };
// const strObj = new String("hello");
// const obj4 = new Object(original);
// const obj5 = new Object(strObj);
// console.log(obj4 === original);
// console.log(obj5 === strObj);

// when a primitive is passed, it returns a wrapper object for that primitive
// const obj6 = new Object(10);
// console.log(obj6);
// console.log(typeof obj6);

const newObjStringLiteral = new Object("hello");
const objStringLiteral = Object("hello");
const objString = Object(String("hello"));

console.log(newObjStringLiteral);
console.log(objStringLiteral);
console.log(objString);
console.log(typeof newObjStringLiteral);
console.log(typeof objStringLiteral);
console.log(typeof objString);
