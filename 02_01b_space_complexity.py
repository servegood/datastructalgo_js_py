# Space complexity O(1)
def boooo(n):
  for i in range(0, n):
    print('booooo')

# Space complexity O(n)
def arrayOfHiNTimes(n):
  hiArray = []
  for i in range(0, n):
    hiArray.append('hi')
  print(hiArray)
  return hiArray

boooo(6)
arrayOfHiNTimes(6)
