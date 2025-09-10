class InvalidCpfError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidCpfError";
    this.statusCode = 422; // Unprocessable Entity
  }
}

module.exports = InvalidCpfError;
