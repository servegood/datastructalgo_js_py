# This funChallenge has BIG O(3 + 4n)

def anotherFunction():
  print('in another function')

def funchallenge(input):
    temp = 10 #O(1)
    temp = temp +50 #O(1)

    for i in range(len(input)): #O(n)
        anotherFunction() #O(n) because every loop on n times this function call 
        tempAnother = True #O(n)
        a += 1 #O(n)
    return a #O(1)

funchallenge('hello') # BIG O (3 + 4n)
