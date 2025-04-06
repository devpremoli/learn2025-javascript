function oneDisplayer(some) {
  document.getElementById("one").innerHTML += some;
}

function twoDisplayer(some) {
  document.getElementById("two").innerHTML += some;
}

let myPromise = new Promise(function (resolve, reject) {
  let x = Math.random() > 0.5;
  if (x) {
    resolve("done");
  } else {
    reject("Error happened");
  }
});

myPromise
  .then((v) => {
    oneDisplayer(v);
    console.log(v);
  }) // Handles success
  .catch((e) => {
    console.error(e);
  }) // Handles failure
  .finally(() => console.log("Promise completed")); // Runs always
