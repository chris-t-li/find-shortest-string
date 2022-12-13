function findShortestString(arr) {
  // get the lengths of each string in the array and store in a new array in the same order
  const strLens = arr.map(el => el.length);
  // find the minimum value of the lengths
  const minLen = Math.min(...strLens);
  // find the index(s) of the minimum value
  const i = strLens.indexOf(minLen);
  return arr[i]
}

findShortestString(['abc', 'b', "ladida", "c"])

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
