export default class AgeSchema {
  constructor(checks = []) {
    this.checks = checks;
  }

  isAdult() {
    return new AgeSchema([...this.checks, (value) => value >= 18]);
  }

  isValid(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      return false;
    }
    return this.checks.every((check) => check(value));
  }
}
