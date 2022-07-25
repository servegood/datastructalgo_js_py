const letters = ['a', 'd', 'z', 'e', 'r', 'b']
const numberArray = [40, 1, 5, 200]

function compare(a, b) {
  return a - b
}

console.log(letters.sort()) //easy sort
console.log(numberArray.sort()) // [1, 200, 40, 5] - didnt sort properly due to internal input being as string and character comparison
console.log(numberArray.sort(compare)) // [1, 5, 40, 200] - use custom function to get it sorted
