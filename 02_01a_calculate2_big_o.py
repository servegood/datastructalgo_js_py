# This example doesn't return any value back
# It is to go thru line by line and understand the 
# Big O of each line
# What is the Big O of the below function? 
# ***commmented out print - used it only for debugging purpose

def anotherFunChallenge(input):
  a = 5 # O(1)
  b = 10 # O(1)
  c = 50 # O(1)

  #O(n) - for the for loop itself
  for i in input:
    x = i + 1 # O(n)
    y = i + 2 # O(n)
    z = i + 3 # O(n)
    # print(x,y,z)

  #O(n) - for the for loop itself
  for j in input:
    p = j * 2 # O(n)
    q = j * 2 # O(n)
    # print(p,q)
  whoAmI = "the big Self" # O(1)

# BIG O (4 + 7n)
anotherFunChallenge([1,2,3]) 
