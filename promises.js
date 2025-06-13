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
      }, 2000);
    }
  });
  return promiseOrderId;
};

const proceedToPayment = (orderId) => {
  return new Promise((resolve, reject) => {
    if (!orderId) {
      setTimeout(() => {
        resolve("Payment Successful");
      }, 2000);
    } else {
      setTimeout(() => {
        reject(new Error("Payment Failed").message);
      }, 2000);
    }
  });
};

const showOrderSummary = (message) => {
  const orderSummary = {
    orderId: "12345",
    message: message,
    items: cart,
  };
  return new Promise((resolve, reject) => {
    if (message) {
      setTimeout(() => {
        resolve(orderSummary);
      }, 2000);
    } else {
      const err = new Error("Failed to show order summary");
      setTimeout(() => {
        reject(err);
      });
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
    return showOrderSummary(response);
  })
  .then((response) => {
    console.log("Order Summary:", response);
  })
  .catch((err) => {
    console.log(err);
  });
