// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
//11/28/2024 SGray Done
class Motorbike extends Vehicle {
  // TODO: Declare properties of the Motorbike class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // TODO: The types should be as follows: vin (string), color (string), make (string), 
  // model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
  // 03/12/2025 SGray Done
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  // TODO: Create a constructor that accepts the properties of the Motorbike class
  // 11/28/2024 SGray Done
  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[]) {
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    //11/28/2024 SGray Done
    super();
    // TODO: The constructor should initialize the properties of the Motorbike class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;

    // TODO: The constructor should check if the wheels array has 2 elements and 
    // create 2 new default Wheel objects if it does not
    // 03/12/2025 SGray Done
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      console.log('Motorbike constructor: Using provided wheels array');
      this.wheels = wheels;
    }
}
  // TODO: Implement the wheelie method
  // 11/28/2024 SGray Done
  wheelie(): void {
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
    // 11/28/2024 SGray Done
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }
  // TODO: Override the printDetails method from the Vehicle class
  // 11/28/2024 SGray Done
  override printDetails(): void {
    // TODO: The method should call the printDetails method of the parent class
    // 03/12/2025 SGray - Done
    super.printDetails();
  // TODO: The method should log the details of the Motorbike
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, 
  // and wheels
  // 03/12/2025 SGray Done
  console.log(`The motorcycles VIN is ${this.vin}, the make is ${this.make}, and the model is ${this.model}.
      the year is ${this.year}, it has a weight of ${this.weight}, it has a top speed of ${this.topSpeed}
      The color is ${this.color}. Wheels:`);
      // Print details of the wheels
      console.log(
        `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
      );
      console.log(
        `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
      );
  
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
