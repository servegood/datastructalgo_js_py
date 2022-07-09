// This funChallenge has BIG O(3 + 4n)

function anotherFunction() {
  console.log('in another function')
}

function funChallenge(input) {
  let temp = 10 //O(1)
  temp = 50 + 3 //O(1)

  //O(n) - for the for loop itself
  for (let i = 0; i < input.length; i++) {
    anotherFunction() //O(n)
    let stranger = true //O(n)
    a++ //O(n)
  }
  return a //O(1)
}

funChallenge('hello') //BIG O(3 + 4n)
