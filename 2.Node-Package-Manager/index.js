/*jshint esversion: 6 */
let _ = require('underscore');

//require function resolve module using below steps
/*first it check is this a core module, then check a file of folder, if not check inside the node_modules */

//this contains check if the given value availble or not
const results = _.contains([1, 2, 3], 5);
console.log(results);
