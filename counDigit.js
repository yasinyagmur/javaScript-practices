// Count Digits
// Suppose we have an integer d between 0 and 9, we also have two positive integers low and high as lower and upper bounds, respectively. We have to find the number of times that d occurs as a digit in all integers between low and high, including the bounds low and high.

// For example, d=2, low= 10, high = 23 then the output will be 6, as digit d = 2 occurs 6 times: 12, 20, 21, 22, 23.

// Learning Outcomes
// At the end of the this coding challenge, students will be able to;

// Analyze a problem, identify and apply programming knowledge for appropriate solution.
// Demonstrate their knowledge of algorithmic design principles by using JavaScript and Python effectively.
// Problem Statement
// Write a function that takes a 3 parameters: a digit, lower and upper bounds as integer. The function will calculate how many times the given digit occurs within the numbers including lower and upper bounds.
// Please solve the problem for 0 <= digit < 10 and 0 < low < high, otherwise function should return -1.
// If no occurrences is found in the given range, function should return 0.

// function countDigits(digit, low, high) {
//   if (0 <= digit && digit < 10 && 0 < low && low < high) {
//     let numbers = [];
//     for (let i = low; i <= high; i++) {
//       numbers.push(i);
//     }
//     console.log(numbers);

//     let wanted = numbers.join("");
    
//     let count = 0;
//     for (let j of wanted) {
//       if (digit == j) {
//         count++;
//       }
//     }
//     if (count > 0) {
//       console.log(count);
//     } else {
//       return 0;
//     }
//   } else {
//     return -1;
//   }
// }

// countDigits(1, 10, 20);

//!solution-2

function countDigits(digit, low, high) {
  let counter = 0;
  if (0 <= digit && digit < 10 && 0 < low && low < high) {
    for (let i = low; i <= high; i++) {
      i.toString()
        .split("")
        .forEach((j) => {
          if (digit == j) {
            counter++;
          }
        });
    }
    console.log(counter);
  } else {
    return -1;
  }
}

countDigits(1, 5, 12);