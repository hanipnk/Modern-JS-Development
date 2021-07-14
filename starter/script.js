/*

// Importing module

// import { addToCart, tq, totalPrice as price } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

// console.log('Importing module');
// //console.log(shippingCost);

//import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// Do not mix Default and Named Exports like below( script 15)
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

// import add from './shoppingCart.js';
// add('Pizza', 2);
// add('Bread', 5);
// add('Apple', 4);

// // console.log(cart);

// import { greenApple } from './shoppingCart.js';
// console.log(greenApple);

// import { redApple, waterMelon, pa, fruitCart } from './shoppingCart.js';

// console.log(redApple, waterMelon, pa);

// import m from './shoppingCart.js';

// m('apple', 100);

import emptyCart from './shoppingCart.js';

emptyCart('apple', 5);

*/

/*
// Module Pattern

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStoct = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return { addToCart, cart, totalPrice, totalQuantity };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); //undefined

*/

/*
// CommonJS Modules

// Common JS has been used in Node.js
// Node.js is a way of running JS on a web server, outside of browser
// NPM repository still uses this common JS module because NPM was originally intended for only node.js 
// however, later NPM became the standard repository of the whole JS workld

// Export 
export.addTocart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

// Import 

const {addTocart} = require('./shoppingCart.js')

*/

// A Brief Introduction to the Command Line

//CMD
// ni - to create file
// del - to delete file
//rmdir 'name' - to delete folder
// . /'name' - current folder
// ../ to parent folder
