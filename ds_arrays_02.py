class Array:
  #constructor
  def __init__(self):
    self.length=0
    self.data={}

  def __str__(self):
    return str(self.__dict__)

  #O(n)
  def get(self,index):
    return self.data[index]
  
  #O(1)
  def push(self,item):
    self.data[self.length]=item
    self.length+=1

  def pop(self):
    lastitem = self.data[self.length-1]
    del self.data[self.length-1]
    self.length-=1
    return lastitem

  #O(n)
  def deleteAtIndex(self,index):
    deleteditem = self.data[index]
    for i in range(index,self.length-1):
      self.data[i] = self.data[i+1]

    del self.data[self.length-1]
    self.length-=1
    return deleteditem

myArray=Array()
myArray.push('hi')
myArray.push('you')
myArray.push('!')
('***after 3 push')
print(myArray)
print('***after 1 pop')
myArray.pop()
print(myArray)
print('***after deleteAtIndex(0)')
myArray.deleteAtIndex(0)
print(myArray)
myArray.push('are')
myArray.push('nice')
print(myArray)
myArray.deleteAtIndex(0)
print(myArray)

  