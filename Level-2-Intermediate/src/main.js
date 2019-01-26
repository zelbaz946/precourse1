// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
// lets use filter!
	return array.filter(value => value % 2 === 1);
}


// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
	return array.filter(value => value % 2 === 0);
}


// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
// lets use reduce!
	return array.reduce(function(acc, val, index, array) {
		if (val > acc) {
			acc = val;
		}
		return acc;
	});

}

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
	return string.trim();

}

// returns an empty array object. this object should have the following methods:
// push(val) adds val to the end of the array
// pop() removes a value from the end and returns it
// unshift(val) adds val to the beginning of the array
// shift() removes a value from the beginning and returns it
// the goal of this problem is to reverse engineer what array methods are actually doing and return an object that has those methods
function createArray() {
  this.arr = [];
  this.index = 0;
};

createArray.prototype.push = function( value ) {
  this.arr[ this.index++ ] = value;
  return this;
};

// lets alter this array
// lets make a new array with all the values from the previous array
// and stop just short of the final item

createArray.prototype.pop = function( value ) {
  this.arr[this.arr.length] = null;
	return this;
}
