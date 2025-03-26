/*
- Arrays are special objects that store ordered collections of elements of any data type.
- All property keys are coerced to strings: array[2] === array["2"], array["2"] !== array["02"].
- Array elements are properties with string keys that are non-negative integers: "0", "1", "2", etc.
- Non-integer or negative keys are treated as regular object properties—not array elements. They are ignored by 
array traversal/mutation methods and do not affect the array's length.

shallow copy creates a new object or array, copying only the top-level elements.
Primitive values (numbers, strings, booleans) are copied by value.
Objects, arrays, and functions are copied by reference — not cloned.
*/

// Creating Arrays
const array1 = [1, 2, 3, "hello"]; // Array literal
const array2 = new Array(1, 2, 3); // Array constructor
const array3 = Array(1, 2, 3);
console.log(array1);
console.log(array2);
console.log(array3);
console.log(typeof array2);

console.log(array1[2] === array1["2"]);
console.log(array1["02"] === undefined);

array1["foo"] = "foo";
array1[-1] = "-1";
console.log(array1);
console.log(array1.length);
//console.log(Object.keys(array1));
//console.log(Object.getOwnPropertyNames(array1));

// const obj = { 0: 0 };
// console.log(obj[0]);

array1[6] = "new"; // outside the current bounds of the array
console.log(array1);
console.log(array1[5]);

array1.length = 3; // decreasing length deletes the element
console.log(array1);

/*
Array.from()
- creates a shallow copy
*/

const a = { a: 1 };
let b = { a: 1, b: 2 };
const c = "hello";
const arr4 = [a, b, "hello"];

const array4 = Array.from(arr4);
console.log(array4);

console.log(a === array4[0]); // object is copied by reference
console.log(array4[2] === "hello"); // primitve is copied by value

a.a = 11;
b = { a: 11, b: 12 };
console.log(array4);

const doubled = Array.from([1, 2, 3], (x) => x * 2);
console.log(doubled);

const context = {
  factor: 5,
  scale(n) {
    return n * this.factor;
  },
};

const scaled = Array.from([1, 2, 3], context.scale, context); // thisArg binds this inside scale to context
console.log(scaled);
