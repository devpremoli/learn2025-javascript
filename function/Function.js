/*
Constructor
- A special method of a class used to create and intialize an instance of Object.

Constructor function
- A regular javascript function used to create and intialize an instance of Object.
- By convention, PascalCase
- designed to be called with new keyword




new keyword is used to create an instance of Object 
A class is just a synthetic sugar over constructor function
Every object is created using a constructor

In javascript, every function is an object or instance of Function constructor.
Function is an instance of itself -> Function is function / constructor function / object
*/

// Function is instance of itself
console.log(Function.__proto__ === Function.prototype);
console.log(Function.__proto__.constructor === Function);

// Every function is an instance of Function
function A() {}
let a = new A();
console.log(A.prototype.constructor === A);
