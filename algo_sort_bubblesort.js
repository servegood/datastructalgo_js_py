const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

//Bubbling up the largest value using multiple pass throughs
//Time Complexity O (n^2) for average & worst - because it loops thru every element and keeps swapping
//till done. Space Complexity if O(1)
function bubbleSort(array) {
  const length = array.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        //Swap the numbers
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
}

bubbleSort(numbers)
console.log(numbers)
