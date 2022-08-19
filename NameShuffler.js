// Write a function that returns a string in which firstname is swapped with last name.

// "john McClane" --> "McClane john"

//! solution
function nameShuffler(str) {
  return `${str.split(" ")[1]} ${str.split(" ")[0]}`;
}
