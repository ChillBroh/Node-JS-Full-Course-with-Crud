'use strict';

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async operation 1 .....');
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Async operation 2 .....');
    resolve(2);
  }, 2000);
});

//both started at the sametime
Promise.all([p1, p2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));

Promise.all([p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));

//this will return as soon as one resolved
Promise.race([p1, p2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));
