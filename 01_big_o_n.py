# Big O
# O(n) --> Linear Time i.e 'n' number of inputs,
# As the inputs increase the number of operations increase linearly with it
import time

nemo = ['nemo']
everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
]
large = ['nemo' for i in range(100000)]

def big_o_n(inputArray):
  startTime = time.time()
  for i in range(0, len(inputArray)):
    if inputArray[i] =='nemo':
      print('Found NEMO')
  endTime = time.time()
  totalTime = int((endTime - startTime) * 1000)
  print(f'total time took: {totalTime} milliseconds')

print('===Running Nemo')
big_o_n(nemo)
print('===Running Everyone')
big_o_n(everyone)
print('===Running Large Array')
big_o_n(large)