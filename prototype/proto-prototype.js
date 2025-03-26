// Constructor.prototype === obj.__proto__ // obj = new Constructor()
// Object.prototype.__proto__ === null
// Constructor.prototype.constructor === Constructor

const obj = { a: 1 };
const str = new String("hello");
console.log(Object.prototype === obj.__proto__);
console.log(String.prototype === str.__proto__);
console.log(str.__proto__.__proto__ === Object.prototype);
console.log(str.__proto__.__proto__.__proto__ === null);

console.log(Object.prototype.__proto__);

console.log(Object.prototype.constructor === Object);
console.log(String.prototype.constructor === String);

function MyConstructor() {}

console.log(MyConstructor.prototype);
console.log(MyConstructor.prototype.constructor === MyConstructor);
console.log(MyConstructor.prototype.__proto__ === Object.prototype);

const myConstructor = new MyConstructor();
console.log(myConstructor.__proto__);
