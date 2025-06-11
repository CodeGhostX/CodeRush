function ErrorResponse() {
  return {
    message: "Something went wrong",
    success: false,
    data: [],
    error: {}
  };
}

module.exports = ErrorResponse;