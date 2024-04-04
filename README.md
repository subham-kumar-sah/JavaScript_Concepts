--> To create a polyfill we need the help of Prototype.
--> Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

--> Call, apply and bind are mainly used for function borrowing, call and apply return the value while bind returns the function which can be used later.
--> Bind chaning doesnot exist and once a function is bound to a context it will be bound to that only.

--> Normal function points only to it's immediate parent(object, function), while arrow function points to the parent function and also inherits the properties of parent.

--> Debounce and throttle are the two event handling techniques. They prevent the unnecessary api calls.
--> Debouncing is the method in which if we have a fixed delay betwwen two events then only the function get's fired up and if time taken is less than the delay assigned then then the call is not made.
--> Throttling is the method in which the method is fired initially and then after a certain interval it keeps firing the method after that defined interval unlike debouncing in which call is made only if the delay is met between two events.

Promises:
--> Promise objects are immutable, resolved just once.
--> Promises also gurantees that our code will be for sure executed unlike callbacks.
--> For creating our own promise we need the new keyword and the Promise constructor and pass a function in the constructor(func(resolve, reject){}), which again has two agruments which are functions, these will help us in fulfilling or rejecting a promise.
--> In case of promise chaining we need to return the data(value or a function) to maintain the exact flow.
--> promise.all() receives array of promises and returns array of data which is result of all the promises.
--> promise.all() will wait for all the promises to finish and the give the result.
--> If any of the promises fail inside the promise.all(), then it will throw error immediately and will not wait for any promises to finish.
