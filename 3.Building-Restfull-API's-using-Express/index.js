// import express and assignm it to a variable to minimalist http request
const express = require('express');

//create a instance from express app
const app = express();

//check reponse for port 3000
app.get('/', (req, res) => {
  res.send('Hello world!!!');
});

//check reponse for 3000/api/courser
app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3, 4]);
});

app.listen(3000, () => {
  console.log('Listening to port 3000');
});
