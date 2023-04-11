const express = require('express');
const app = express();
app.use(express.json());

const genres = [
  { id: 1, name: 'Adventure' },
  { id: 2, name: 'Horror ' },
];

//add geners
app.post('/vidly.com/api/genres/add', (req, res) => {
  const Name = req.body.name;

  const newG = {
    id: genres.length + 1,
    name: Name,
  };
  genres.push(newG);
  res.status(200).send('Genre added');
});

//get
app.get('/vidly.com/api/genres/', (req, res) => {
  res.send(genres);
});

//get one
app.get('/vidly.com/api/genres/:id', (req, res) => {
  const check = genres.find((c) => c.id === parseInt(req.params.id));
  if (!check) res.send('No Genre found');

  res.send(check);
});

//update
app.put('/vidly.com/api/genres/update/:id', (req, res) => {
  const check = genres.find((c) => c.id === parseInt(req.params.id));
  if (!check) res.status(400).send('No Generes for this id');

  check.name = req.body.name;
  res.send(genres);
});

//delete
app.delete('/vidly.com/api/genres/delete/:id', (req, res) => {
  const check = genres.find((c) => c.id === parseInt(req.params.id));
  if (!check) res.status(400).send('No Generes for this id');

  const index = genres.indexOf(check);
  genres.splice(index, 1);
  res.send(genres);
});

//port
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listning to port ${port}`);
});
