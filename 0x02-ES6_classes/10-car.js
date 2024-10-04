// 10-car.js

const CAR_SYMBOL = Symbol('Car');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // Create a new object of the same class as the current instance
    const CloneCarClass = this.constructor[CAR_SYMBOL] || this.constructor;
    return new CloneCarClass();
  }
}

// Add a static method to set the species symbol
Car[CAR_SYMBOL] = Car;
