const express = require('express');
const router = express.Router();
//const router = express() not working when there is separate routes

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
];

//get a one course
router.get('/:id', (req, res) => {
  const result = courses.find((c) => c.id === parseInt(req.params.id));

  if (result) res.status(200).send(result);
  else res.status(404).send('Sorry there is no such course');
});

//create course
router.post('/create', (req, res) => {
  if (!req.body.name || req.body.name.length <= 3) {
    //400 bad request
    return res
      .status(400)
      .send('Name is empty or should be more than three charachters');
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(courses);
});

//update course
router.put('/update/:id', (req, res) => {
  //check course is available or not
  const check = courses.find((c) => c.id === parseInt(req.params.id));
  if (!check) res.status(404).send('Course ID is not match');

  check.name = req.body.name;
  res.status(200).send(check);
});

//delete course
router.delete('/delete/:id', (req, res) => {
  //check availability
  const check = courses.find((c) => c.id === parseInt(req.params.id));
  if (!check) res.status(404).send('Course ID not match');

  const index = courses.indexOf(check);
  courses.splice(index, 1);

  res.send(courses);
});
module.exports = router;
