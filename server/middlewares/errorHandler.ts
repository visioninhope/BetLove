// class to help me include error status
class ExtendError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    // Set the prototype explicitly, as it's necessary in order to correctly inherit from Error
    Object.setPrototypeOf(this, ExtendError.prototype);
  }
}

const errorHandler = (status: number, message: string) => {
  const error: ExtendError = new ExtendError(status, message);
  error.status = status;
  error.message = message;
  return error;
};

export default errorHandler;
