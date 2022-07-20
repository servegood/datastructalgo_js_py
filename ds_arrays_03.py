#def mergesortedarr(a,b):
#  x=a+b
#  x.sort()
#  return x

#a=[1,2,3,4]
#b=[3,7,9,12]
#qw=mergesortedarr(a,b)
#print(qw)

#In interview we must solve only like this

from array import array


def mergeSortedArrays(array1,array2):
  mergedArray=[]
  i=0
  j=0

  if len(array1)==0:
    return array2
  if len(array2)==0:
    return array1

  while i < len(array1) and j < len(array2):
    if array1[i] <= array2[j]:
      mergedArray.append(array1[i])
      i+=1
    elif array2[j] < array1[i]:
      mergedArray.append(array2[j])
      j+=1
  return mergedArray+array1[i:]+array2[j:]

a=[0, 3, 4, 31]
b=[3, 4, 6, 30]
x=mergeSortedArrays(a,b)
print(x)
