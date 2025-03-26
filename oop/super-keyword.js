class A {
  constructor(a) {
    this.a = a;
  }
}

class B extends A {}

class C extends A {
  constructor(a, c) {
    super(a);
    this.c = c;
  }
}

const b = new A(1);
console.log(b.a);

const c = new C(1, 3);
console.log(c.a);
console.log(c.c);

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     return `${this.name} makes a sound`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); // calls parent's class constrcutor
//     this.breed = breed;
//   }
//   speak() {
//     return super.speak() + " — Woof!";
//   }
// }
