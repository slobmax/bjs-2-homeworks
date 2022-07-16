// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код

  min = Infinity;
  max = -Infinity;
  sum = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];      
    } if (arr[i] < min) {
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

  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];  
  }
  
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  
  // Ваш код
  // for ...

  for (j = 0; j < arrOfArr.length; j++) {
    if (func(arrOfArr[j]) > max) {
      max = func(arrOfArr[j]);
    }       
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код

  let min, max, dif;

  min = Infinity;
  max = -Infinity;  

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];      
    } if (arr[i] < min) {
      min = arr[i];      
    }          
  }  
  
  dif = max - min;

  return Math.abs(dif);
}
