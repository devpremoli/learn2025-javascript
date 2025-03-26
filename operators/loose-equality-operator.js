/*
compares two values for equality after doing type coercion
+0 == -0
NaN != NaN
null == undefined

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
*/

console.log("comparing objects");
const obj1 = { hello: 1 };
const obj2 = { hello: 1 };
const obj3 = obj1;
console.log(obj1 == obj2);
console.log(obj1 == obj3);

console.log("comparing string");
const string1 = "hello";
const string2 = String("hello");
const string3 = new String("hello");
const string4 = new String("hello");

console.log(string1 == string2); // true -> both are string literal
console.log(string1 == string3); // true -> String object is converted to string literal
console.log(string3 == string4); // false -> references are not same
console.log(string4 == string4); // true

console.log("comparing number");
const num1 = new Number(1);
const num2 = new Number(1);
console.log(num1 == num2);
console.log(num1 == 1);
