# Big O
# O(1) --> Constant Time
# Does matter with the input because the function is logging out only first item in the array

boxes = [0, 1, 2, 3, 4, 5]

def logFirstBox(boxes):
  print(boxes[0]) #O(1)

def logFirstTwoBoxes(boxes):
  print(boxes[0]) #O(1)
  print(boxes[1]) #O(1)

print('===Running logFirstBox')
logFirstBox(boxes) #O(1)
print('===Running logFirstTwoBoxes')
logFirstTwoBoxes(boxes) #O(2)
