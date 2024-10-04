export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Convert class instance to Number
  valueOf() {
    return this._size;
  }

  // Convert class instance to String
  toString() {
    return this._location;
  }
}
