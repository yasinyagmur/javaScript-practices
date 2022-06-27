var countBits = function (n) {
    let binary = Array.from(n.toString(2));
    console.log(binary);
    return binary.map(Number).reduce((a, b) => a + b);
  };

countBits(1234)