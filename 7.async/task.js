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
        return undefined;
    } else {      
        return this.alarmCollection.push({time, callback, id});
    }    
  }  

  removeClock(id) {
    let removeAlarm = this.alarmCollection.findIndex(item => item.id === id);
    if (removeAlarm === -1) {
      return null;
    } else {
      return this.alarmCollection.splice([removeAlarm], 1)[0];
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
    if(this.timerId != null && this.timerId != undefined) {      
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
  phoneAlarm.addClock('02:49', () => console.log('Пора вставать!'), 1);
  phoneAlarm.addClock('02:50', () => {console.log('Давай вставай уже!'); phoneAlarm.removeClock(2)}, 2);
  phoneAlarm.addClock('02:51', () => {console.log('Вставай, а то проспишь!'); phoneAlarm.stop(), phoneAlarm.clearAlarms(), phoneAlarm.printAlarms()}, 3);
  phoneAlarm.printAlarms();
  phoneAlarm.start();
}