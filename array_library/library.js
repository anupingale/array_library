const isOdd = function(number) {
  return number%2; 
}

const isEven = function(number){
  return number%2==0;
}

const reverseNumbers = function(numbers){
  return numbers.reverse();
}

const extractOddNumbers = function(numbers) {
  return numbers.filter(isOdd);
}

const extractEvenNumbers = function(numbers) {
  return numbers.filter(isEven);
}

const generateIndex = function(limit) {
  let indexes = [];
  for(let index = 0; index < limit; index++){
    indexes.push(index);
  }
  return indexes;
}

const selectNumbers = function(indexedNumbers) {
  let selectedArray = [];
  for(number of indexedNumbers){
    if(isEven(number[1])){
      selectedArray.push(number[0]);
    }
  }
  return selectedArray;
}

const selectEverySecondNumber = function(numbers) {
  let limit = generateIndex(numbers.length);
  let indexedNumbers = zipElements(numbers,limit);
  return selectNumbers(indexedNumbers);
}

const sum = function(number1,number2){
  return number1+number2;
}

const sumOfNumbers = function(numbers) {
  return numbers.reduce(sum,0);
}

const reverseFibonacciSeries = function(limit) {
  let firstNumber = 0;
  let secondNumber = 1;
  let index = 2;
  let fibonacciSeries=[firstNumber];
  while(index <= limit){
    let thirdNumber = firstNumber+secondNumber;
    firstNumber = secondNumber;
    fibonacciSeries.unshift(secondNumber);
    secondNumber = thirdNumber;
    index++;
  }
  return fibonacciSeries;
}

const greatestNumber = function(numbers) {
  return Math.max.apply(null,numbers);
}

const smallestNumber = function(numbers) {
  return Math.min.apply(null,numbers);
}

const average = function(numbers) {
  return sumOfNumbers(numbers)/numbers.length;
}

const lengthOfNames = function(names){
  return names.map(name => name.length);
}

const countEvenNumbers = function(numbers) {
  return extractEvenNumbers(numbers).length;
}

const countOddNumbers = function(numbers) {
  return extractOddNumbers(numbers).length;
}

const segregateAboveThreshold = function(threshold,number){
  if(number > threshold.threshold){
    threshold.aboveThreshold.push(number);
  }
  return threshold;
}

const countNumbersAboveThreshold = function(limit,numbers) {
  let threshold = {threshold : limit, aboveThreshold : []};
   numbers.reduce(segregateAboveThreshold,threshold);
  return threshold.aboveThreshold.length;
}

const segregateBelowThreshold = function(threshold,number){
  if(number < threshold.threshold){
    threshold.belowThreshold.push(number);
  }
  return threshold;
}

const countNumbersBelowThreshold = function(limit,numbers) {
  let threshold = {threshold : limit, belowThreshold : []};
  numbers.reduce(segregateBelowThreshold,threshold);
  return threshold.belowThreshold.length;
}

const indexOfNumber = function(value,numbers) {
  for(let index in numbers) {
    if(value == numbers[index]){
      return +index;
    }
  }
}

const isAsending = function(numbers) {
  let isAsending = true;
  for(let index = 0; index < numbers.length-1; index++){
    if(numbers[index] > numbers[index+1]){
      isAsending = false; 
    }
  }
  return isAsending;
}

const isDecending = function(numbers) {
  let isDecending = true;
  for(let index = 0; index < numbers.length; index++){
    if(numbers[index] < numbers[index+1]){
      isDecending = false ; 
    }
  }
  return isDecending;
}

const extractDigitsIntoArray = function(number) {
  let digitArray =  number.toString().split("");
  return digitArray.map(number => +number);
}

const uniqueElement = function(numbers) {
  let uniqueNumbers = [];
  for(let element of numbers){
    if(!uniqueNumbers.includes(element)){
      uniqueNumbers.push(element);
    }
  }
  return uniqueNumbers;
}

const unionOfNumbers = function(firstArrayElements,secondArrayElements) {
  let combineTwoArrays = firstArrayElements.concat(secondArrayElements);
  return uniqueElement(combineTwoArrays);
}

const intersection = function(firstArrayElements,secondArrayElements) {
  let intersection = [];
  let firstArray = uniqueElement(firstArrayElements);
  let secondArray = uniqueElement(secondArrayElements);
  for(let index = 0; index < firstArray.length; index++){
    for(let index1 = 0; index1 < secondArray.length; index1++){
      if(firstArray[index]==secondArray[index1]){
        intersection.push(firstArray[index]);
      }
    }
  }
  return intersection;
}

const diffrence = function(firstArrayElements,secondArrayElements) {
  let diffrence  = [];
  let firstArray = uniqueElement(firstArrayElements);
  let secondArray = uniqueElement(secondArrayElements);
  for(let index = 0; index < firstArray.length; index++){
    for(let index1 = 0; index1 < secondArray.length; index1++){
      if(firstArray[index]!=secondArray[index1]){
        diffrence.push(firstArray[index]);
      }
    }
  }
  return uniqueElement(diffrence);
}

const isSubset = function(array,subsetArray) {
  let count = 0;
  for(let element of subsetArray){
    if(array.includes(element)){
      count++;
    }
    if(count == subsetArray.length){
      return true;
    }
  }
  return false;
}

const zipElements = function(firstArrayElements,secondArrayElements) {
  let zippedElements = [];
  let threshold = Math.min(firstArrayElements.length,secondArrayElements.length);
  for(let index = 0; index < threshold; index++){
    zippedElements[index] = [firstArrayElements[index],secondArrayElements[index]];
  }
  return zippedElements;
}

const rotateElements = function(numbers,index) {
  let rotatedElements = [];
  let shiftBy = index%numbers.length;
  for(let index = shiftBy; index < numbers.length; index++) {
    rotatedElements.push(numbers[index]);
  }
  for(let index = 0; index < shiftBy; index++) {
    rotatedElements.push(numbers[index]);
  }
  return rotatedElements;
}

const aboveThreshold = function(threshold) {
  return function(element){ return element > threshold};
}

const belowThreshold = function(threshold) {
  return function(element) { return element < threshold};
}

const partition = function(numbers,threshold) {
  let partitionedElements = [];
  let numbersAboveThreshold = [];
  let numbersBelowThreshold = [];
  let aboveValues = aboveThreshold(threshold);
  let belowValues = belowThreshold(threshold);
  numbersAboveThreshold.push(numbers.filter(aboveValues));
  numbersBelowThreshold.push(numbers.filter(belowValues));
  return partitionedElements = numbersBelowThreshold.concat(numbersAboveThreshold);
}

exports.partition = partition;
exports.rotateElements = rotateElements;
exports.zipElements = zipElements;
exports.isSubset = isSubset;
exports.diffrence = diffrence;
exports.intersection = intersection;
exports.unionOfNumbers = unionOfNumbers;
exports.uniqueElement = uniqueElement;
exports.greatestNumber = greatestNumber;
exports.extractDigitsIntoArray = extractDigitsIntoArray;
exports.isDecending = isDecending;
exports.isAsending = isAsending;
exports.indexOfNumber = indexOfNumber;
exports.countNumbersBelowThreshold = countNumbersBelowThreshold;
exports.countNumbersAboveThreshold = countNumbersAboveThreshold;
exports.countOddNumbers = countOddNumbers;
exports.countEvenNumbers = countEvenNumbers;
exports.lengthOfNames = lengthOfNames;
exports.average = average;
exports.smallestNumber = smallestNumber;
exports.uniqueNumbersgreatestNumber = greatestNumber;
exports.reverseFibonacciSeries = reverseFibonacciSeries;
exports.selectEverySecondNumber = selectEverySecondNumber;
exports.reverseNumbers = reverseNumbers;
exports.sumOfNumbers = sumOfNumbers;
exports.extractEvenNumbers = extractEvenNumbers;
exports.extractOddNumbers = extractOddNumbers;
exports.generateIndex = generateIndex;
