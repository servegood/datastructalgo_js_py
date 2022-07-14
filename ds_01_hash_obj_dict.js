let user = {
  age: 54,
  name: 'Santa',
  magic: true,
  scream: function () {
    console.log('ho ho ho')
  },
}

console.log(user.age) // O(1) - instant retrieval
user.spell = 'abra kadabra' // O(1) - instant add
console.log(user)
user.scream() // O(1) - instant func call
