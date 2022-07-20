strings = ['a', 'b', 'c', 'd']
numbers = [1, 2, 3, 4, 5]
# Variable array is somewhere in memory and the computer knows it.
#  When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.
print(strings)

#append
strings.append('e') # O(1) but in dynamic array this becomes O(n)
print(strings)     # because it loops thru while copy and allocating to a new array

#pop
strings.pop() # O(1)
strings.pop()

print(strings) 

#unshift kinda with insert - there is not a equivalent of unshift in python, insert does the work of unshift and splice
strings.insert(0,'x') #O(n)
print(strings) 

#splice kinda with insert
strings.insert(2, 'alien') # O(n/2) which inturn is O(n)

print(strings)

#Array native python methods :-
#append()	Adds an element at the end of the list
#clear()	Removes all the elements from the list
#copy()	Returns a copy of the list
#count()	Returns the number of elements with the specified value
#extend()	Add the elements of a list (or any iterable), to the end of the current list
#index()	Returns the index of the first element with the specified value
#insert()	Adds an element at the specified position
#pop()	Removes the element at the specified position
#remove()	Removes the first item with the specified value
#reverse()	Reverses the order of the list
#ort()	Sorts the list

#List objects are implemented as arrays. 
#They are optimized for fast fixed-length operations and incur O(n) memory movement costs for pop(0) and insert(0, v) 
#operations which change both the size and position of the underlying data representation.

#For in depth information on arrays 
#https://docs.python.org/3/tutorial/datastructures.html

#to implement arrays as a stack 
#https://docs.python.org/3/library/collections.html#collections.deque
