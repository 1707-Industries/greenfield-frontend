/* eslint-disable no-prototype-builtins */
export default class Errors {
  /**
   * Create a new Errors instance.
   */
  constructor() {
    this.errors = {};
    this.message = '';
  }

  add(field, message = false) {
    // this is to follow how laravel gives us responses curently
    this.errors[field] = {
      0: message,
    };

    return this;
  }

  /**
   * Determine if an errors exists for the given field.
   *
   * @param {string} field
   */
  has(field) {
    return this.errors.hasOwnProperty(field);
  }

  /**
   * Determine if we have any errors.
   */
  any() {
    return Object.keys(this.errors).length > 0;
  }

  /**
   * Retrieve the error message for a field.
   *
   * @param {string} field
   */
  get(field) {
    if (this.errors[field]) {
      return this.errors[field][0];
    }

    return '';
  }

  /**
   * Record the new errors.
   *
   * @param {object} errors
   */
  record(errors) {
    this.errors = errors;
  }

  /**
   * General error message
   *
   * @param {string} message
   */
  recordMessage(message) {
    this.message = message;
  }

  /**
   * Clear one or all error fields.
   *
   * @param {string|null} field
   */
  clear(field) {
    // remove all the other errors;
    if (field) {
      delete this.errors[field];

      return;
    }

    this.errors = {};
  }
}