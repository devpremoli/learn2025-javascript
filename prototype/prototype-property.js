/*
- Every function (except arrow functions) has a property called prototype.
When a function is used as a constructor (i.e. called with the new keyword), the prototype property of that function 
becomes the prototype of the objects created with it.

- The prototype property of a constructor function is initially an object with a single property named constructor, which 
points back to the constructor function itself.
- When a new object is created using the new keyword, the JavaScript engine sets the internal [[Prototype]] 
(accessible via __proto__ or Object.getPrototypeOf()) of the new object to the constructor's prototype object.
*/

// const obj = new Object();
// console.log(obj.__proto__.__proto__ === null);
// console.log(Object.prototype);

const obj = {};
console.log(obj);

// console.log(Function.prototype);

function A() {}
console.log(A.prototype);
const a = new A();

console.log(a);
console.log(a.__proto__.__proto__);
console.log();
console.log(A.prototype);

console.log("function A");
function A() {}
console.log(A.prototype);
console.log(A.prototype.__proto__);

console.log("function B");
function B() {}
console.log(B.prototype);

B.prototype.propB1 = "B1";
B.prototype.methodB1 = function () {
  return "methodA1";
};
console.log(B.prototype);

const b1 = new B();
const b2 = new B();
console.log(b1.__proto__);
console.log(b1.__proto__ === b2.__proto__);
console.log(b1.__proto__ === B.prototype);

B.prototype = { a: 1, b: 2 };
console.log(b1.__proto__ === B.prototype);
const b3 = new B();
console.log(b3.__proto__);
console.log(b3.__proto__ === B.prototype);
