const cart = ["jeans", "shirt", "kurta"];

const validateCart = (cartItems) => {
  if (cartItems.length > 0) {
    return true;
  } else {
    return false;
  }
};

const createOrder = (cart) => {
  const promiseOrderId = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("This cart is not validated");
      reject(err);
    } else {
      const orderId = "12345";
      setTimeout(() => {
        resolve(orderId);
      }, 3000);
    }
  });
  return promiseOrderId;
};

const proceedToPayment = (orderId) => {
  return new Promise((resolve, reject) => {
    if (orderId) {
      setTimeout(() => {
        resolve("Payment Successful");
      }, 2000);
    } else {
      reject(new Error("Payment Failed").message);
    }
  });
};

createOrder(cart)
  .then((response) => {
    console.log(response);
    return proceedToPayment(response);
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
