let arr = [2, 5, 7, 1, 9, 8];
let transformed = arr.filter((ele, index, array) => {
  return array[index] % 2 == 0;
});

Array.prototype.myFilter = function (logic) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (logic(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

let transformed2 = arr.myFilter((ele, index, array) => {
  return array[index] % 2 == 0;
});

console.log("filter result", transformed);
setTimeout(() => {
  console.log("myFilter result", transformed2);
}, 2000);
