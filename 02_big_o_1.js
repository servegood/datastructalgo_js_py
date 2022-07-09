// Big O
//O(1) --> Constant Time
//Does matter with the input because the function is logging out only first item in the array
const boxes = [0, 1, 2, 3, 4, 5]

function logFirstBox(boxes) {
  console.log(boxes[0]) //O(1)
}

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]) //O(1)
  console.log(boxes[1]) //O(1)
}

console.log('===Running logFirstBox')
logFirstBox(boxes) // O(1)
console.log('===Running logFirstTwoBoxes')
logFirstTwoBoxes(boxes) //O(2)
