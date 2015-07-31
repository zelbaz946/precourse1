// returns an empty array object. this object should have the following methods:
// push(val) adds val to the end of the array
// pop() removes a value from the end and returns it
// unshift(val) adds val to the beginning of the array
// shift() removes a value from the beginning and returns it
function createArray() {

}

/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Returns the sum of numbers in an array.
// ex: sumArray([1,2,3]); -> 6
// ex: sumArray([1, 2, 3, -4]); -> 2
// ex: sumArray([1, 2, 3, -4, 5]); -> 7
// ex: sumArray([4, -1, 5]); -> 8
// ex: sumArray([10,-11,11]) -> 11
function sumArray(array) {

}

// Write a function that takes an array, a number, and any value as arguments.
// The number is the minimum length we want the array to be. If the array length is
// grater than or equal to this number, simply return the array. Otherwise, add array
// elements until its length equals this number. The third argument is the value to
// be placed in the array. If none was given, add undefined.
// padArray([1, 3], 5, 81);  -> [1, 3, 81, 81, 81]
// padArray([1, 3, 17], 2, 81);  -> [1, 3, 17]
// padArray([1, 3, 17], 4);  -> [1, 3, 17, undefined]
function padArray(array, min, value) {

}

// returns true if string is a palindrome (the string is the same forward and backwards). The parameters entered may have puncutations and symbols, but they should not affect whether the string is a palindrome
// ex: palindrome("Anne, I vote more cars race Rome-to-Vienna"); -> true
function palindrome(string) {

}