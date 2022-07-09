# Log all pairs of array
# O(n^2) --> Quadratic Time - O(n*n)

BOXES = ['a', 'b', 'c', 'd', 'e']
def logAllPairsOfArray(array):
  for i in range(len(array)):
    for j in range(len(array)):
      print(array[i], array[j])

logAllPairsOfArray(BOXES)
