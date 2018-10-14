const library = require("/Users/pannapur/Projects/assignments/javascript_assignment/array_practice/array_library/extractOddNumbers.js");
const unionOfNumbers = library.unionOfNumbers;
const uniqueElement = library.uniqueElement;
const extractDigitsIntoArray = library.extractDigitsIntoArray;
const isDecending = library.isDecending;
const isAsending = library.isAsending;
const indexOfNumber = library.indexOfNumber;
const countNumbersBelowThreshold = library.countNumbersBelowThreshold;
const countNumbersAboveThreshold = library.countNumbersAboveThreshold;
const countEvenNumbers = library.countEvenNumbers;
const countOddNumbers = library.countOddNumbers;
const lengthOfNames = library.lengthOfNames;
const average = library.average;
const extractOddNumbers = library.extractOddNumbers;
const greatestNumber = library.greatestNumber;
const extractEvenNumbers = library.extractEvenNumbers;
const sumOfNumbers = library.sumOfNumbers;
const reverseNumbers = library.reverseNumbers;
const smallestNumber = library.smallestNumber;
const selectEverySecondNumber = library.selectEverySecondNumber;
const reverseFibonacciSeries = library.reverseFibonacciSeries;
const assert = require("assert");

// test cases for odd Numbers in array
assert.deepStrictEqual(extractOddNumbers([]),[]);
assert.deepStrictEqual(extractOddNumbers([1]),[1]);
assert.deepStrictEqual(extractOddNumbers([ 1, 2 ]),[1]);
assert.deepStrictEqual(extractOddNumbers([ 1, 2, 3, 4, 5, 6, 7, 8 ]),[ 1, 3, 5, 7 ]);
assert.deepStrictEqual(extractOddNumbers([1]),[1]);
assert.deepStrictEqual(extractOddNumbers([0]),[]);
assert.deepStrictEqual(extractOddNumbers([-1]),[-1]);

// test cases for even numbers in array
assert.deepStrictEqual(extractEvenNumbers([]),[]);
assert.deepStrictEqual(extractEvenNumbers([2]),[2]);
assert.deepStrictEqual(extractEvenNumbers([1]),[]);
assert.deepStrictEqual(extractEvenNumbers([-1]),[]);
assert.deepStrictEqual(extractEvenNumbers([-2]),[-2]);
assert.deepStrictEqual(extractEvenNumbers([ 1, 2, 3, 4, 5, 6]),[ 2, 4, 6]);
assert.deepStrictEqual(extractEvenNumbers([0]),[0]);

// test cases for adding numbers in array
assert.deepStrictEqual(sumOfNumbers([1]),1);
assert.deepStrictEqual(sumOfNumbers([]),0);
assert.deepStrictEqual(sumOfNumbers([1,2]),3);
assert.deepStrictEqual(sumOfNumbers([0,5]),5);
assert.deepStrictEqual(sumOfNumbers([-1,3]),2);
assert.deepStrictEqual(sumOfNumbers([-1,-2]),-3);
assert.deepStrictEqual(sumOfNumbers([-5,1]),-4);

// test cases for adding numbers in array
assert.deepStrictEqual(reverseNumbers([]),[]);
assert.deepStrictEqual(reverseNumbers([1]),[1]);
assert.deepStrictEqual(reverseNumbers([1,2]),[ 2, 1]);
assert.deepStrictEqual(reverseNumbers([ -1, -2, -3]),[ -3, -2, -1]);

// test cases for skipping every second number in array
assert.deepStrictEqual(selectEverySecondNumber([]),[]);
assert.deepStrictEqual(selectEverySecondNumber([1]),[1]);
assert.deepStrictEqual(selectEverySecondNumber([1,2,3]),[1,3]);
assert.deepStrictEqual(selectEverySecondNumber([-1,-2,-3]),[-1,-3]);

// test cases for printing elements in fibonacci series in reverse order
assert.deepStrictEqual(reverseFibonacciSeries(0),[0])
assert.deepStrictEqual(reverseFibonacciSeries(1),[0]);
assert.deepStrictEqual(reverseFibonacciSeries(4),[2,1,1,0]);
assert.deepStrictEqual(reverseFibonacciSeries(-1),[0]);

// test cases for finding greatest number
assert.deepStrictEqual(greatestNumber([]),undefined);
assert.deepStrictEqual(greatestNumber([1]),1);
assert.deepStrictEqual(greatestNumber([1,2,3]),3);
assert.deepStrictEqual(greatestNumber([5,-2,0]),5);
assert.deepStrictEqual(greatestNumber([-2,-3,-5]),-2);

// test cases for finding smallest number
assert.deepStrictEqual(smallestNumber([]),undefined);
assert.deepStrictEqual(smallestNumber([1]),1);
assert.deepStrictEqual(smallestNumber([1,2,3]),1);
assert.deepStrictEqual(smallestNumber([5,-2,0]),-2);
assert.deepStrictEqual(smallestNumber([-2,-3,-5]),-5);

// test cases for average of array elements
assert.deepStrictEqual(average([1]),1);
assert.deepStrictEqual(average([0,1,2]),1);
assert.deepStrictEqual(average([1,3]),2);
assert.deepStrictEqual(average([1,2]),1.5);
assert.deepStrictEqual(average([-1,-3]),-2)

// test cases for checking length of names in array
assert.deepStrictEqual(lengthOfNames(["A"]),[1]);
assert.deepStrictEqual(lengthOfNames(["a","b"]),[1,1]);
assert.deepStrictEqual(lengthOfNames(["Anu","Keerthy"]),[3,7]);
assert.deepStrictEqual(lengthOfNames(["anu","bhawana","reshmi"]),[3,7,6]);

// test cases for counting even numbers in array
assert.deepStrictEqual(countEvenNumbers([2]),1);
assert.deepStrictEqual(countEvenNumbers([2,1]),1);
assert.deepStrictEqual(countEvenNumbers([-2,1,2]),2);
assert.deepStrictEqual(countEvenNumbers([0,3,-4]),2);

// test cases for counting odd numbers in array
assert.deepStrictEqual(countOddNumbers([1]),1);
assert.deepStrictEqual(countOddNumbers([1,2]),1);
assert.deepStrictEqual(countOddNumbers([0,2]),0);
assert.deepStrictEqual(countOddNumbers([1,2,-4,-1]),2);

// test cases for counting values above threshold
assert.deepStrictEqual(countNumbersAboveThreshold(1,[0]),0);
assert.deepStrictEqual(countNumbersAboveThreshold(1,[1]),0);
assert.deepStrictEqual(countNumbersAboveThreshold(2,[1,2,3]),1);
assert.deepStrictEqual(countNumbersAboveThreshold(3,[3,5,6]),2);

// test cases for counting values below threshold
assert.deepStrictEqual(countNumbersBelowThreshold(1,[2]),0);
assert.deepStrictEqual(countNumbersBelowThreshold(1,[1]),0);
assert.deepStrictEqual(countNumbersBelowThreshold(2,[1,2,3]),1);
assert.deepStrictEqual(countNumbersBelowThreshold(3,[3,2,1]),2);

// test cases for finding index of a number for its first occurance in array
assert.deepStrictEqual(indexOfNumber(9,[1,2,3]),);
assert.deepStrictEqual(indexOfNumber(2,[0,1,2]),2);
assert.deepStrictEqual(indexOfNumber(1,[0,4,2,3,4,1]),5);
assert.deepStrictEqual(indexOfNumber(-2,[0,-2,5]),1);

// test cases for verifying wether the array is in asending order or not
assert.deepStrictEqual(isAsending([1]),true);
assert.deepStrictEqual(isAsending([1,3,1]),false);
assert.deepStrictEqual(isAsending([1,2,3,4,5]),true);
assert.deepStrictEqual(isAsending([1,3,4,5,1]),false);

// test cases for verifying wether the array is in desending order or not
assert.deepStrictEqual(isDecending([1]),true);
assert.deepStrictEqual(isDecending([3,2,1,4]),false);
assert.deepStrictEqual(isDecending([1,2,3,4,5]),false);
assert.deepStrictEqual(isDecending([5,4,3,2,1]),true);

// test cases for extracting digits into array
assert.deepStrictEqual(extractDigitsIntoArray(1),[1]);
assert.deepStrictEqual(extractDigitsIntoArray(112),[1,1,2]);
assert.deepStrictEqual(extractDigitsIntoArray(1234567),[1,2,3,4,5,6,7]);

// test cases for unique elements in array
assert.deepStrictEqual(uniqueElement([]),[]);
assert.deepStrictEqual(uniqueElement([10]),[10]);
assert.deepStrictEqual(uniqueElement([10,20,20,10]),[10,20]);
assert.deepStrictEqual(uniqueElement([10,10,10]),[10]);

// test cases for union of elements in array
assert.deepStrictEqual(unionOfNumbers([],[]),[]);
assert.deepStrictEqual(unionOfNumbers([1],[2]),[1,2]);
assert.deepStrictEqual(unionOfNumbers([],[2]),[2]);
assert.deepStrictEqual(unionOfNumbers([2],[]),[2]);
assert.deepStrictEqual(unionOfNumbers([2,3,4],[2,3,5]),[2,3,4,5]);
