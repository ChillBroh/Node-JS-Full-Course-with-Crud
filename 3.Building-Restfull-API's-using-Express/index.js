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

//after deploys the port dynamically asign and not as exactly 3000. so below code must improve
// app.listen(3000, () => {
//   console.log('Listening to port 3000');
// });
app.get('/api/courses/:id', (req, res) => {
  const UID = req.params.id;
  res.send(UID);
});

//multi parameters
app.get('/api/posts/:id/:years/:months', (req, res) => {
  const UID = req.params.id;
  const years = req.params.years;
  const months = req.params.months;
  res.send(`ID is : ${UID}, Years are : ${years}, Months are : ${months}`);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
