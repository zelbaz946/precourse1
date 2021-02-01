/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
// Iterates over elements of an array invoking callback for each element. The callback should be passed the element, the current index, and the entire array.
// const callback = function(element, index, array) {
//  console.log(element +"," +index +"," +array);
// }
// forEach(['a','b','c'], callback); → prints a,0,['a','b','c'] b,1,['a','b','c'] c,2,['a','b','c']
// For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.
function forEach(array, cb) {
  // iterate over the array, applying the callback to each element
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    cb(element, i, array);
  }
}

// Creates an array of values by running each element in collection through callback
// Should we explain that map returns?
// Callback (element/value, index/key, array)
// map([1,2,3], function(element, index, array) {
//  return element * 3;
// }); -> [3,6,9]
// BONUS: use the forEach method you use to create map
function map(array, callback) {
  // newArr will cache our new elements after they've passed through the callback
  const newArr = [];
  // iterate over the array, applying the callback to each element
  for (let index = 0; index < array.length; index += 1) {
    newArr.push(callback(array[index]));
  }
  return newArr;
}

// Iterates over elements of collection, returning an Array of all elements callback returns truthy for.
// filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
function filter(collection, callback) {
  // decalre a variable that will house our truthy values
  const newArr = [];
  // iterate over the array, evaluating each element
  for (let index = 0; index < collection.length; index += 1) {
    const element = collection[index];
    const evaluation = callback(element);
    if (evaluation) {
      // add the element to the cache variable if truthy
      newArr.push(element);
    }
  }
  return newArr;
}

// Removes all elements from array that callback returns truthy for and returning a collection of elements that did not pass the truthy test.
// The returned collection should be the same type that was passed in, either an Array or Object.
// reject([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [1,3]
// reject({a:1, b:2, c:3, d:4}, function(value, key, collection) {
//  return element % 2 !== 0;
// }); → {b:2, d:4}
// Challenge: use filter
function reject(collection, callback) {
  // evaluation of collection is object or array
  const evaluation = Array.isArray(collection);
  // cache object depending on if we are dealing with array or object
  const output = evaluation ? collection.filter((elem) => !callback(elem)) : {};
  // if collection is object, iterate over the object and add falsey to new output obj
  if (!evaluation) {
    const newArr = Object.keys(collection);
    for (let index = 0; index < newArr.length; index += 1) {
      const key = newArr[index];
      const value = collection[key];
      if (!callback(value, key, collection)) {
        output[key] = value;
      }
    }
  }
  return output;
}

// Creates an array without duplicate values from the inputted array.
// The order of the array is preserved.
// uniq([1,2,1]); → [1,2]
function uniq(array) {
  // create cache variable
  const newArr = [];
  // iterate over the array, evaluating if it already has the element
  // eslint-disable-next-line no-restricted-syntax
  // eslint-disable-next-line guard-for-in
  for (const index in array) {
    const element = array[index];
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  }
  return newArr;
}

// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// DO NOT USE THE BUILT-IN INDEXOF function
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1
function indexOf(array, value) {
  // CODE HERE
  // iterate over the array. If the element is equal to the value, return the index
  // eslint-disable-next-line guard-for-in
  for (const index in array) {
    const element = array[index];
    if (element === value) {
      return Number(index);
    }
  }
  // return -1
  return -1;
}

// Returns a function that is restricted to invoking func once.
// Repeat calls to the function return the value of the first call.
function once(func) {
  // edge and error
  if (typeof func !== 'function') {
    return null;
  }
  // create variables that house the count and cache, will be used as closures
  let count = 0;
  let cache = 0;
  // return a function that evaluates if our closure count is at zero
  return function helper() {
    if (count === 0) {
      count += 1;
      cache = 1; // I think theres something broken in this example, how do I return from a variable in another file?
      // if so return the function invoked
      return func();
    }
    // else return the cache
    return cache;
  };
}

// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value.
// If a start parameter is not provided, then set the start value as the zeroth index
// reduce([1,2], function(stored,current) {
//  return stored + current;
// }); → 3
// reduce([1,2], function(stored,current) {
//  return stored + current;
// },1); → 4
function reduce(array, callback, start = 0) {
  // edge and error: 1) empty array, no callback
  if (array.length === 0 || typeof callback !== 'function') {
    return null;
  }
  // declare accumulator value, noting that start defaults to zero
  let acc = array[start];
  // iterate through the array, initialize the index at start
  for (let i = start + 1; i < array.length; i += 1) {
    const element = array[i];
    acc = callback(acc, element);
  }
  return acc;
}

// Takes an array and a function as arguments.
// Returns true if the function produces true when each array element is passed to it.
// Otherwise it returns false.
// every([2, 4, 6], function(elem) {
//   return elem % 2 == 0;
// });  -> true
// every([2, 4, 7], function(elem) {
//   return elem % 2 == 0;
// });  -> false
// BONUS: use reduce in your answer
function every(array, func) {
  // CODE HERE

}

// Flattens a nested array.
// flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]
function flatten(array) {

}

// Recursively flattens a nested array.
// flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
function flattenDeep(array) {

}
