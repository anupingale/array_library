const library = require("../array_library/library.js");
const myLibrary = require("../bin/myLibrary.js");
const {testLogs} = myLibrary;
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

testLogs("Arguments","Actual Result","Expected Result"," Message")

const testExtractOddNum = function(array,expectedResult,msg){
  let actualResult = extractOddNumbers(array);
  let args = [array];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepStrictEqual(actualResult,expectedResult);
  return;
}

testExtractOddNum([],[],"checking with empty array");
testExtractOddNum([1],[1],"checking with odd number");
testExtractOddNum([1,2],[1],"checking with odd and even");
testExtractOddNum([2,1],[1],"checking with even and odd");
testExtractOddNum([-1],[-1],"checking with negative number");
testExtractOddNum([1,2,3,4,5,6,7,8],[1,3,5,7],"checking with multiple input");

const testExtractEvenNum = function(array,expectedResult,msg){
  let actualResult = extractEvenNumbers(array);
  let args = [array];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testExtractEvenNum([],[],"extract even");
testExtractEvenNum([2],[2],"extract even");
testExtractEvenNum([1],[],"extract even");
testExtractEvenNum([-1],[],"extract even");
testExtractEvenNum([-2],[-2],"extract even");
testExtractEvenNum([ 1, 2, 3, 4, 5, 6],[ 2, 4, 6],"extract even");
testExtractEvenNum([0],[0],"extract even");

const testSumOfNums = function(array,expectedResult,msg){
  let actualResult = sumOfNumbers(array);
  let args = [array];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testSumOfNums([1],1,"sum");
testSumOfNums([],0,"sum");
testSumOfNums([1,2],3,"sum");
testSumOfNums([0,5],5,"sum");
testSumOfNums([-1,3],2,"sum");
testSumOfNums([-1,-2],-3,"sum");
testSumOfNums([-5,1],-4,"sum");

const testReverseNums = function(array,expectedResult,msg){
  let actualResult = reverseNumbers(array);
  let args = [array];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testReverseNums([],[],"reverse numbers");
testReverseNums([1],[1],"reverse numbers");
testReverseNums([1,2],[ 2, 1],"reverse numbers");
testReverseNums([ -1, -2, -3],[ -3, -2, -1],"reverse numbers");

const testSelectEvery2ndNum = function(array,expectedResult,msg){
  let actualResult = selectEverySecondNumber(array);
  let args = [array];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testSelectEvery2ndNum([],[],"select every second number");
testSelectEvery2ndNum([1],[1],"select every second number");
testSelectEvery2ndNum([1,2,3],[1,3],"select every second number");
testSelectEvery2ndNum([-1,-2,-3],[-1,-3],"select every second number");

const testRevFiboSeries = function(array,expectedResult,msg){
  let actualResult = reverseFibonacciSeries(array);
  let args = [array];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testRevFiboSeries(0,[],"reverse fibonacci series");
testRevFiboSeries(1,[0],"reverse fibonacci series");
testRevFiboSeries(4,[2,1,1,0],"reverse fibonacci series");
testRevFiboSeries(-1,[],"reverse fibonacci series");

const testGreatestNum = function(array,expectedResult,msg){
  let actualResult = greatestNumber(array);
  let args = [array];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testGreatestNum([1],1,"greatest numbers");
testGreatestNum([1,2,3],3,"greatest numbers");
testGreatestNum([5,-2,0],5,"greatest numbers");
testGreatestNum([-2,-3,-5],-2,"greatest numbers");

const testSmallestNum = function(array,expectedResult,msg){
  let actualResult = smallestNumber(array);
  let args = [array];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testSmallestNum([1],1,"smallest number");
testSmallestNum([1,2,3],1,"smallest number");
testSmallestNum([5,-2,0],-2,"smallest number");
testSmallestNum([-2,-3,-5],-5,"smallest number");

const testAverage = function(array,expectedResult,msg){
  let actualResult = calculateAverage(array);
  let args = [array];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testAverage([1],1,"calculateAverage of numbers");
testAverage([0,1,2],1,"calculateAverage of numbers");
testAverage([1,3],2,"calculateAverage of numbers");
testAverage([1,2],1.5,"calculateAverage of numbers");
testAverage([-1,-3],-2,"calculateAverage of numbers");

const testLengthOfNames = function(array,expectedResult,msg){
  let actualResult = mapLength(array);
  let args = [array];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testLengthOfNames(["A"],[1],"length of names");
testLengthOfNames(["a","b"],[1,1],"length of names");
testLengthOfNames(["Anu","Keerthy"],[3,7],"length of names");
testLengthOfNames(["anu","bhawana","reshmi"],[3,7,6],"length of numbers");

const testCountEvenNumbers = function(array,expectedResult,msg){
  let actualResult = countEvenNumbers(array);
  let args = [array];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testCountEvenNumbers([2],1,"count even numbers");
testCountEvenNumbers([2,1],1,"count even numbers");
testCountEvenNumbers([-2,1,2],2,"count even numbers");
testCountEvenNumbers([0,3,-4],2,"count even numbers");

const testCountOddNumbers = function(array,expectedResult,msg){
  let actualResult = countOddNumbers(array);
  let args = [array];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testCountOddNumbers([1],1,"count odd numbers in array");
testCountOddNumbers([1,2],1,"count odd numbers in array");
testCountOddNumbers([0,2],0,"count odd numbers in array");
testCountOddNumbers([1,2,-4,-1],2,"count odd numbers in array");

const testCountNumAboveThreshold = function(number,array,expectedResult,msg){
  let actualResult = countNumbersAboveThreshold(number,array);
  let args = [number,array];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testCountNumAboveThreshold(1,[0],0,"count number above threshold");
testCountNumAboveThreshold(1,[1],1,"count number above threshold");
testCountNumAboveThreshold(2,[1,2,3],2,"count number above threshold");
testCountNumAboveThreshold(3,[3,5,6],3,"count number above threshold");

const testCountNumBelowThreshold = function(number,array,expectedResult,msg){
  let actualResult = countNumbersBelowThreshold(number,array);
  let args = [array];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testCountNumBelowThreshold(1,[2],0,"count number below threshold");
testCountNumBelowThreshold(1,[1],0,"count number below threshold");
testCountNumBelowThreshold(2,[1,2,3],1,"count number below threshold");
testCountNumBelowThreshold(3,[3,2,1],2,"count number below threshold");

const testIndexOfNumber = function(number,array,expectedResult,msg){
  let actualResult = findIndex(number,array);
  let args = [array];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testIndexOfNumber(2,[0,1,2],2,"index of number");
testIndexOfNumber(1,[0,4,2,3,4,1],5,"index of number");
testIndexOfNumber(-2,[0,-2,5],1,"index of number");

const testIsAsending = function(array,expectedResult,msg){
  let actualResult = isAsending(array);
  let args = [array];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testIsAsending([1],true,"check asending order");
testIsAsending([1,3,1],false,"check asending order");
testIsAsending([1,2,3,4,5],true,"check asending order");
testIsAsending([1,3,4,5,1],false,"check asending order");
testIsAsending([1,2,1,3,2],false,"check asending order");

const testIsDecending = function(array,expectedResult,msg){
  let actualResult = isDecending(array);
  let args = [array];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testIsDecending([1],true,"check desending order");
testIsDecending([3,2,1,4],false,"check desending order");
testIsDecending([1,2,3,4,5],false,"check desending order");
testIsDecending([5,4,3,2,1],true,"check desending order");

const testExtractDigit = function(array,expectedResult,msg){
  let actualResult = extractDigitsIntoArray(array);
  let args = [array];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testExtractDigit(1,[1],"extract digits into array");
testExtractDigit(112,[1,1,2],"extract digits into array");
testExtractDigit(1234567,[1,2,3,4,5,6,7],"extract digits into array");

const testUniqueElements = function(array,expectedResult,msg){
  let actualResult = uniqueElement(array);
  let args = [array];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}
testUniqueElements([],[],"extract unique nums in array");
testUniqueElements([10],[10],"extract unique nums in array");
testUniqueElements([10,20,20,10],[10,20],"extract unique nums in array");
testUniqueElements([10,10,10],[10],"extract unique nums in array");

const testUnionOfNumbers = function(array1,array2,expectedResult,msg){
  let actualResult = unionOfNumbers(array1,array2);
  let args = [array1,array2];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testUnionOfNumbers([],[],[],"union of arrays");
testUnionOfNumbers([1],[2],[1,2],"union of arrays");
testUnionOfNumbers([],[2],[2],"union of arrays");
testUnionOfNumbers([2],[],[2],"union of arrays");
testUnionOfNumbers([2,3,4],[2,3,5],[2,3,4,5],"union of arrays");

const testIntersection = function(array1,array2,expectedResult,msg){
  let actualResult = intersection(array1,array2);
  let args = [array1,array2];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testIntersection([],[],[],"intersection betn 2 arrays");
testIntersection([1],[1],[1],"intersection betn 2 arrays");
testIntersection([1,2],[1],[1],"intersection betn 2 arrays");
testIntersection([1,2,3],[1,2,3],[1,2,3],"intersection betn 2 arrays");
testIntersection([1,2,1],[1,2],[1,2],"intersection betn 2 arrays");
testIntersection([1,1,1],[1,1],[1],"intersection betn 2 arrays");

const testDifference = function(array1,array2,expectedResult,msg){
  let actualResult = difference(array1,array2);
  let args = [array1,array2];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testDifference([],[],[],"difference betn arrays");
testDifference([1],[2],[1],"difference betn arrays");
testDifference([1,1],[2],[1],"difference betn arrays");
testDifference([1,1,1],[1],[],"difference betn arrays");
testDifference([1,2,3],[4,5],[1,2,3],"difference betn arrays")

const testIsSubset = function(array1,array2,expectedResult,msg){
  let actualResult = isSubset(array1,array2);
  let args = [array1,array2];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testIsSubset([10,20,30],[10],true,"check subset");
testIsSubset([10,20,30],[10,30,20],true,"check subset");
testIsSubset([10,10],[20],false,"check subset");
testIsSubset([1,2],[3,4],false,"check subset");

const testZipElements = function(array1,array2,expectedResult,msg){
  let actualResult = zipElements(array1,array2);
  let args = [array1,array2];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testZipElements([10],[1],[[10,1]],"zipping array elements");
testZipElements([1,2,3],[1,2,3],[[1,1],[2,2],[3,3]],"zipping array elements");
testZipElements([1,2],[1,2,3],[[1,1],[2,2]],"zipping array elements");
testZipElements([1,2,3],[1,2],[[1,1],[2,2]],"zipping array elements");

const testRotateElements = function(array,index,expectedResult,msg){
  let actualResult = rotateElements(array,index);
  let args = [array,index];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testRotateElements([1,2,3,4,5],0,[1,2,3,4,5],"rotate array elements");
testRotateElements([1,2,3,4,5],1,[2,3,4,5,1],"rotate array elements");
testRotateElements([1,2,3,4,5],2,[3,4,5,1,2],"rotate array elements");
testRotateElements([1,2,3,4,5],4,[5,1,2,3,4],"rotate array elements");

const testPartition= function(array,number,expectedResult,msg){
  let actualResult = getPartition(array,number);
  let args = [array,number];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
  return;
}

testPartition([1,2,3,4,5],3,[[1,2,3],[4,5]],"getPartition");
testPartition([1,2,3],1,[[1],[2,3]],"getPartition");
testPartition([-1,-2],0,[[-1,-2],[]],"getPartition");

const testGenerateNumbers = function(limit,expectedResult,msg){
  let actualResult = generateIndex(limit);
  let args = [limit];
  testLogs(args,actualResult,expectedResult,msg);
  assert.deepEqual(actualResult,expectedResult);
}

testGenerateNumbers(1,[0],"indexes");
testGenerateNumbers(5,[0,1,2,3,4],"indexes");
testGenerateNumbers(0,[],"indexes");
