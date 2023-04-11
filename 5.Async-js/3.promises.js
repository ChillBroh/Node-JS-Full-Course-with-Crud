'use strict';

const promiseEx = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1); //fullfilled
    reject(new Error('Error Message')); //failed
  }, 2000);
});

promiseEx
  .then((res) => console.log('Result', res))
  .catch((err) => console.log(err.message));
