// https://www.w3schools.com/jsref/jsref_tostring_number.asp   toString() using

//Array.from() metodu bir dizi-benzeri veya gezinilebilir bir nesneden yeni bir Dizi örneği oluşturur.

//Array.from("Ahmet");

//Output
//["A", "h", "m", "e", "t"]

var countBits = function (n) {
  let binary = Array.from(n.toString(2));
  console.log(binary);
  return binary.map(Number).reduce((a, b) => a + b);
};

countBits(1234);
