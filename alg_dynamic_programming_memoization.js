//learn to cache
function addTo80(n) {
  return n + 80
}

console.log('plain', addTo80(5))

//Without closure - the cache is defined outside the function
let cache = {}
function memoizeAddTo80(n) {
  if (n in cache) {
    console.log('returning from cache')
    return cache[n]
  } else {
    console.log('long time')
    const answer = n + 80
    cache[n] = answer
    return answer
  }
}

console.log('===memoizeAddTo80MemoizedwithNoClosure')
console.log(1, memoizeAddTo80(6))
console.log('cache status:', cache)
console.log('-----------')
console.log(2, memoizeAddTo80(6))

//let's make that better with no global scope.
//This is closure in javascript so.
//you can pass n as parameter or not in this level for e.g. function memoizeAddTo80withClosure() {
function memoizeAddTo80withClosure(n) {
  let cache = {}
  return function (n) {
    if (n in cache) {
      console.log('returning from cache')
      return cache[n]
    } else {
      console.log('long time')
      const answer = n + 80
      cache[n] = answer
      return answer
    }
  }
}

console.log('===memoizeAddTo80withClosure')
const memoizedTemp = memoizeAddTo80withClosure()
console.log(0, memoizedTemp(6))
console.log(1, memoizedTemp(6))
console.log('-----------')
console.log('new value', memoizedTemp(5))
