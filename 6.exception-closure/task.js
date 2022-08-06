function parseCount(number){
  if(Number.isNaN(Number.parseInt(number, 10)) === true) {
    throw new Error("Невалидное значение");
  }
  return Number.parseInt(number, 10);
}

function validateCount(num){
  try {
    return parseCount(num); 
  } catch (err) {
   return err;
  }
}

class Triangle {
  constructor(a, b, c) {
    if((a+b)<c || (a+c)<b || (b+c)<a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }
  
  getPerimeter() {    
    return this.a + this.b + this.c;
  }  

  getArea() {    
    let p = this.getPerimeter()/2;
      return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));       
  }  
}
  
function getTriangle(a, b, c) {    
  try {  
    const triangle = new Triangle(a, b, c); 
    return triangle;    
  } catch (error) {    
    return {
      getPerimeter() {
        return "Ошибка! Треугольник не существует";
      },
      getArea() {
        return "Ошибка! Треугольник не существует";
      }
    }    
  } 
}