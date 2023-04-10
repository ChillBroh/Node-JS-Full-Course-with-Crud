const logger = require('./3.logger');

console.log(logger.endPoint); //logger exports endpoint and url.so we can catch them like this in here
logger.log('hello');

//if the export is module.export = log no need to access it with logger.log(), can dirrectly access as log()
