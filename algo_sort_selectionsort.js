const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

//Scans for the smallest value in the list and swaps it with the first in the position and loops
//thru till done
//Time Complexity O (n^2) for average & worst - because it loops thru every element and keeps swapping
//till done. Space Complexity if O(1)
function selectionSort(array) {
  const length = array.length
  for (let i = 0; i < length; i++) {
    // set current index as minimum
    let min = i
    let temp = array[i]
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        //update minimum if current is lower that what we had previously
        min = j
      }
    }
    array[i] = array[min]
    array[min] = temp
  }
  return array
}

selectionSort(numbers)
console.log(numbers)
