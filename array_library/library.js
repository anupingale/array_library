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

const selectEverySecondNumber = function(numbers) {
 return numbers.filter(function(number,index){
  if(isEven(index)){return number;}});
}

const sum = function(number1,number2){
  return number1+number2;
}

const sumOfNumbers = function(numbers) {
  return numbers.reduce(sum,0);
}

const fibonacciSeries = function(limit) {
  let firstNumber = 0;
  let secondNumber = 1;
  let index = 2;
  let fibonacciSeries=[firstNumber];
  while(index <= limit){
    let thirdNumber = firstNumber+secondNumber;
    firstNumber = secondNumber;
    fibonacciSeries.push(secondNumber);
    secondNumber = thirdNumber;
    index++;
  }
  return fibonacciSeries;
}

const reverseFibonacciSeries = function(limit) {
  return fibonacciSeries(limit).reverse();
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

const segregateNumbers = function(threshold,number){
  if(number > threshold.threshold){
    threshold.aboveThreshold.push(number);
  }
  return threshold;
}

const countNumbersAboveThreshold = function(limit,numbers) {
  let threshold = {threshold : limit, aboveThreshold : []};
   numbers.reduce(segregateNumbers,threshold);
  return threshold.aboveThreshold.length;
}

const countNumbersBelowThreshold = function(threshold,numbers) {
  let count = 0;
  for(let number of numbers){
    if(number < threshold){
      count++;
    }
  }
  return count;
}

const indexOfNumber = function(value,numbers) {
  for(let index in numbers){
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
  let numberToString = number.toString();
  let extractedArray = [];
  for(let index = 0; index < numberToString.length; index++){
    extractedArray[index] = +numberToString[index];
  }
  return extractedArray;
}

const isUnique = function(number,uniqueArray) {
  let isUnique = false;
  for(let index = 0; index < uniqueArray.length; index++){
    if(number == uniqueArray[index]){
      isUnique = true;
    }
  }
  return isUnique;
}

const uniqueElement = function(numbers) {
  let uniqueNumbers = [];
  for(let index = 0; index < numbers.length; index++){
    if(!isUnique(numbers[index],uniqueNumbers)){
      uniqueNumbers.push(numbers[index]);
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
  let smallerArray = firstArrayElements;
  let largerArray = secondArrayElements;

  if(secondArrayElements.length <  firstArrayElements.length) {
    smallerArray = secondArrayElements;
    largerArray = firstArrayElements;
  }

  for(let index = 0; index < smallerArray.length; index++){
    zippedElements.push(smallerArray[index]);
    zippedElements.push(largerArray[index]);
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

const partition = function(numbers,threshold) {
  let numbersAboveThreshold = [];
  let numbersBelowThreshold = [];
  for(let element of numbers){
    if(element > threshold){
      numbersAboveThreshold.push(element);
    }
    if(element < threshold){
      numbersBelowThreshold.push(element);
    }
  }
  let partitiondElements = [numbersBelowThreshold,numbersAboveThreshold];
  return partitiondElements;
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
