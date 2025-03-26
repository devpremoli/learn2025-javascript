/*
Primitve are immutable

number
bigint
string
boolean
null
undefined
symbol

number
- represents numeric values, including integers and floating-point numbers.
- special numeric values: Infinity, -Infinity, NaN

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
*/

let num1 = 1;
let num2 = 1.2345;
console.log(typeof num1);
console.log(num1);
console.log(num2);

console.log(NaN ** 0); // 1

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER); // -253 + 1
console.log(Number.MAX_SAFE_INTEGER); //

//
let bigInt1 = 1234567890123456789012345678901234567890n;
console.log(typeof "hello");
