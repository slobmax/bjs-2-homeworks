function compareArrays(arr1, arr2) {
  let result;

  // Ваш код

  result = (arr1.length === arr2.length && arr1.every((element, index) => arr2[index] === element));

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код

  resultArr = arr.filter(number => number > 0).filter(number => number % 3 === 0).map(number => number * 10);

  return resultArr; // array
}
