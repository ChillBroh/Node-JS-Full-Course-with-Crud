var url = 'http://mylogger.io/log'; //this is private

function log(message) {
  //send http request
  console.log(message);
}

module.exports.log = log; //send log function in module object, exports, log method
module.exports.endPoint = url; //this is public. outside files can access this using require

console.log(module);
