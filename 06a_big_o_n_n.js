//Log all pairs of array
//O(n^2) --> Quadratic Time - O(n*n)
const boxes = ['a', 'b', 'c', 'd', 'e']
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}

logAllPairsOfArray(boxes)
