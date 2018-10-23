const isOdd = function(number) {
  return number%2; 
}

const isEven = function(number){
  return !isOdd(number);
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

const selectAlternateNumber = function(state,element) {
  let {elements,index} = state;
  if(index % 2 == 0){
    elements.push(element);
  }
  return {elements : elements , index : index+1};
}

const selectEverySecondNumber = function(numbers){
  return numbers.reduce(selectAlternateNumber,{index : 0, elements : []}).elements;
}

const sum = function(number1,number2){
  return number1+number2;
}

const sumOfNumbers = function(numbers) {
  return numbers.reduce(sum,0);
}

const generateFibonacciSeries = function(number){
  if(number<=1){
    return number;
  }
  return generateFibonacciSeries(number-1)+generateFibonacciSeries(number-2); 
}

const reverseFibonacciSeries = function(limit) {
  let fibo = [];
  for(let index = 0; index < limit; index++){
    fibo.push(generateFibonacciSeries(index));
  }
  return fibo.reverse();
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

const checkNumberAboveThreshold = function(threshold) {
  return function(element) {
    if(element >= threshold) {
      return element;
    }
  }
}

const countNumbersAboveThreshold = function(limit,numbers) {
  let threshold = checkNumberAboveThreshold(limit);
  return numbers.filter(threshold).length;
}

const checkNumberBelowThreshold = function(threshold) {
  return function(element) {
    if(element < threshold) {
        return element;
    }
  }
}

const countNumbersBelowThreshold = function(limit,numbers) {
  let threshold = checkNumberBelowThreshold(limit);
  return numbers.filter(threshold).length;
}

const checkIndex = function(value) {
  return function(number) {
    if(number[0] == value) {
      return number[1];
    }
  }
}

const indexOfNumber = function(value,numbers) {
  let indexedNumbers = zipElements(numbers,generateIndex(numbers.length));
  let checkValue = checkIndex(value);
  return valueOfIndex = indexedNumbers.filter(checkValue)[0][1];
}

const asending = function(state,number) {
  let {condition,element} = state;
  condition = (condition == true && element <= number)?true:false;
  return {condition : condition, element : number}
}

const isAsending = function(numbers){
  return numbers.reduce(asending,{condition : true, element : numbers[0]}).condition;;
}

const isDecending = function(numbers) {
  return isAsending(numbers.reverse());
}

const extractDigitsIntoArray = function(number) {
  return number.toString().split("").map(number => +number);
}

const checkUnique = function(unique,element) {
  if(!unique.includes(element)) {
    unique.push(element);
  }
  return unique;
}

const uniqueElement = function(numbers) {
  return numbers.reduce(checkUnique,[]);
}

const unionOfNumbers = function(firstArrayElements,secondArrayElements) {
  let combineTwoArrays = firstArrayElements.concat(secondArrayElements);
  return uniqueElement(combineTwoArrays);
}

const checkIntersection = function(secondArrayElements) {
  return function(number){
    if(secondArrayElements.includes(number)){
      return number;
    }
  }
}

const intersection = function(firstArrayElements,secondArrayElements) {
  let intersection = checkIntersection(secondArrayElements);
  return uniqueElement(firstArrayElements.filter(intersection));
}

const checkDifference = function(secondArrayElements) {
  return function(element) {
    return !secondArrayElements.includes(element);
  }
}

const difference = function(firstArrayElements,secondArrayElements) {
  let setDifference = checkDifference(secondArrayElements);
  let differenceSet = firstArrayElements.filter(setDifference);
  return uniqueElement(differenceSet);
}

const checkSubset = function(list) {
  return function(element) {
    return list.includes(element);
  }
}

const isSubset = function(list, subset) {
  let checkList = checkSubset(list);
  return subset.every(checkList);
}

const zipElements = function(firstArrayElements,secondArrayElements) {
  let zippedElements = [];
  let threshold = Math.min(firstArrayElements.length,secondArrayElements.length);
  for(let index = 0; index < threshold; index++){
    zippedElements[index] = [firstArrayElements[index],secondArrayElements[index]];
  }
  return zippedElements;
}

const rotateElements = function(source,index) {
  return source.slice(index,source.length).concat(source.slice(0,index));
}

const createPartition = function(threshold) {
  return function(array,element) {
    if(element <= threshold){
      array[0].push(element);
      return array;
    }
    array[1].push(element);
    return array;
  }
}

const partition = function(numbers,threshold) {
  let setThreshold = createPartition(threshold);
  return numbers.reduce(setThreshold,[[],[]]);
}

exports.partition = partition;
exports.rotateElements = rotateElements;
exports.zipElements = zipElements;
exports.isSubset = isSubset;
exports.difference = difference;
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
