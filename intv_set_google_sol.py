# Google Interview problem in two approaches
# ***commented out print - used only for debugging purpose

#  Naive
def hasPairWithSum(arr, sum):
  arrLen = len(arr)
  for i in range(0, arrLen):
    for j in range(arrLen):
      if (arr[i] + arr[j] == sum):
        return True
  return False

# Better
def hasPairWithSum2(arr, sum):
  mySet = set()
  arrLen = len(arr)
  for i in range(0, arrLen):
    # print(i, arr[i])
    if arr[i] in mySet:
      # print(mySet)
      return True
    # print('in hash', sum - arr[i])
    mySet.add(sum - arr[i])
  return False

hasPairWithSum2([6, 4, 3, 2, 1, 7], 9)
# print(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9))
