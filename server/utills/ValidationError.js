class ValidationError extends Error {
  constructor(message, errors) {
    super(message);
    this.errors = errors;
  }

  getErrors() {
    const formatedErrors = this.errors.map(({ message, context }) => {
      return {
        message,
        field: context.label,
      };
    });
    return formatedErrors;
  }
}

module.exports = ValidationError;
