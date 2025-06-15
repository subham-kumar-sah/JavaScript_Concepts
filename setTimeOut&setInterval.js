setTimeout(() => {
  console.log("This message is displayed after 3 seconds");
}, 3000);

const intervalId = setInterval(() => {
  console.log("This message is displayed every 2 seconds");
}, 2000);

setTimeout(() => {
  console.log(
    "This message is displayed after 5 seconds, stopping the interval"
  );
  clearInterval(intervalId);
}, 10000);
