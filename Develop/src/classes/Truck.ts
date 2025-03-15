// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
// 03/12/2025 SGray - Done
class Truck extends Vehicle implements AbleToTow {
  // TODO: Declare properties of the Truck class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), 
  // model (string), year (number), weight (number), topSpeed (number), 
  // wheels (Wheel[]), towingCapacity (number)
  // 02/13/2025 SGray - Done
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // TODO: Create a constructor that accepts the properties of the Truck class
  // 02/13/2025 SGray - Done
  constructor(
    vin: string, 
    color: string, 
    make: string, 
    model: string,
    year: number, 
    weight: number, 
    topSpeed: number,
    wheels: Wheel[], 
    towingCapacity: number) {
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // 02/13/2025 SGray - Done
    super()
    // TODO: The constructor should initialize the properties of the Truck class
    // 02/13/2025 SGray - Done
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    // Check if the wheels array has 4 elements
    // If not, create 4 new Wheel objects
    // Otherwise, use the provided wheels array
    // 03/12/2025 SGray - Done
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
    this.towingCapacity = towingCapacity;
  }

  // TODO: Implement the tow method from the AbleToTow interface
  // 03/12/2025 SGray - Done
  tow(vehicle: Truck | Motorbike | Car): void {
    const { make, model, weight } = vehicle;
    if (weight <= this.towingCapacity) {
      console.log(`Towing ${make} ${model}...`);
    } else {
      console.log(`The ${make} ${model} is too heavy to be towed.`);
    }
  }

  // TODO: Override the printDetails method from the Vehicle class
  // 03/12/2025 SGray - Done
  // Method to print vehicle details
  override printDetails(): void {
    // TODO: Call the printDetails method of the parent class
    // 03/12/2025 SGray - Done
    super.printDetails();

    // TODO: Log the details of the Truck
    // 03/12/2025 SGray - Done
    // TODO: The details should include the VIN, make, model, year, weight, top speed, 
    // color, towing capacity, and wheels
    // 03/12/2025 SGray - Done
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    // Print details of the wheels
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
    console.log(
      `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
    );
    console.log(
      `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
    );
  }


}

// Export the Truck class as the default export
export default Truck;
