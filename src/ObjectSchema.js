export default class ObjectSchema {
  constructor(fields = {}) {
    this.fields = fields;
  }

  shape(fields) {
    return new ObjectSchema(fields);
  }

  isValid(value) {
    if (typeof value !== 'object' || value === null) {
      return false;
    }
    const expectedKeys = Object.keys(this.fields);
    const actualKeys = Object.keys(value);
    if (actualKeys.length !== expectedKeys.length) {
      return false;
    }
    return expectedKeys.every((key) => Object.hasOwn(value, key)
      && this.fields[key].isValid(value[key]));
  }
}
