export default class Building {
  constructor(sqft) {
    // Validate input type
    if (typeof sqft !== 'number') {
      throw new TypeError('Square feet must be a number');
    }

    // Assign to underscore attribute
    this._sqft = sqft;

    // Ensure the class is abstract by checking for the required method
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
}
