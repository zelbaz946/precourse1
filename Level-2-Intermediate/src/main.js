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
	return array.reduce(function (acc, val, index, array) {
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
	let array = Object.create(createArray.prototype);
	array.length = 0;
	return array;
};

createArray.prototype.push = function (val) {
	let currentLength = JSON.stringify(this.length);
	this[currentLength] = val;
	this.length += 1;
}

createArray.prototype.pop = function () {
	this.length -= 1;
	let currentLength = JSON.stringify(this.length);
	let output = this[currentLength];
	delete this[currentLength];

	return output;
}

createArray.prototype.unshift = function (val) {
	this.length += 1;
	let currentValue = null;
	for (let i = this.length - 1; i > 0; i -= 1) {
		currentValue = this[JSON.stringify(i - 1)];
		this[JSON.stringify(i)] = currentValue;
	}
	this["0"] = val;
}

createArray.prototype.shift = function () {
	// remove first thing from array
	// return that thing
	let keyToRemove = this.length - 1;
	let output = this["0"];
	let currentValue = null;
	// for loop to move all values 'down' a key
	for (let i = 0; i < this.length - 1; i += 1) {
		currentValue = this[JSON.stringify(i + 1)];
		this[JSON.stringify(i)] = currentValue;
	}

	delete this[keyToRemove];
	this.length -= 1;
	return output;
}


const shane = createArray();
