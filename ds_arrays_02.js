class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }
  //O(1)
  get(index) {
    return this.data[index]
  }
  //O(1)
  push(item) {
    this.data[this.length] = item
    this.length++
    return this.data
  }
  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }
  //O(n)
  deleteAtIndex(index) {
    const item = this.data[index]
    this.shiftItems(index)
    return item
  }
  //O(n)
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    console.log('inside shift for deleteAtIndex', this.data[this.length - 1])
    delete this.data[this.length - 1]
    this.length--
  }
}

const myArray = new MyArray()
myArray.push('hi')
myArray.push('you')
myArray.push('!')
console.log('***after 3 push')
console.log(myArray)
console.log('***after 1 pop')
myArray.pop()
console.log(myArray)
console.log('***after deleteAtIndex(0)')
myArray.deleteAtIndex(0)
console.log(myArray)
myArray.push('are')
myArray.push('nice')
console.log(myArray)
myArray.shiftItems(0)
console.log(myArray)
