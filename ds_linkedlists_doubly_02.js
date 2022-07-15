class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    }
    this.tail = this.head
    this.length = 1
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    }
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    }
    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
    this.length++
    return this
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value)
      return this.printList()
    }
    if (index >= this.length) {
      return this.append(value)
    }
    const newNode = {
      value: value,
      next: null,
      prev: null,
    }
    const leaderNode = this.traverseToIndex(index - 1)
    const follower = leaderNode.next
    leaderNode.next = newNode
    newNode.prev = leaderNode
    newNode.next = follower
    follower.prev = newNode
    this.length++
    return this.printList
  }
  traverseToIndex(index) {
    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }
  remove(index) {
    // Check Parameters
    const leader = this.traverseToIndex(index - 1)
    const unwantedNode = leader.next
    const follower = unwantedNode.next

    leader.next = follower
    follower.prev = leader

    this.length--
    return this
  }
  remove(index) {
    const leaderNode = this.traverseToIndex(index - 1)
    const removeNode = leaderNode.next
    const follower = removeNode.next
    leaderNode.next = follower
    follower.prev = leaderNode
    this.length--
    return this.printList
  }
  reverse() {
    if (!this.head.next) {
      return this.head
    }
    let first = this.head
    this.tail = this.head
    let second = first.next
    while (second) {
      const temp = second.next
      second.next = first
      first = second
      second = temp
    }
    this.head.next = null
    this.head = first
    return this.printList
  }

  printList() {
    const array = []
    let currentNode = this.head
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }
}

let myLinkedList = new LinkedList(10)
console.log(myLinkedList)
myLinkedList.append(5)
console.log(myLinkedList)
myLinkedList.append(16)
console.log(myLinkedList)
// console.log(myLinkedList.printList())
myLinkedList.prepend(2)
// console.log(myLinkedList)
console.log(myLinkedList.printList())
myLinkedList.insert(3, 99) //on the 3rd index add 99
console.log(myLinkedList.printList())
myLinkedList.remove(2) // remove 2nd index - i.e. value 5
console.log(myLinkedList.printList())
myLinkedList.reverse()
console.log(myLinkedList.printList())
