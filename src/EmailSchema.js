export default class EmailSchema {
  constructor(checks = []) {
    this.checks = checks;
  }

  setEmailLengthConstraint(min, max = Infinity) {
    const check = (value) => {
      const { length } = value.split('@')[0];
      return length >= min && length <= max;
    };
    return new EmailSchema([...this.checks, check]);
  }

  isValid(value) {
    if (typeof value !== 'string' || !value.includes('@')) {
      return false;
    }
    return this.checks.every((check) => check(value));
  }
}
