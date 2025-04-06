async function checkEvenAsyncPromiseAwait() {
  return new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 100) + 1;

    if (number % 2 === 0) {
      return resolve(`The number ${number} is even!`);
    } else {
      return reject(`The number ${number} is odd!`);
    }
  });
}

(async () => {
  try {
    const even = await checkEvenAsyncPromiseAwait();

    console.log("Resolved:", even);
  } catch (odd) {
    console.log("Rejected:", odd);
  } finally {
    console.log("This runs no matter what");
  }
})();

console.log("I am logged");
