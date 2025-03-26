/*
- new.target is a meta-property that you can use inside a constructor (or function) to detect whether it was called 
using the new keyword.
- It returns a reference to the constructor or function that new was called upon, or undefined if the function was 
not called with new.
- Within a constructor, new.target helps identify the actual constructor being called in an inheritance chain.
*/

function MyClass() {
  console.log(new.target === MyClass);
}
new MyClass();
MyClass();

class Base {
  constructor() {
    if (new.target === Base) {
      console.log("Base instantiated directly");
    } else {
      console.log(`${new.target.name} is a subclass of Base`);
    }
  }
}

class Derived extends Base {}

new Base(); // "Base instantiated directly"
new Derived(); // "Derived is a subclass of Base"

// class A {
//   constructor() {
//     console.log(new.target === A);
//   }
// }

// class B extends A {
//   constructor(v) {
//     super(v);
//     console.log(new.target === B);
//   }
// }
// new B(1);
