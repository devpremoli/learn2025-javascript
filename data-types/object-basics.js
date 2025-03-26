let user = {
  name: "John",
  age: 30,
  "likes birds": true,
  0: "test", // same as "0": "test"
  false: "test",
};

console.log(user.name);
console.log(user["likes birds"]);
console.log(user["age"]);
console.log(user[0]);
console.log(user[false]);
//console.log(user.likes birds); // SyntaxError
//console.log(user[age]); // ReferenceError
