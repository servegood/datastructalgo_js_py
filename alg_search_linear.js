//Linear Search
//Best Case is O(1)
//Worse case is O(n)

var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie']

beasts.indexOf('Godzilla')

beasts.findIndex(function (item) {
  return item === 'Godzilla'
})

beasts.find(function (item) {
  return item === 'Godzilla'
})

beasts.includes('Godzilla')
