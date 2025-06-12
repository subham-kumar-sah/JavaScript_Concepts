let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const reducedVal = arr.reduce((acc, curr, currIndex, array) => {
  return (acc = acc + array[currIndex]);
}, 5);

Array.prototype.myReduce = function (logic, initialVal = 0) {
  let val = initialVal;
  for (let i = 0; i < this.length; i++) {
    val = logic(val, this[i], i, this);
  }
  return val;
};

const myReducedVal = arr.myReduce((acc, curr, currIndex, array) => {
  return (acc = acc + array[currIndex]);
});

console.log("reduce val", reducedVal);
setTimeout(() => {
  console.log("myReduce val", myReducedVal);
}, 2000);
