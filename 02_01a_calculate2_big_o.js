/* This example doesn't return any value back
It is to go thru line by line and understand the 
Big O of each line
What is the Big O of the below function? 
***commmented out console.log - used it only for debugging purpose

*/
function anotherFunChallenge(input) {
  console.log('in here')
  let a = 5 //O(1)
  let b = 10 //O(1)
  let c = 50 //O(1)

  //O(n) - for the for loop itself
  for (let i = 0; i < input.length; i++) {
    let x = i + 1 //O(n)
    let y = i + 2 //O(n)
    let z = i + 3 //O(n)
    // console.log(x, y, z)
  }

  //O(n) - for the for loop itself
  for (let j = 0; j < input.length; j++) {
    let p = j * 2 //O(n)
    let q = j * 2 //O(n)
    // console.log(p, q)
  }
  let whoAmI = "I don't know" //O(1)
}

//BIG O(4 + 7n)
anotherFunChallenge([1, 2, 3])
