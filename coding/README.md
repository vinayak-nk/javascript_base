# Array methods
-----------------
# Accessing Elements I
----------------------
  1. concat => a1.concat(a2) Return new array by joining arrays a1 and a2 together
  2. join => a1.join(separator) Join all elements of array a1 into a string separated by separator arg
  3. slice => a1.slice(start, end)Extract a section from start to end of array a1 and return a new array
  4. indexOf => a1.indexOf(obj)Return first index of obj within array a1
  5. lastIndexOf => a1.lastIndexOf(obj)Return last index of obj within array a1

# Iterating
  1. forEach => It does not return anything. loop over array items.
  2. every => checks for everyitem if meets condition
  3. some => return true if condition met else returns false
  4. filter=> filter based on condition and return new array.
  5. map => creates new array. returns array. Used to modify array.
  6. find => find if something is present
  7. include => check if array has item or not
  8. sort
  9. of => Create array from every args passed into it
  10. reduce => Apply a function fn against an accumulator and each value (from left to right) of the array as to reduce it to a single value
  11. reduceRight => Apply a function fn against an accumulator and each value (from right to left) of the array as to reduce it to a single value
--------------------------------------------------------------------------------------
# sets
------------------
1. Values must be unique.
2. Can contain different data types.
3. Dynamic sized.
4. Do not maintain insertion order
5. Iterables

  sets vs arrays
  -------------------
  1. Unique - duplicate
  2. No insertion order -- Insertion order maintained
  3. Set - search and delete faster

# map
-------------------
1. Ordered collection of key-value pair. any data type.
2. iterables.

map vs objects
------------------
1. ordered vs unordered
2. keys: any type vs string or symbol
3. Iterables: Yes vs No
4. functions: No vs yes


Stack
-----------
LIFO
push and pop
use: trace; eg: browser history, undo operation, call stack

Queue
------------
Orderly execution
printer
cpu
