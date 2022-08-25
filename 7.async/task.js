class AlarmClock {
  constructor(){
    this.alarmCollection = [];
    this.timerId = null;    
  }
  
  addClock(time, callback, id){ 
    if(!id) {      
      throw new Error('ID не найден');      
    } if (this.alarmCollection.some(alarm => alarm.id === id)) {
        console.error('ID уже существует');        
    } else {      
        this.alarmCollection.push({time, callback, id});
    }    
  }  

  removeClock(id) {    
    if (this.alarmCollection.findIndex(alarm => alarm.id === id) === -1) {
      return false;
    } else {
      this.alarmCollection.splice(id - 1, 1);      
      return true;
    }
  }

  getCurrentFormattedTime() {      
    return new Date().toTimeString().slice(0, 5);
  }

  checkClock(alarm) {       
    if(alarm.time === this.getCurrentFormattedTime()) {      
      alarm.callback();        
    }    
  }

  start() {
    if(this.timerId === null) {       
      this.timerId = setInterval(() => this.alarmCollection.forEach(alarm => this.checkClock(alarm)), 1000);            
    }    
  }  

  stop() {
    if(this.timerId) {      
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
    this.alarmCollection.forEach(alarm => console.log(`Будильник №${alarm.id} заведен на ${alarm.time}`));    
  }
  
  clearAlarms() {
    this.alarmCollection = [];
    this.stop();    
  }
}

function testCase() {
  let phoneAlarm = new AlarmClock();
  phoneAlarm.addClock('17:31', () => console.log('Пора вставать!'), 1);
  phoneAlarm.addClock('17:32', () => {console.log('Давай вставай уже!'); phoneAlarm.removeClock(2)}, 2);
  phoneAlarm.addClock('17:33', () => {console.log('Вставай, а то проспишь!'); phoneAlarm.stop(), phoneAlarm.clearAlarms(), phoneAlarm.printAlarms()}, 3);
  phoneAlarm.printAlarms();
  phoneAlarm.start();
}