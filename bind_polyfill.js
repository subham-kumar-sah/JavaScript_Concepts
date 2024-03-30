const person1 = {
  name: "Subham Sah",
  age: 27,
  profession: "Software Engineer",
  getDetails: function () {
    let data =
      this.name +
      " is of " +
      this.age +
      " years and is " +
      this.profession +
      " by profession.";
    return data;
  },
};

const person2 = {
  name: "Niraj Pandey",
  age: 27,
};

const func = function (profession = "Engineer") {
  return (
    this.name +
    " is of " +
    this.age +
    " years and is " +
    profession +
    " by profession."
  );
};

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "Is not callable");
  }
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const newFunc = func.myBind(person2);
console.log(newFunc("Mechanical Engineer"));

console.log(func.myBind(person2)());
console.log(func.bind(person2, "Software Engineer")());
