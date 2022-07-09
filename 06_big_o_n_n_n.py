# Print All Numbers and then Print their sums of all pairs
# This has O(n) for the first print call
# Then has O(n^2) for the summing
# In this example the O(n) is non dominant and hence we drop that
# and this function is O (n^2)

from distutils.command.build_scripts import first_line_re


def printAllNumbersThenAllPairSums(numbers):
  print('these are the numbers:')
  for number in numbers:
    print(number)

  print('and these are their sums:')
  for firstNumber in numbers:
    for secondNumber in numbers:
      print(firstNumber + secondNumber)

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5])
