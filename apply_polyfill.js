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

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "Is not callable");
  }
  if (!Array.isArray(args)) {
    throw new Error(args + "Is not entered in Array format");
  }
  context.fn = this;
  return context.fn(...args);
};

console.log(func.myApply(person2));
console.log(func.apply(person2, ["Software Engineer"]));
