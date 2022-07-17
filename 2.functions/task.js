// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код

  min = arr[0];
  max = arr[0];
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];      
    } else if (arr[i] < min) {
      min = arr[i];      
    }

    sum = sum + arr[i];      
  } 
  
  let avgTotal = sum/arr.length;

  avg = Number(avgTotal.toFixed(2));
  
  return {min:min, max:max, avg:avg};
}

// Задание 2
function worker(arr) {
  let sum = 0;

  // Ваш код

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];  
  }
  
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  
  // Ваш код
  // for ...

  for (let i = 0; i < arrOfArr.length; i++) {
    const funcResult = func(arrOfArr[i]);
    if (funcResult > max) {
      max = funcResult;
    }       
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код

  let min, max;

  min = arr[0];
  max = arr[0];  

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];      
    } else if (arr[i] < min) {
      min = arr[i];      
    }          
  }  
  
  return Math.abs(max - min);
}
