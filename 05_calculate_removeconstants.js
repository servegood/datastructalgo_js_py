// Big O
//O(2n) - In this function there are 2 loops so it is O (2n)
//But we usually drop the constants and say it is O(n)
function compressBoxesTwice(boxes) {
  boxes.forEach(function (boxes) {
    console.log(boxes)
  })

  boxes.forEach(function (boxes) {
    console.log(boxes)
  })
}

compressBoxesTwice(['hello'])
