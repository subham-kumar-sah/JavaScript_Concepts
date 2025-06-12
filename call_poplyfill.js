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

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "Is not callable");
  }
  context.fn = this;
  return context.fn(...args);
};

console.log(func.myCall(person2));
console.log(func.call(person2, "Software Engineer"));
