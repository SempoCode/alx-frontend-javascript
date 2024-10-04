export default class HolbertonCourse {
  constructor(name, length, students) {
    // Validate types
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
      throw new TypeError('Students must be an array of strings');
    }

    // Assign to underscore attributes
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Getter and Setter for length
  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // Getter and Setter for students
  get students() {
    return this._students;
  }

  set students(newStudents) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
