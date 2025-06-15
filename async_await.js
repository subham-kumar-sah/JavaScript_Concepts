const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved after 3 seconds");
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved after 6 seconds");
  }, 6000);
});

async function asyncFunction() {
  try {
    const result = await promise;
    console.log("Async function executed");
    console.log(result);

    const result2 = await promise2;
    console.log("Async function executed");
    console.log(result2);
  } catch (error) {
    console.error("Error:", error);
  }
}
asyncFunction();

// Real World Example
try {
  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/subham-kumar-sah");
    const jsonData = await data.json();
    setTimeout(() => {
      console.log(jsonData);
    }, 5000);
  };
  fetchData();
} catch (error) {
  console.error("Error fetching data:", error);
}

// function promiseFunction() {
//   promise
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
//   console.log("Promise function executed");
// }
// promiseFunction();
