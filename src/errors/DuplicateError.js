class DuplicateError extends Error {
  constructor(message) {
    super(message);
    this.name = "DuplicateError";
    this.statusCode = 409; // Conflict
  }
}

module.exports = DuplicateError;
