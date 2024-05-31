const logRequest = (req, res, next) => {
  console.log('Request log', req.path);
  next()
}

module.exports = logRequest;