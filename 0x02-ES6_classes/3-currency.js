export default class Currency {
  constructor(code, name) {
    this.code = code; // Initialize code
    this.name = name; // Initialize name
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    }
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    }
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
