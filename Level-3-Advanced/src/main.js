// Iterates over elements of an array invoking callback for each element. The callback should be passed the element, the current index, and the entire array.
// var callback = function(element, index, array) {
 // console.log(element +"," +index +"," +array);
// }
// forEach(['a','b','c'], callback); → prints a,0,['a','b','c'] b,1,['a','b','c'] c,2,['a','b','c']
// For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.
function forEach(array, callback) {
	for (let i = 0; i < array.length; i += 1) {
		callback(array[i], i, array);
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
	const output = [];
	for (let i = 0; i < array.length; i += 1) {
		output.push(callback(array[i], i, array));
	}
	return output;

}

// Iterates over elements of collection, returning an Array of all elements callback returns truthy for.
// filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
function filter(collection, callback) {
	const output = [];
	for (let i = 0; i < collection.length; i += 1) {
		if (callback(collection[i])) {
			output.push(collection[i]);
		}
	}
	return output;
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
// two paths
// one for arrays
// one for objects

if (typeof collection === "object" && Array.isArray(collection) === true) {
	// we're working with an array
	const output = [];
	for (let i = 0; i < collection.length; i += 1) {
		if (!callback(collection[i])) {
			output.push(collection[i]);
		}
	}
	return output;
} else {
	// we're working with an object
	const output = {};

	for (let prop in collection) {
		if (!callback(collection[prop])) {
			output[prop] = collection[prop];
		}
	}
	return output;
}


}

// Creates an array without duplicate values from the inputted array.
// The order of the array is preserved.
// uniq([1,2,1]); → [1,2]
function uniq(array) {
	const present = {};
	const output = [];

	for (let i = 0; i < array.length; i += 1) {
		if (!present[array[i]] === true) {
			present[array[i]] = true;
			output.push(array[i]);
		}
	}
	return output;

}

// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// DO NOT USE THE BUILT-IN INDEXOF function
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1
function indexOf(array, value) {
	for (let i = 0; i < array.length; i += 1) {
		if (array[i] === value) {
			return i
		}
	}
	return -1;

}


// Returns a function that is restricted to invoking func once.
// Repeat calls to the function return the value of the first call.
function once(func) {
  let hasRun = false;
  let result = null;
  function doThing(val) {
    if (hasRun === false) {
      hasRun = true;
      let firstResult = func(val);
      result = firstResult;
      return firstResult;
    }
    return result;
  }
  return doThing;
}

// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value.
// If a start parameter is not provided, then set the start value as the zeroth index
// reduce([1,2], function(stored,current) {
//  return stored + current;
// }); → 3
// reduce([1,2], function(stored,current) {
//  return stored + current;
// },1); → 4
function reduce(array, callback, start) {
	let acc = null;
	if (start) {
		acc = start;
	} else {
		acc = array.shift();		
	}
	for (let i = 0; i < array.length; i += 1) {
		acc = acc + callback(null, array[i]);
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
	let result = array.reduce(function(acc, cur, index, array) {
		if (acc === false || func(cur) == false) {
			acc = false;
		}
		return acc;
	}, true);

	return result;

}

// Flattens a nested array.
// flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]
function flatten(array) {
	let result = [].concat(...array);
return result;

}

// Recursively flattens a nested array.
// flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
function flattenDeep(array) {
	let result = [];
	array.forEach(function(val) {
		if (Array.isArray(val)) {
			result = result.concat(flattenDeep(val));
		} else {
			result.push(val);
		}
	});
	return result;

}
