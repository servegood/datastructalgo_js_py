// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head
    this.length = 1
  }
  append(value) {
    const newNode = new Node(value) //example of using Node class vs direct newNode object code like in prepend newNode
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    }
    newNode.next = this.head
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
    }
    const leaderNode = this.traverseToIndex(index - 1)
    const holdingPointer = leaderNode.next
    leaderNode.next = newNode
    newNode.next = holdingPointer
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
    const leaderNode = this.traverseToIndex(index - 1)
    const removeNode = leaderNode.next
    leaderNode.next = removeNode.next
    this.length--
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
console.log(myLinkedList.printList())
myLinkedList.append(5)
console.log(myLinkedList.printList())
myLinkedList.append(16)
console.log(myLinkedList.printList())
myLinkedList.prepend(2)
console.log(myLinkedList.printList())
myLinkedList.insert(3, 99) //on the 3rd index add 99
console.log(myLinkedList.printList())
myLinkedList.remove(2)
console.log(myLinkedList.printList())
