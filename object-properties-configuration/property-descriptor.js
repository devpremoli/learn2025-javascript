/*
- A property descriptor is an object that defines the attributes (or flags) controlling the 
behavior of a specific property on an object.
- value, writable, enumerable, configurable
*/

// -- When a property is created directly, all flags defaults to true
let person = {
  name: "John",
};
person.age = 25;
console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.getOwnPropertyDescriptor(person, "age"));

// -- When using Object.defineProperty, all flags defaults to false if not explicitly specified
let user = {};
Object.defineProperty(user, "name", {});
console.log(user); // undefined
console.log(Object.getOwnPropertyDescriptor(user, "name"));

Object.defineProperty(user, "age", {
  value: 25,
  enumerable: true,
  writable: true,
});
Object.defineProperty(user, "address", {
  value: "Texas",
  configurable: true,
});
Object.defineProperty(user, "nationality", {
  value: "Nepali",
  writable: true,
  configurable: false,
});

// writable: true -> value can be changed
user.name = "John";
user.age = 100;
console.log(user.name);
console.log(user.age);

// enumerable: true -> property shows up when iterating over the object.
console.log(Object.keys(user));
for (prop in user) {
  console.log(prop);
}
console.log(JSON.stringify(user));

// includes non-enumerable
console.log(Object.getOwnPropertyNames(user));
console.log("name" in user); // true

// configurable: true -> property can be deleted and its descriptor can be changed.
// For non-configurable, writable can be changed from true to false but not vice-versa.
Object.defineProperty(user, "address", {
  writable: true,
});
console.log(Object.getOwnPropertyDescriptor(user, "address"));

delete user.address;
console.log(user.address);
console.log(Object.getOwnPropertyDescriptor(user, "address"));
user.address = "Texas";
console.log(Object.getOwnPropertyDescriptor(user, "address"));

Object.defineProperty(user, "nationality", {
  value: "Nepali",
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(user, "nationality"));
Object.defineProperty(user, "name", {
  writable: true,
});
