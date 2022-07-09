// Big O
//O(n) --> Linear Time i.e 'n' number of inputs,
//As the inputs increase the number of operations increase linearly with it
const nemo = ['nemo']
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
]
const large = new Array(100000).fill('nemo')

function big_o_n(inputArray) {
  let startTime = performance.now()
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === 'nemo') {
      console.log('Found NEMO')
    }
  }
  let endTime = performance.now()
  console.log(`total time took: ${endTime - startTime} milliseconds`)
}

console.log('===Running Nemo')
big_o_n(nemo)
console.log('===Running Everyone')
big_o_n(everyone)
console.log('===Running Large Array')

//O(n) --> Linear Time i.e 'n' number of inputs,
//As the inputs increase the number of operations increase linearly with it
big_o_n(large)
