// string literal
const strLiteral = "hello";
console.log(strLiteral);
console.log(typeof strLiteral);
console.log(strLiteral.__proto__);
console.log(strLiteral.__proto__ === String.prototype);

// String() -> string literal
const str = String("hello");
const num = String(1);
console.log(str);
console.log(num);

// new String() -> Object
const newStr = new String("hello");
console.log(newStr);
console.log(typeof newStr);
