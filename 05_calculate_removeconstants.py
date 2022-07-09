# Big O
# O(2n) - In this function there are 2 loops so it is O (2n)
# But we usually drop the constants and say it is O(n)
def compressBoxesTwice(input):
  #use enumerate(input) if you need even the index in the foreach loop
  for x in input: 
    print(x)
  for x in input: 
    print(x)

compressBoxesTwice(['hello', 'world'])