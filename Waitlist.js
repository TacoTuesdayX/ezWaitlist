
class Waitlist {
  var waitlist = [];
  var waitTime;

  constructor(){
    //default waitTime set to 5 minutes
    this.waitTime = 5;
  }

  function add(name, partySize, number, waitTime){
    this.waitlist.push(new EntryUnit(name, partySize, number, waitTime));
    //expected waitTime should always be 5 minutes more than the last party.
    this.waitTime = waitTime+5;
  }

  function add(name, partySize, number){
    this.waitlist.push(new EntryUnit(name, partySize, number, this.waitTime));
    //expected waitTime should always be 5 minutes more than the last party.
    this.waitTime = waitTime+5;
  }

  function seatNext(){
    this.waitlist.pop();
  }

  function remove(index){
    this.waitlist.splice(index, 1);
  }
}
