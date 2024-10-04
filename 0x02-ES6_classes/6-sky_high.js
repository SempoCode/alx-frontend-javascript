import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Call the parent class constructor to assign sqft
    super(sqft);

    // Validate input type for floors
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }

    // Assign floors to underscore attribute
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
