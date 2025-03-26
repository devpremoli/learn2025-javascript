/*
- When you use new with a function, JavaScript treats that function as a constructor

*/

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.getCarInfo = function () {
    return `${this.year} ${this.make} ${this.model}`;
  };
}

let car1 = new Car("Toyota", "Camry", 2020);
console.log(car1.getCarInfo());

// equivalent of new Car(...)
let car2 = {}; // 1. Create empty object
car2.__proto__ = Car.prototype; // 2. Link prototype chain
Car.call(car2, "Ford", "Focus", 2022); // 3. Call constructor with car3 as `this`

console.log(car2.getCarInfo());
