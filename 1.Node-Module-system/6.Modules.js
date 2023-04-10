const path = require('path');
const os = require('os');
const fs = require('fs');

var pathObj = path.parse(__filename);
console.log(pathObj);
// {
//     root: 'c:\\',
//     dir: 'c:\\Users\\ishar\\Documents\\Languages\\Web\\Node\\2.Node-Package-manager',
//     base: '6.Modules.js',
//     ext: '.js',
//     name: '6.Modules'
//   }

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

console.log(`Total memory : ${totalMemory}`);
console.log(`Free memory  : ${freeMemory}`);
// Total memory : 8424132608
// Free memory  : 1537605632

let files = fs.readdirSync('./');
console.log(files);

let files2 = fs.readdir('./', function (err, files) {
  if (err) console.log('Error', err);
  else console.log('Results', files);
});
