async function checkEven() {
  const number = Math.floor(Math.random() * 100) + 1;

  if (number % 2 === 0) {
    return `The number ${number} is even!`;
  } else {
    return `The number ${number} is odd!`;
  }
}

checkEven()
  .then((even) => console.log("Resolved:", even))
  .catch((odd) => console.log("Rejected:", odd))
  .finally(() => console.log("This runs no matter what"));

console.log("I am logged");
