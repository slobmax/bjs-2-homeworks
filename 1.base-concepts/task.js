"use strict"

function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  let d = b**2-4*a*c;
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr = [(-b/(2*a))];
  } else if (d > 0) {
    arr = [((-b + Math.sqrt(d) )/(2*a)), (-b - Math.sqrt(d) )/(2*a)];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  if (isNaN(percent) === true) {
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  }

  if (isNaN(contribution) === true) {
      return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  } 

  if (isNaN(amount) === true) {
      return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  } 

  let startPeriod = new Date();
  let endPeriod = new Date(date);
  let oneMounth = (1000 * 60 * 60 * 24 * 365) / 12;
  let diffInTime = endPeriod.getTime() - startPeriod.getTime();
  let periodMounth = Math.round(diffInTime / oneMounth);  
  let credit = amount - contribution;
  let percentMounth = percent / 100 / 12;  
  let pay = credit * (percentMounth + (percentMounth / (((1 + percentMounth) ** periodMounth) - 1)));
      
  totalAmount = pay * periodMounth;  
  
  return Number(totalAmount.toFixed(2));
}