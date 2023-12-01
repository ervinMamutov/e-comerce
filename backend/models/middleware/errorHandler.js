const errorHandler = (err, req, res, next) => {
  let status = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  //check for Mongoose Bad Object
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    message = 'Resource nod found';
    statusCode = 400;
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'production' ? '🚀' : err.stack,
  });
};

export default errorHandler;
