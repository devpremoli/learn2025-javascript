/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval

*/
let evalA = eval("2 + 2");
console.log(evalA);
console.log(typeof evalA);

eval("var a = 1;");
console.log(a);
eval("let b = 20; console.log(b);");
//console.log(y); //ReferenceError

console.log(eval(1 + 1)); // 2 because 1+1 is evaluated before eval()
const strObj = eval(new String("hello"));
console.log(strObj);
