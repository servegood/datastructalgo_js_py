# Big O
# O(2n) - In this function there are 2 loops so it is O (2n)
# But we usually drop the constants and say it is O(n)
def compressBoxesTwice(input):

  for x in range(len(input)): 
    print(x)
  for x in range(len(input)): 
    print(x)

compressBoxesTwice(['hello'])