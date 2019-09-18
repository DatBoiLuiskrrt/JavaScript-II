// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/
// const add = (num1, num2) =>{
//   return num1 + num2;
function getLength(arr, cb) {
  return cb(arr);
  // getLength passes the length of the array into the callback.
}
const long = (arr)=> {
  return items.length;
}
console.log(getLength(items, long));
// getLength(items, (length) => {
//   console.log(length);
// })


// console.log(getLength(calls, cb));
function last(arr, cb) {
  return cb(arr)
  // last passes the last item of the array into the callback.
}
const lastItem = (arr )=>{
  return items.pop();
}
console.log(last(items, lastItem));

function sumNums(x, y, cb) {
  return cb(x, y, cb)
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}
const multi = (x, y)=>{
  return x + y;
}
console.log(sumNums(5, 4, multi));


function multiplyNums(x, y, cb) {
  return cb(x, y)
  // multiplyNums multiplies two numbers and passes the result to the callback.
}
const mul = (x, y )=>{
  return x * y;
}
console.log(multiplyNums(4, 4, mul));

function contains(item, list, cb) {
  return cb(item, list)
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}
const checking = ( item, list) =>{
  // fruits.includes("Banana", 3);
  if (item.includes('Pencil', 'Notebook', 'yo-yo', 'Gum' )){
    return true;
  }else{
    return false;
  }
};
console.log(contains('Pencl', 'otebook', checking));
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
