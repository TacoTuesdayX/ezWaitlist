class EntryUnit {
  var name;
  var partySize;
  var number;
  var waitTime;

  constructor(name, partySize, number, waitTime){
    this.name = name;
    this.partySize = partySize;
    this.number = number;
    this.waitTime = waitTime;
  }

  constructor(name, partySize, waitTime){
    this.name = name;
    this.partySize = partySize;
    this.waitTime = waitTime;
  }

  constructor(name, number, waitTime){
    this.name = name;
    this.number = number;
    this.waitTime = waitTime;
  }

  constructor(){
    this.name = " ";
    this.partySize = " ";
    this.number = " ";
    this.waitTime = " ";
  }
}
