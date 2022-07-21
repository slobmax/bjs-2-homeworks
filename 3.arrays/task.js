function compareArrays(arr1, arr2) {
  
  // Ваш код

  return (arr1.length === arr2.length && arr1.every((element, index) => arr2[index] === element)); // boolean
}

function advancedFilter(arr) {
  
  // Ваш код

  return arr.filter(number => number > 0).filter(number => number % 3 === 0).map(number => number * 10); // array
}
