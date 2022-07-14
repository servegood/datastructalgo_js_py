//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i]
      }
    }
  }
  return undefined
}

function firstRecurringCharacter_d(input) {
  const mySet = new Set()
  for (let i = 0; i < input.length; i++) {
    if (mySet.has(input[i])) return input[i]
    else mySet.add(input[i])
  }
  return undefined
}

function firstRecurringCharacter2(input) {
  let map = {}
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i
    }
  }
  return undefined
}

//returns 2 because of the way it is implemented
console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]))
//returns 5
console.log(firstRecurringCharacter_d([2, 5, 5, 2, 3, 5, 1, 2, 4]))
console.log(firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4]))

//returns 2
console.log(firstRecurringCharacter_d([2, 5, 1, 2, 3, 5, 1, 2, 4]))
console.log(firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]))

//returns 1
console.log(firstRecurringCharacter_d([2, 1, 1, 2, 3, 5, 1, 2, 4]))
console.log(firstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4]))

//returns undefined
console.log(firstRecurringCharacter_d([2, 3, 4, 5]))
console.log(firstRecurringCharacter2([2, 3, 4, 5]))

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
