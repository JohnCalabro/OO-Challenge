//PART ONE:
class Vehicle {
  constructor (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk(){
    return 'Beep.'
  }
  toString(){
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
  }
}   
//PART II:
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year)
    this.numWheels = 4;
  }
}
//PART III:
class Motorcycle extends Vehicle {
  constructor (make, model, year) {
    super(make, model, year)
    this.numWheels = 2;
  }
  revEngine(){
    return 'VROOM!!!'
  }
}
//PART IV
 class Garage { // looked at solution question confused me at first
  constructor(capacity) {
    this.vehicles = []; //set vehicls to empty []
    this.capacity = capacity;  //set capacity
  }

  add(newVehicle) {
    // if newVehicle is not a Vehicle, return this message
    if (!(newVehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }
    if (this.vehicles.length >= this.capacity) {
      //if lenght of vehicle array is > = the full storage capacity of Garage
      return "Sorry, we're full.";
    }
    this.vehicles.push(newVehicle); //otherwise if it IS a vehicle and isn't >= to
    //the full capacity of the garage we can add a new vehicle onto the array until
    //the full capacity is reached or exceeded
    return "Vehicle added!"; //lastly return this message
  }
}





