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
import { cart } from './shoppingCart.js';
import add from './shoppingCart.js';
add('Pizza', 2);
add('Bread', 5);
add('Apple', 4);

console.log(cart);

// import { greenApple } from './shoppingCart.js';
// console.log(greenApple);

// import { redApple, waterMelon, pa, fruitCart } from './shoppingCart.js';

// console.log(redApple, waterMelon, pa);

// import m from './shoppingCart.js';

// m('apple', 100);

//import emptyCart from './shoppingCart.js';

//emptyCart('apple', 5);

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

/*
// A Brief Introduction to the Command Line

//CMD from window search
//dir - showing contents of the current folder
//cd .. - for going to up from the current folder
// cd .\13-Advanced-DOM-Bankist\ - going in to the folder (TAB)
// cd ../.. - going to 2 level up
// clear - clear the console
// ni - to create files
// del - to delete file
//rmdir 'name' - to delete folder

// . /'name' - current folder

*/

// import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'Pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

// Polifilling the new features which can not replace back to ES5 unlike con ->var, arrow function -> regular function
import 'core-js/stable'; // should print in terminal too (npm i core-js)

// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';
// if i'm really worried the bundle size, I can only polifill certain features like above (149,150)

// Polifilling async functions
import 'regenerator-runtime/runtime'; // // should print in terminal too(npm i regenerator-runtime)
