const promise1 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    setTimeout(() => {
      resolve("Promise 1 resolved");
    }, 3000);
  } else {
    setTimeout(() => {
      reject("Promise 1 rejected");
    }, 3000);
  }
});

const promise2 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    setTimeout(() => {
      resolve("Promise 2 resolved");
    }, 1000);
  } else {
    setTimeout(() => {
      reject("Promise 2 rejected");
    }, 1000);
  }
});

const promise3 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    setTimeout(() => {
      resolve("Promise 3 resolved");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("Promise 3 rejected");
    }, 2000);
  }
});

const allPromises = Promise.all([promise1, promise2, promise3]);
const allSettledPromises = Promise.allSettled([promise1, promise2, promise3]);
const racePromises = Promise.race([promise1, promise2, promise3]);
const anyPromises = Promise.any([promise1, promise2, promise3]);

allPromises
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("One of the promises rejected:", error);
  });
allSettledPromises
  .then((results) => {
    console.log("All promises settled:", results);
  })
  .catch((error) => {
    console.error("Error in allSettledPromises:", error);
  });

racePromises
  .then((result) => {
    console.log("First promise resolved or rejected:", result);
  })
  .catch((error) => {
    console.error("Error in racePromises:", error);
  });

anyPromises
  .then((result) => {
    console.log("First promise resolved:", result);
  })
  .catch((error) => {
    console.error("All promises rejected:", error);
  });

//console.log("Waiting for all promises to resolve...", allPromises);
//console.log("Waiting for all promises to settle...", allSettledPromises);
// console.log(
//   "Waiting for the first promise to resolve or reject...",
//   racePromises
// );
//console.log("Waiting for any promise to resolve...", anyPromises);
