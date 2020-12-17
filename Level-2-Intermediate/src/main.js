// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
	return array.filter((elem) => elem % 2 != 0);
}

// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
	return array.filter((elem) => elem % 2 === 0);
}

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
	return Math.max(...array);
}

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
	return string.trim();
}

// returns an empty object that has methods which give the object functionality that is found in arrays. this object should have the following methods:
// push(val) adds val to the end of the array
// pop() removes a value from the end and returns it
// unshift(val) adds val to the beginning of the array
// shift() removes a value from the beginning and returns it
// the goal of this problem is to reverse engineer what array methods are actually doing and return an object that has those methods
function createArray() {
	const arr = [];
	return {
		push(val) {
			arr[arr.length] = val;
			return arr.length;
		},
		pop() {
			const last = arr[arr.length - 1];
			arr.splice(-1, 1);
			return last;
		},
		unshift(val) {
			arr.splice(0, 0, val);
			return val;
		},
		shift() {
			const first = arr[0];
			arr.splice(0, 1);
			return first;
		},
	};
}

function chicken(input) {
	return 3;
}

function chicken(input) {
	return 3;
}

