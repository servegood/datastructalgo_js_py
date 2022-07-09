# Problem to solve
# Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
# For Example:
# const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
# should return false.
# -----------
# const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
# should return true.

#  2 parameters - arrays - no size limit
#  return true or false

ARRAY1 = ['a', 'b', 'c', 'x']
ARRAY2 = ['z', 'y', 'a']

# ===This function has following time & space complexity
# O(a*b) - Time
# O(1) - Space Complexity
def containsCommonItem(arr1, arr2):
  for i in range(len(arr1)):
    for j in range(len(arr2)):
      if arr1[i] == arr2[j] :
        return True
  return False

# ===This function has following time & space complexity
# O(a + b) Time Complexity
# O(a) Space Complexity
def containsCommonItem2(arr1, arr2):
  # loop through first array and create object where properties === items in the array
  # can we assume always 2 params?
  map = {}
  for i in range(len(arr1)):
    if not(arr1[i] in map):
      item = arr1[i]
      map[item] = True
  # loop through second array and check if item in second array exists on created object.
  for j in range(len(arr2)):
    if arr2[j] in map:
      return True
  return False

# ===This function is more readable in python 
# using python latest functions such as "any"
def containsCommonItem3(arr1, arr2) :
  return any(item in arr2 for item in arr1)

checkFunction = ""
checkFunction = containsCommonItem(ARRAY1, ARRAY2)
print(checkFunction)
checkFunction = containsCommonItem2(ARRAY1, ARRAY2)
print(checkFunction)
checkFunction = containsCommonItem3(ARRAY1, ARRAY2)
print(checkFunction)
