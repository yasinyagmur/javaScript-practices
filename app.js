// ?Your task is to sum the differences between consecutive pairs in the array in descending order.

//* Example
//* [2, 1, 10]  -->  9
//* In descending order: [10, 2, 1]

//* Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

//! If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell ).


let arr = [8, 5, 53,12,43]
function sumOfDifferences(arr) {
  let arry = (arr.sort(function(a, b){return a - b})).reverse();
  let sum = 0;
if( arry.length > 1){
    for( let i = 0; i < arry.length-1; i++){
      sum += arry[i] - arry[i+1];
     }
     
      
}else{
  sum = 0
  }
// console.log(sum)
return sum
}
sumOfDifferences(arr);