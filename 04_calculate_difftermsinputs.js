// Big O
//O(a + b) - In this function there are 2 different input and 2 loops
//so it is directly dependent of how big each input is
function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(function (element) {
    console.log(element)
  })

  boxes2.forEach(function (element) {
    console.log(element)
  })
}

compressBoxesTwice(['hello', 'wd', 'whatsup'], ['world'])
