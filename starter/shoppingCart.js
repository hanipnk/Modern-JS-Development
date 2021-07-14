// Exporting module
// console.log('Exporting module');

// const shippingCost = 10;
// export const cart = [];

// export const addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart`);
// };

// const totalPrice = 237;
// const totalQuantity = 23;

// export { totalPrice, totalQuantity as tq };

// export default function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart`);
// }

// export const greenApple = 500;

// const redApple = 100;
// const waterMelon = 10;
// const pineApple = 20;

// export { redApple, waterMelon, pineApple as pa };

// export const fruitCart = [];

// export default function (fruit, quantity) {
//   fruitCart.push({ fruit, quantity });
//   console.log(`${quantity} ${fruit} is loaded in the fruit cart`);
// }

export const empryCart = [];

export default function (fruit, quantity) {
  empryCart.push({ fruit, quantity });
  console.log(`${quantity} ${fruit} is loaded to the cart`);
}
