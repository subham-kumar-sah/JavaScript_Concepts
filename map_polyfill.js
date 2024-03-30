var arr = [2, 5, 7, 1, 9];
let transformed = arr.map((ele, index, array) => {
  return array[index] * 2;
});

Array.prototype.myMap = function (logic) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(logic(this[i], i, this));
  }
  return arr;
};

let transformed2 = arr.myMap((ele, index, array) => {
  return array[index] * 2;
});

console.log("map result", transformed);
setTimeout(() => {
  console.log("myMap result", transformed2);
}, 2000);
