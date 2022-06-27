// https://www.w3schools.com/jsref/jsref_tostring_number.asp   toString() using

//Array.from() metodu bir dizi-benzeri veya gezinilebilir bir nesneden yeni bir Dizi örneği oluşturur.

//Array.from("Ahmet");

//Output
//["A", "h", "m", "e", "t"]
//! Soltion 1
// var countBits = function (n) {
//   let binary = Array.from(n.toString(2));
//   console.log(binary);
//   return binary.map(Number).reduce((a, b) => a + b);
// };

// countBits(1234);
//! Soltion 2
var countBits = function (n) {
return n.toString(2).split('').filter((x)=>x==1).length

};