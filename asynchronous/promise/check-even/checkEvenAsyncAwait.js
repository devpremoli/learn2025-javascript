async function checkEvenAsync() {
  const number = Math.floor(Math.random() * 100) + 1;

  if (number % 2 === 0) {
    return `The number ${number} is even!`;
  } else {
    return `The number ${number} is odd!`;
  }
}

(async () => {
  try {
    const result = await checkEvenAsync();

    console.log(console.log("Resolved:", result));
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("This runs no matter what");
  }
})();

console.log("I am logged");
