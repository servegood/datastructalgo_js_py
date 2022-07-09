//Print All Numbers and then Print their sums of all pairs
//This has O(n) for the first print call
//Then has O(n^2) for the summing
//In this example the O(n) is non dominant and hence we drop that
//and this function is O (n^2)
function printAllNumbersThenAllPairSums(numbers) {
  console.log('these are the numbers:')
  numbers.forEach(function (number) {
    console.log(number)
  })

  console.log('and these are their sums:')
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber)
    })
  })
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5])
