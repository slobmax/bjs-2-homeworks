class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {    
    return this.state = this._state * 1.5;
  }  

  set state(state) {
    if (state <= 0) {
      this._state = 0;
    } else if (state >= 100) {
      this._state = 100;
    } else {
     this._state = state;
    }
  }
  
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';    
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);    
    this.type = 'book';
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);          
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);   
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);          
    this.type = 'detective';
  }
}

class Library {
  constructor(name) {
    this.name = name;    
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    } 
  }

  findBookBy(type, value) {    
    return this.books.find(book => book[type] === value) ? this.books.find(book => book[type] === value) : null;
  }

  giveBookByName(bookName) {
    let neededBook = this.books.findIndex(book => book.name === bookName);
      if(neededBook === -1) {
        return null;
      } else {
        return this.books.splice([neededBook], 1)[0];
      }
  }    
}

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;   
    this.subjectMarks = [];
  }    

  addMark(mark, subjectName) {  
    if(this.subjectMarks === undefined && mark > 0 && mark <= 5) {
      this.subjectMarks = {mark, subjectName};  
    } else if (mark > 0 && mark <= 5){
      this.subjectMarks.push({mark, subjectName}); 
    }
  }

  getAverageBySubject(subject) {    
    if(this.subjectMarks.filter(item => item.subjectName === subject).length < 1) {
      return null;
    } else {    
     let sum = 0;
     for(let i = 0; i < this.subjectMarks.filter(item => item.subjectName === subject).length; i++){
       sum = sum + this.subjectMarks.filter(item => item.subjectName === subject)[i].mark;     
     } return sum / this.subjectMarks.filter(item => item.subjectName === subject).length; 
    }
   } 

  getAverage() {    
    let sum = 0;
    for(let i = 0; i < this.subjectMarks.length; i++){
      sum = sum + this.subjectMarks[i].mark;     
    } return sum / this.subjectMarks.length; 
  }
}