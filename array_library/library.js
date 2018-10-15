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
  let oddNumbers=[];
  for(let number of numbers){
    if(isOdd(number)){
      oddNumbers[oddNumbers.length] = number;
    }
  }
  return oddNumbers;
}

const extractEvenNumbers = function(numbers) {
  let evenNumbers=[];
  for(let number of numbers){
    if(isEven(number)){
      evenNumbers[evenNumbers.length] = number;
    }
  }
  return evenNumbers;
}

const selectEverySecondNumber = function(numbers) {
  let selectedArray = [];
  for(let index = 0; index < numbers.length; index+=2){
    selectedArray.push(numbers[index]);
  }
  return selectedArray;
}

const sumOfNumbers = function(numbers) {
   let sumOfNumbers = 0;
  for(let number of numbers){
    sumOfNumbers = (sumOfNumbers+(+number));
  }
  return sumOfNumbers;
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
  let greatestNumber = numbers[0];
  for(number of numbers){
    while(number > greatestNumber){
      greatestNumber = number;
    }
  }
  return greatestNumber;
}

const smallestNumber = function(numbers) {
  let smallestNumber = numbers[0];
  for(number of numbers){
    while(number < smallestNumber){
      smallestNumber = number;
    }
  }
  return smallestNumber;
}

const average = function(numbers) {
  let sum = sumOfNumbers(numbers);
  let length = numbers.length;
  return sum/length;
}

const lengthOfNames = function(names){
  let lengthOfNames=[];
  for(name of names){
    lengthOfNames[lengthOfNames.length] = name.length;
  }
  return lengthOfNames;
}

const countEvenNumbers = function(numbers) {
  return extractEvenNumbers(numbers).length;
}

const countOddNumbers = function(numbers) {
  return extractOddNumbers(numbers).length;
}

const countNumbersAboveThreshold = function(threshold,numbers) {
  let count = 0;
  for(let number of numbers){
    if(number > threshold){
      count++;
    }
  }
  return count;
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
