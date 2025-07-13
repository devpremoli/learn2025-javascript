const animal = { eats: true, walks: true };
//console.log(animal.constructor === Object);

// function Rabbit(name, owner) {
//   this.name = name;
//   this.owner = owner;
// }

// Rabbit.prototype = animal;
// animal.constructor = Rabbit;

// // Equivalent of const rab1 = new Rabbit("Rabbit1", "Jack")
// let temp = {}; // STEP 1: Create empty object

// Object.setPrototypeOf(temp, Rabbit.prototype); // STEP 2: Set prototype (temp.__proto__ = Rabbit.prototype might have been used)

// let result = Rabbit.call(temp, "Rabbit1", "Jack"); // STEP 3: Call constructor with `this = temp`

// const rab1 = typeof result === "object" && result !== null ? result : temp; // STEP 4: Return object

// console.log(rab1); // { name: 'Rabbit1', owner: 'Jack' }
// console.log(rab1.eats); // true (inherited from prototype)
// console.log(rab1.__proto__ === animal); // true
// console.log(rab1 instanceof Rabbit); // false (⚠️ we'll explain!)

function A(propA, propB) {
  this.propA = propA;
  this.propB = propB;
}
const a = new A("a", "aa");

/*
// Step 1: Create a new empty object
const obj = {};

// Step 2: Set its internal [[Prototype]] to A.prototype
Object.setPrototypeOf(obj, A.prototype); // equivalent to obj.__proto__ = A.prototype

// Step 3: Call A with `this` bound to the new object
const result = A.call(obj, "x", "y");

// Step 4: If the constructor explicitly returns an object, use it; otherwise use obj
const a = (typeof result === "object" && result !== null) ? result : obj;
*/
