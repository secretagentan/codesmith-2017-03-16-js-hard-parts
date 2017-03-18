// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// ====================
// Challenge 1
// Create a function addTwo that accepts one input and adds 2 to it.
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));
// ====================


// ====================
// Challenge 2
// Create a function addS that accepts one input and adds an "s" to it.
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));
// ====================


// ====================
// Challenge 3
// Create a function called map that takes two inputs:
// 1. an array of numbers (a list of numbers)
// 2. a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
// Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
function map(array, callback) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

console.log(map([1, 2, 3], addTwo));
// ====================


// ====================
// Challenge 4
function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
      callback(array[i]);
    }
}

// see for yourself if your forEach works!
var alphabet = '';
var letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet);   //prints 'abcd'
// ====================


//--------------------------------------------------
// Extension
//--------------------------------------------------

// ====================
//Extension 1
function mapWith(array, callback) {
  var result = [];
  forEach(array, function(item) {
    result.push(callback(item))
  })
  return result;
}
// ====================


// ====================
//Extension 2
function reduce(array, callback, initialValue) {
  var result = initialValue;
  forEach(array, function(item) {
    result = callback(result, item);
  })
  return result;
}

var nums = [4, 1, 3];
var add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0));   //-> 8
// ====================


// ====================
//Extension 3
function intersection(arrays) {
  arrays = [].slice.call(arguments);
  var result = [];
  var array = arrays[0];
//   console.log(arrays);
  for (var i = 0; i < array.length; i++) {
//              console.log(array[i]);
    for(var j = 1; j < arrays.length; j++) {
      if (arrays[j].indexOf(array[i]) > -1 && arrays[j-1].indexOf(array[i]) > -1) {
        if (result.indexOf(array[i]) === -1) {
          result.push(array[i]);
        }
      } else {
        result.splice(i,1);
      }
    }
  }
  return result;
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [15, 5]
// ====================


// ====================
//Extension 4
function union(arrays) {

}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]
// ====================
