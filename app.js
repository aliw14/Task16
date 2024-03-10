const delayed1 = (resolve, reject) => {
  setTimeout(() => {
    resolve("First Delay Completed");
  }, 1000);
};

const delayed2 = (resolve, reject) => {
  setTimeout(() => {
    reject("Error Happened");
  }, 2000);
};

const delayPromise1 = new Promise(delayed1);

const delayPromise2 = new Promise(delayed2);

delayPromise1.then((delayedFirst) => {
  console.log(delayedFirst);
});

delayPromise2
  .then((delayedSecond) => {
    console.log(delayedSecond);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

Promise.allSettled([delayPromise1, delayPromise2]).then((values) => {
  console.log("Values: ", values);
});
