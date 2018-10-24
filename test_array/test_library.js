const library = require("../array_library/library.js");
const myLibrary = require("../bin/myLibrary.js");
const {logTest} = myLibrary;
const {generateIndex, 
  getPartition, 
  rotateElements, 
  zipElements, 
  isSubset, 
  difference, 
  intersection, 
  unionOfNumbers, 
  uniqueElement, 
  extractDigitsIntoArray, 
  isDecending, 
  isAsending, 
  findIndex, 
  countNumbersBelowThreshold, 
  countNumbersAboveThreshold, 
  countEvenNumbers, 
  countOddNumbers, 
  mapLength, 
  calculateAverage, 
  extractOddNumbers, 
  greatestNumber, 
  extractEvenNumbers, 
  sumOfNumbers, 
  reverseNumbers, 
  smallestNumber, 
  selectEverySecondNumber, 
  reverseFibonacciSeries, 
  checkGreater} = library;
const assert = require("assert");

logTest("Arguments","Actual ","Expected "," Message")

const testExtractOddNum = function(array,expected,msg){
  let actual = extractOddNumbers(array);
  let args = [array];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testExtractOddNum([],[],"checking with empty array");
testExtractOddNum([1],[1],"checking with odd number");
testExtractOddNum([1,2],[1],"checking with odd and even");
testExtractOddNum([2,1],[1],"checking with even and odd");
testExtractOddNum([-1],[-1],"checking with negative number");
testExtractOddNum([1,2,3,4,5,6,7,8],[1,3,5,7],"checking with multiple input");

const testExtractEvenNum = function(array,expected,msg){
  let actual = extractEvenNumbers(array);
  let args = [array];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testExtractEvenNum([1],[],"checking with one odd number");
testExtractEvenNum([-1],[],"checking with negative odd");
testExtractEvenNum([-2],[-2],"checking with negative even");
testExtractEvenNum([],[],"checking with empty array");
testExtractEvenNum([2],[2],"checking with one even number");
testExtractEvenNum([2,1],[2],"checking with even and odd");
testExtractEvenNum([1,2],[2],"checking with odd and even");
testExtractEvenNum([ 1, 2, 3, 4, 5, 6],[ 2, 4, 6],"checking with multiple input");

const testSumOfNums = function(array,expected,msg){
  let actual = sumOfNumbers(array);
  let args = [array];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testSumOfNums([],0,"add with nothing");
testSumOfNums([1],1,"add with one number");
testSumOfNums([1,2],3,"add two numbers");
testSumOfNums([0,5],5,"added with zero");
testSumOfNums([-1,3],2,"add positive and negative num");
testSumOfNums([-1,-2],-3,"add negative number");
testSumOfNums([1,-5],-4,"add positive and negative num");

const testReverseNum = function(array,expected,msg){
  let actual = reverseNumbers(array);
  let args = [array];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testReverseNum([],[],"reverse empty array");
testReverseNum([1],[1],"reverse single number");
testReverseNum([1,2],[2,1],"reverse two numbers");
testReverseNum([-1,-2,-3],[-3,-2,-1],"reverse negative numbers");

const testSelectEvery2ndNum = function(array,expected,msg){
  let actual = selectEverySecondNumber(array);
  let args = [array];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testSelectEvery2ndNum([],[],"select every second number");
testSelectEvery2ndNum([1],[1],"select every second number");
testSelectEvery2ndNum([1,2,3],[1,3],"select every second number");
testSelectEvery2ndNum([-1,-2,-3],[-1,-3],"select every second number");

const testRevFiboSeries = function(array,expected,msg){
  let actual = reverseFibonacciSeries(array);
  let args = [array];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testRevFiboSeries(0,[],"reverse fibonacci series");
testRevFiboSeries(1,[0],"reverse fibonacci series");
testRevFiboSeries(4,[2,1,1,0],"reverse fibonacci series");
testRevFiboSeries(-1,[],"reverse fibonacci series");

const testGreatestNum = function(array,expected,msg){
  let actual = greatestNumber(array);
  let args = [array];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testGreatestNum([1],1,"greatest numbers");
testGreatestNum([1,3],3,"greatest numbers");
testGreatestNum([5,-2,0],5,"greatest numbers");
testGreatestNum([-2,-3,-5],-2,"greatest numbers");

const testSmallestNum = function(array,expected,msg){
  let actual = smallestNumber(array);
  let args = [array];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testSmallestNum([1],1,"smallest number");
testSmallestNum([1,2,3],1,"smallest number");
testSmallestNum([5,-2,0],-2,"smallest number");
testSmallestNum([-2,-3,-5],-5,"smallest number");

const testAverage = function(array,expected,msg){
  let actual = calculateAverage(array);
  let args = [array];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testAverage([1],1,"calculateAverage of numbers");
testAverage([0,1,2],1,"calculateAverage of numbers");
testAverage([1,3],2,"calculateAverage of numbers");
testAverage([1,2],1.5,"calculateAverage of numbers");
testAverage([-1,-3],-2,"calculateAverage of numbers");

const testLengthOfNames = function(array,expected,msg){
  let actual = mapLength(array);
  let args = [array];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testLengthOfNames(["A"],[1],"length of names");
testLengthOfNames(["a","b"],[1,1],"length of names");
testLengthOfNames(["Anu","Keerthy"],[3,7],"length of names");
testLengthOfNames(["anu","bhawana","reshmi"],[3,7,6],"length of numbers");

const testCountEvenNumbers = function(array,expected,msg){
  let actual = countEvenNumbers(array);
  let args = [array];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testCountEvenNumbers([2],1,"count even numbers");
testCountEvenNumbers([2,1],1,"count even numbers");
testCountEvenNumbers([-2,1,2],2,"count even numbers");
testCountEvenNumbers([0,3,-4],2,"count even numbers");

const testCountOddNumbers = function(array,expected,msg){
  let actual = countOddNumbers(array);
  let args = [array];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testCountOddNumbers([1],1,"count odd numbers in array");
testCountOddNumbers([1,2],1,"count odd numbers in array");
testCountOddNumbers([0,2],0,"count odd numbers in array");
testCountOddNumbers([1,2,-4,-1],2,"count odd numbers in array");

const testCountNumAboveThreshold = function(number,array,expected,msg){
  let actual = countNumbersAboveThreshold(number,array);
  let args = [number,array];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testCountNumAboveThreshold(1,[0],0,"count number above threshold");
testCountNumAboveThreshold(1,[1],1,"count number above threshold");
testCountNumAboveThreshold(2,[1,2,3],2,"count number above threshold");
testCountNumAboveThreshold(3,[3,5,6],3,"count number above threshold");

const testCountNumBelowThreshold = function(number,array,expected,msg){
  let actual = countNumbersBelowThreshold(number,array);
  let args = [array];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testCountNumBelowThreshold(1,[2],0,"count number below threshold");
testCountNumBelowThreshold(1,[1],0,"count number below threshold");
testCountNumBelowThreshold(2,[1,2,3],1,"count number below threshold");
testCountNumBelowThreshold(3,[3,2,1],2,"count number below threshold");

const testIndexOfNumber = function(number,array,expected,msg){
  let actual = findIndex(number,array);
  let args = [array];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testIndexOfNumber(2,[0,1,2],2,"index of number");
testIndexOfNumber(1,[0,4,2,3,4,1],5,"index of number");
testIndexOfNumber(-2,[0,-2,5],1,"index of number");

const testIsAsending = function(array,expected,msg){
  let actual = isAsending(array);
  let args = [array];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testIsAsending([1],true,"check asending order");
testIsAsending([1,3,1],false,"check asending order");
testIsAsending([1,2,3,4,5],true,"check asending order");
testIsAsending([1,3,4,5,1],false,"check asending order");
testIsAsending([1,2,1,3,2],false,"check asending order");

const testIsDecending = function(array,expected,msg){
  let actual = isDecending(array);
  let args = [array];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testIsDecending([1],true,"check desending order");
testIsDecending([3,2,1,4],false,"check desending order");
testIsDecending([1,2,3,4,5],false,"check desending order");
testIsDecending([5,4,3,2,1],true,"check desending order");

const testExtractDigit = function(array,expected,msg){
  let actual = extractDigitsIntoArray(array);
  let args = [array];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testExtractDigit(1,[1],"extract digits into array");
testExtractDigit(112,[1,1,2],"extract digits into array");
testExtractDigit(1234567,[1,2,3,4,5,6,7],"extract digits into array");

const testUniqueElements = function(array,expected,msg){
  let actual = uniqueElement(array);
  let args = [array];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}
testUniqueElements([],[],"extract unique nums in array");
testUniqueElements([10],[10],"extract unique nums in array");
testUniqueElements([10,20,20,10],[10,20],"extract unique nums in array");
testUniqueElements([10,10,10],[10],"extract unique nums in array");

const testUnionOfNumbers = function(array1,array2,expected,msg){
  let actual = unionOfNumbers(array1,array2);
  let args = [array1,array2];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testUnionOfNumbers([],[],[],"union of arrays");
testUnionOfNumbers([1],[2],[1,2],"union of arrays");
testUnionOfNumbers([],[2],[2],"union of arrays");
testUnionOfNumbers([2],[],[2],"union of arrays");
testUnionOfNumbers([2,3,4],[2,3,5],[2,3,4,5],"union of arrays");

const testIntersection = function(array1,array2,expected,msg){
  let actual = intersection(array1,array2);
  let args = [array1,array2];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testIntersection([],[],[],"intersection betn 2 arrays");
testIntersection([1],[1],[1],"intersection betn 2 arrays");
testIntersection([1,2],[1],[1],"intersection betn 2 arrays");
testIntersection([1,2,3],[1,2,3],[1,2,3],"intersection betn 2 arrays");
testIntersection([1,2,1],[1,2],[1,2],"intersection betn 2 arrays");
testIntersection([1,1,1],[1,1],[1],"intersection betn 2 arrays");

const testDifference = function(array1,array2,expected,msg){
  let actual = difference(array1,array2);
  let args = [array1,array2];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testDifference([],[],[],"difference betn arrays");
testDifference([1],[2],[1],"difference betn arrays");
testDifference([1,1],[2],[1],"difference betn arrays");
testDifference([1,1,1],[1],[],"difference betn arrays");
testDifference([1,2,3],[4,5],[1,2,3],"difference betn arrays")

const testIsSubset = function(array1,array2,expected,msg){
  let actual = isSubset(array1,array2);
  let args = [array1,array2];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testIsSubset([10,20,30],[10],true,"check subset");
testIsSubset([10,20,30],[10,30,20],true,"check subset");
testIsSubset([10,10],[20],false,"check subset");
testIsSubset([1,2],[3,4],false,"check subset");

const testZipElements = function(array1,array2,expected,msg){
  let actual = zipElements(array1,array2);
  let args = [array1,array2];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testZipElements([10],[1],[[10,1]],"zipping array elements");
testZipElements([1,2,3],[1,2,3],[[1,1],[2,2],[3,3]],"zipping array elements");
testZipElements([1,2],[1,2,3],[[1,1],[2,2]],"zipping array elements");
testZipElements([1,2,3],[1,2],[[1,1],[2,2]],"zipping array elements");

const testRotateElements = function(array,index,expected,msg){
  let actual = rotateElements(array,index);
  let args = [array,index];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testRotateElements([1,2,3,4,5],0,[1,2,3,4,5],"rotate array elements");
testRotateElements([1,2,3,4,5],1,[2,3,4,5,1],"rotate array elements");
testRotateElements([1,2,3,4,5],2,[3,4,5,1,2],"rotate array elements");
testRotateElements([1,2,3,4,5],4,[5,1,2,3,4],"rotate array elements");

const testPartition= function(array,number,expected,msg){
  let actual = getPartition(array,number);
  let args = [array,number];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
  return;
}

testPartition([1,2,3,4,5],3,[[1,2,3],[4,5]],"getPartition");
testPartition([1,2,3],1,[[1],[2,3]],"getPartition");
testPartition([-1,-2],0,[[-1,-2],[]],"getPartition");

const testGenerateNumbers = function(limit,expected,msg){
  let actual = generateIndex(limit);
  let args = [limit];
  logTest(args,actual,expected,msg);
  assert.deepStrictEqual(actual,expected);
}

testGenerateNumbers(1,[0],"indexes");
testGenerateNumbers(5,[0,1,2,3,4],"indexes");
testGenerateNumbers(0,[],"indexes");
