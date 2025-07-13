/*
- accessor properties are properties defined by getter and/or setter methods instead of a value.
- getter must have exactly zero parameters.
- setter must have exactly one parameter.
- There is no value or writable in descriptor for accessor properties, but instead there are get and set functions.

Syntax
let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  }
};
*/

let user = {
  firstName: "Alice",
  lastName: "Cooper",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
};

console.log(user);

console.log(user.fullName);
user.fullName = "John Doe";
console.log(user.fullName);

Object.defineProperty(user, "address", {
  get() {
    return this._address;
  },
  set(v) {
    this._address = v;
  },
});

user.address = "Texas";
console.log(user.address);
console.log(Object.getOwnPropertyDescriptors(user));

/*
https://javascript.info/property-accessors

*/
