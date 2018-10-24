const library = require("../array_library/library.js");
const logTest = require("../bin/myLibrary.js").logTest;
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

const compareResult = function(list,actual,expected,message) {
  logTest(list,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
}

const testExtractOddNum = function(list,expected,message){
  let actual = extractOddNumbers(list);
  compareResult(list,actual,expected,message);
  return;
}

testExtractOddNum([],[],"checking with empty list");
testExtractOddNum([1],[1],"checking with odd number");
testExtractOddNum([1,2],[1],"checking with odd and even");
testExtractOddNum([2,1],[1],"checking with even and odd");
testExtractOddNum([-1],[-1],"checking with negative number");
testExtractOddNum([1,2,3,4,5,6,7,8],[1,3,5,7],"checking with multiple input");

const testExtractEvenNum = function(list,expected,message){
  let actual = extractEvenNumbers(list);
  let args = [list];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}

testExtractEvenNum([],[],"checking with empty list");
testExtractEvenNum([1],[],"checking with one odd number");
testExtractEvenNum([2],[2],"checking with one even number");
testExtractEvenNum([2,1],[2],"checking with even and odd");
testExtractEvenNum([1,2],[2],"checking with odd and even");
testExtractEvenNum([-1],[],"checking with negative odd");
testExtractEvenNum([-2],[-2],"checking with negative even");
testExtractEvenNum([ 1, 2, 3, 4, 5, 6],[ 2, 4, 6],"checking with multiple input");

const testSumOfNums = function(list,expected,message){
  let actual = sumOfNumbers(list);
  let args = [list];
  logTest(args,actual,expected,message);
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

const testReverseNum = function(list,expected,message){
  let actual = reverseNumbers(list);
  let args = [list];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}

testReverseNum([],[],"reverse empty list");
testReverseNum([1],[1],"reverse single number");
testReverseNum([1,2],[2,1],"reverse two numbers");
testReverseNum([1,-2,-3],[-3,-2,1],"reverse multiple numbers");

const testSelectEvery2ndNum = function(list,expected,message){
  let actual = selectEverySecondNumber(list);
  let args = [list];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}

testSelectEvery2ndNum([],[],"checking with empty list");
testSelectEvery2ndNum([1],[1],"checking with one number");
testSelectEvery2ndNum([1,2,3],[1,3],"checking with 3 numbers");
testSelectEvery2ndNum([1,-2],[1],"checking with 2 numbers");

const testRevFiboSeries = function(list,expected,message){
  let actual = reverseFibonacciSeries(list);
  let args = [list];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}

testRevFiboSeries(0,[],"reverse fibonacci series");
testRevFiboSeries(1,[0],"reverse fibonacci series");
testRevFiboSeries(4,[2,1,1,0],"reverse fibonacci series");
testRevFiboSeries(-1,[],"reverse fibonacci series");

const testGreatestNum = function(list,expected,message){
  let actual = greatestNumber(list);
  let args = [list];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}

testGreatestNum([1],1,"greatest numbers");
testGreatestNum([1,3],3,"greatest numbers");
testGreatestNum([5,-2,0],5,"greatest numbers");
testGreatestNum([-2,-3,-5],-2,"greatest numbers");

const testSmallestNum = function(list,expected,message){
  let actual = smallestNumber(list);
  let args = [list];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}

testSmallestNum([1],1,"smallest number");
testSmallestNum([1,2,3],1,"smallest number");
testSmallestNum([5,-2,0],-2,"smallest number");
testSmallestNum([-2,-3,-5],-5,"smallest number");

const testAverage = function(list,expected,message){
  let actual = calculateAverage(list);
  let args = [list];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}

testAverage([1],1,"calculateAverage of numbers");
testAverage([0,1,2],1,"calculateAverage of numbers");
testAverage([1,3],2,"calculateAverage of numbers");
testAverage([1,2],1.5,"calculateAverage of numbers");
testAverage([-1,-3],-2,"calculateAverage of numbers");

const testLengthOfNames = function(list,expected,message){
  let actual = mapLength(list);
  let args = [list];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}

testLengthOfNames(["A"],[1],"length of names");
testLengthOfNames(["a","b"],[1,1],"length of names");
testLengthOfNames(["Anu","Keerthy"],[3,7],"length of names");
testLengthOfNames(["anu","bhawana","reshmi"],[3,7,6],"length of numbers");

const testCountEvenNumbers = function(list,expected,message){
  let actual = countEvenNumbers(list);
  let args = [list];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}

testCountEvenNumbers([2],1,"count even numbers");
testCountEvenNumbers([2,1],1,"count even numbers");
testCountEvenNumbers([-2,1,2],2,"count even numbers");
testCountEvenNumbers([0,3,-4],2,"count even numbers");

const testCountOddNumbers = function(list,expected,message){
  let actual = countOddNumbers(list);
  let args = [list];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}

testCountOddNumbers([1],1,"count odd numbers in list");
testCountOddNumbers([1,2],1,"count odd numbers in list");
testCountOddNumbers([0,2],0,"count odd numbers in list");
testCountOddNumbers([1,2,-4,-1],2,"count odd numbers in list");

const testCountNumAboveThreshold = function(number,list,expected,message){
  let actual = countNumbersAboveThreshold(number,list);
  let args = [number,list];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}

testCountNumAboveThreshold(1,[0],0,"count number above threshold");
testCountNumAboveThreshold(1,[1],1,"count number above threshold");
testCountNumAboveThreshold(2,[1,2,3],2,"count number above threshold");
testCountNumAboveThreshold(3,[3,5,6],3,"count number above threshold");

const testCountNumBelowThreshold = function(number,list,expected,message){
  let actual = countNumbersBelowThreshold(number,list);
  let args = [list];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}

testCountNumBelowThreshold(1,[2],0,"count number below threshold");
testCountNumBelowThreshold(1,[1],0,"count number below threshold");
testCountNumBelowThreshold(2,[1,2,3],1,"count number below threshold");
testCountNumBelowThreshold(3,[3,2,1],2,"count number below threshold");

const testIndexOfNumber = function(number,list,expected,message){
  let actual = findIndex(number,list);
  let args = [list];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}

testIndexOfNumber(2,[0,1,2],2,"index of number");
testIndexOfNumber(1,[0,4,2,3,4,1],5,"index of number");
testIndexOfNumber(-2,[0,-2,5],1,"index of number");

const testIsAsending = function(list,expected,message){
  let actual = isAsending(list);
  let args = [list];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}

testIsAsending([1],true,"check asending order");
testIsAsending([1,3,1],false,"check asending order");
testIsAsending([1,2,3,4,5],true,"check asending order");
testIsAsending([1,3,4,5,1],false,"check asending order");
testIsAsending([1,2,1,3,2],false,"check asending order");

const testIsDecending = function(list,expected,message){
  let actual = isDecending(list);
  let args = [list];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}

testIsDecending([1],true,"check desending order");
testIsDecending([3,2,1,4],false,"check desending order");
testIsDecending([1,2,3,4,5],false,"check desending order");
testIsDecending([5,4,3,2,1],true,"check desending order");

const testExtractDigit = function(list,expected,message){
  let actual = extractDigitsIntoArray(list);
  let args = [list];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}

testExtractDigit(1,[1],"extract digits into list");
testExtractDigit(112,[1,1,2],"extract digits into list");
testExtractDigit(1234567,[1,2,3,4,5,6,7],"extract digits into list");

const testUniqueElements = function(list,expected,message){
  let actual = uniqueElement(list);
  let args = [list];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}
testUniqueElements([],[],"extract unique nums in list");
testUniqueElements([10],[10],"extract unique nums in list");
testUniqueElements([10,20,20,10],[10,20],"extract unique nums in list");
testUniqueElements([10,10,10],[10],"extract unique nums in list");

const testUnionOfNumbers = function(list1,list2,expected,message){
  let actual = unionOfNumbers(list1,list2);
  let args = [list1,list2];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}

testUnionOfNumbers([],[],[],"union of lists");
testUnionOfNumbers([1],[2],[1,2],"union of lists");
testUnionOfNumbers([],[2],[2],"union of lists");
testUnionOfNumbers([2],[],[2],"union of lists");
testUnionOfNumbers([2,3,4],[2,3,5],[2,3,4,5],"union of lists");

const testIntersection = function(list1,list2,expected,message){
  let actual = intersection(list1,list2);
  let args = [list1,list2];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}

testIntersection([],[],[],"intersection betn 2 lists");
testIntersection([1],[1],[1],"intersection betn 2 lists");
testIntersection([1,2],[1],[1],"intersection betn 2 lists");
testIntersection([1,2,3],[1,2,3],[1,2,3],"intersection betn 2 lists");
testIntersection([1,2,1],[1,2],[1,2],"intersection betn 2 lists");
testIntersection([1,1,1],[1,1],[1],"intersection betn 2 lists");

const testDifference = function(list1,list2,expected,message){
  let actual = difference(list1,list2);
  let args = [list1,list2];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}

testDifference([],[],[],"difference betn lists");
testDifference([1],[2],[1],"difference betn lists");
testDifference([1,1],[2],[1],"difference betn lists");
testDifference([1,1,1],[1],[],"difference betn lists");
testDifference([1,2,3],[4,5],[1,2,3],"difference betn lists")

const testIsSubset = function(list1,list2,expected,message){
  let actual = isSubset(list1,list2);
  let args = [list1,list2];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}

testIsSubset([10,20,30],[10],true,"check subset");
testIsSubset([10,20,30],[10,30,20],true,"check subset");
testIsSubset([10,10],[20],false,"check subset");
testIsSubset([1,2],[3,4],false,"check subset");

const testZipElements = function(list1,list2,expected,message){
  let actual = zipElements(list1,list2);
  let args = [list1,list2];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}

testZipElements([10],[1],[[10,1]],"zipping list elements");
testZipElements([1,2,3],[1,2,3],[[1,1],[2,2],[3,3]],"zipping list elements");
testZipElements([1,2],[1,2,3],[[1,1],[2,2]],"zipping list elements");
testZipElements([1,2,3],[1,2],[[1,1],[2,2]],"zipping list elements");

const testRotateElements = function(list,index,expected,message){
  let actual = rotateElements(list,index);
  let args = [list,index];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}

testRotateElements([1,2,3,4,5],0,[1,2,3,4,5],"rotate list elements");
testRotateElements([1,2,3,4,5],1,[2,3,4,5,1],"rotate list elements");
testRotateElements([1,2,3,4,5],2,[3,4,5,1,2],"rotate list elements");
testRotateElements([1,2,3,4,5],4,[5,1,2,3,4],"rotate list elements");

const testPartition= function(list,number,expected,message){
  let actual = getPartition(list,number);
  let args = [list,number];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
  return;
}

testPartition([1,2,3,4,5],3,[[1,2,3],[4,5]],"getPartition");
testPartition([1,2,3],1,[[1],[2,3]],"getPartition");
testPartition([-1,-2],0,[[-1,-2],[]],"getPartition");

const testGenerateNumbers = function(limit,expected,message){
  let actual = generateIndex(limit);
  let args = [limit];
  logTest(args,actual,expected,message);
  assert.deepStrictEqual(actual,expected);
}

testGenerateNumbers(1,[0],"indexes");
testGenerateNumbers(5,[0,1,2,3,4],"indexes");
testGenerateNumbers(0,[],"indexes");
