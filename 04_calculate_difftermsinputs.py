# Big O
# O(a + b) - In this function there are 2 different input and 2 loops
# so it is directly dependent of how big each input is
def compressBoxesTwice(boxes, boxes2):

  for x in range(len(boxes)): 
    print(boxes[x])
  for x in range(len(boxes2)): 
    print(boxes2[x])

compressBoxesTwice(['hello', 'wd', 'whatsup'], ['world'])