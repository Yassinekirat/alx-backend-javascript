export default class Currency {
    constructor(name, code) {
      this.name = name;
      this.code = code;
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      if (typeof newName === 'string') {
        this._name = newName;
      } else {
        throw new TypeError('Name must be a string');
      }
    }
  
    get length() {
      return this._length;
    }
  
    set length(newLength) {
      if (typeof newLength === 'number') {
        this._length = newLength;
      } else {
        throw new TypeError('Length must be a number');
      }
    }
  
    get students() {
      return this._students;
    }
  
    set students(newStudents) {
      if (newStudents instanceof Array) {
        this._students = newStudents;
      } else {
        throw new TypeError('Length must be a number');
      }
    }
  }
  