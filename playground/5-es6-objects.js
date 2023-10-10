// Object property shorthand

const name = 'Andrew';
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: 'Philadephia'
};

console.log(user);

// Object destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
};

// rename destructured object, add default properties

// const {label: productLabel, stock, rating = 5} = product;

// console.log(productLabel);
// console.log(stock);
// console.log(rating);

// Destructuring via a function

const transaction = (type, {label, stock = 0} = {}) => {
  console.log(type, label, stock);
}

transaction('order', product);
