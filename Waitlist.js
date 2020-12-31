/**
 * The datastructure used for ezWaitlist is similar to a queue, underlying data-
 * structure is JS-Arrays. Default constructor called upon creation of new
 * waitlist.
 */
class Waitlist {
  var waitlist = [];
  var waitTime;

  constructor(){
    //default waitTime set to 5 minutes
    this.waitTime = 5;
  }

  /**
   * adds a new EntryUnit with full detail
   * @param {var} name      name of party
   * @param {var} partySize num members
   * @param {var} number    phone number in domestic format ie. (888) 888-8888
   * @param {var} waitTime  wait time in minutes
   */
  function add(name, partySize, number, waitTime){
    this.waitlist.push(new EntryUnit(name, partySize, number, waitTime));
    //expected waitTime should always be 5 minutes more than the last party.
    this.waitTime = waitTime+5;
  }

  /**
   * adds a new EntryUnit with only institutional requirements, ommiting wait
   * times.
   * @param {var} name      name of party
   * @param {var} partySize num members
   * @param {var} number    phone number in domestic format ie. (888) 888-8888
   */
  function add(name, partySize, number){
    this.waitlist.push(new EntryUnit(name, partySize, number, this.waitTime));
    //expected waitTime should always be 5 minutes more than the last party.
    this.waitTime = waitTime+5;
  }

  /**
   * seating the next party implies removing the top most party from the list.
   *
   * {further implementation required}
   */
  function seatNext(){
    this.waitlist.pop();
  }

  /**
   * Removes a party from the waitlist given its index.
   * @param  {var} index party to be removed, determined in {another module}
   */
  function remove(index){
    this.waitlist.splice(index, 1);
  }
}
