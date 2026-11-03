import EmailSchema from './src/EmailSchema.js';
import AgeSchema from './src/AgeSchema.js';
import ObjectSchema from './src/ObjectSchema.js';

export default class Validator {
  email() {
    return new EmailSchema();
  }

  age() {
    return new AgeSchema();
  }

  user() {
    return new ObjectSchema();
  }
}
