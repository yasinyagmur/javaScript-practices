// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'

//? Solution

function addLetters(...letters) {
  if (letters.length == 0) return "z";
  var x = 0;
  for (var i = 0; i < letters.length; i++) {
    x += letters[i].charCodeAt(0) - 96;
    if (x > 26) x = x - 26;
  }
  var y = String.fromCharCode(x + 96);
  return y;
}
