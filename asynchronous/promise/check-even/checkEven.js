let checkEven = new Promise((resolve, reject) => {
  let number = Math.floor(Math.random() * 100) + 1;
  if (number % 2 === 0) resolve(`The number ${number} is even!`);
  else reject(`The number ${number} is odd!`);
});

checkEven
  .then(
    (even) => console.log("Resolved:", even),
    (odd) => console.log("Rejected:", odd)
  )
  .finally(() => console.log("This runs no matter what"));

console.log("I am logged");

/*
- Although the promise is created and resolved synchronously, the .then(), .catch(), .finally() 
callbacks always run asynchronously, after the current call stack finishes.

- .then(), .catch(), .finally() are scheduled in the microtask queue, so they run after the current synchronous code completes.
*/
