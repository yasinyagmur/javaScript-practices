// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

//! join() methods
// Definition and Usage
// The join() method returns an array as a string.

// The join() method does not change the original array.

// Any separator can be specified. The default is comma (,)
//! sort() methods 
// Definition and Usage
// The sort() sorts the elements of an array.

// The sort() overwrites the original array.

// The sort() sorts the elements as strings in alphabetical and ascending order.

function isSortedAndHow(array) {
  if ([...array].sort((a, b) => a - b).join("") === array.join("")) {
    return "yes, ascending";
  } else if ([...array].sort((a, b) => b - a).join("") === array.join("")) {
    return "yes, descending";
  } else {
    return "no";
  }
}
isSortedAndHow()