'use strict';

const p = Promise.reject(new Error('rejected'));

p.catch((err) => {
  console.log(err.message);
  console.log(err);
});
