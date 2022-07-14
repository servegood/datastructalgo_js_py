const strings = ['a', 'b', 'c', 'd']
const numbers = [1, 2, 3, 4, 5]
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

//push
strings.push('e') // O(1) but in dynamic array this becomes O(n)
// because it loops thru while copy and allocating to a new array

//pop
strings.pop() // O(1)
strings.pop()

//unshift
strings.unshift('x') // O(n)

//splice
strings.splice(2, 0, 'alien') // O(n/2) which inturn is O(n)

console.log(strings)
