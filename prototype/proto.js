/*
[[Prototype]]
- hidden internal property that every object has
- either null or a reference to another object, which is prototype of that object

__proto__
- It is an accessor property present on Object.prototype that exposes the internal [[Prototype]] of an object.
- obj.__proto__.__proto__ === null
*/

let a = {};
console.log(a);

function A() {}
a = new A();
console.log(a);
