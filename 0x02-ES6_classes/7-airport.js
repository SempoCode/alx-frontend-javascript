export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Regular method with 'this'
  toString() {
    return `[object ${this._code}]`;
  }
}
