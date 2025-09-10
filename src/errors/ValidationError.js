class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
    this.statusCode = 400; // Bad Request
  }
}

module.exports = ValidationError;
