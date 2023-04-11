const express = require('express');
//importing custom middleware fucntion
const logger = require('./middleware/logger');

//import routes
const courses = require('./Routes/courses');
const home = require('./Routes/home');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //accept request even it url encoded
app.use(express.static('public')); //catch static content
app.use(logger.log);

app.use((req, res, next) => {
  console.log('Authenticating....');
  next();
});

//routing
app.use('/api/courses', courses);
app.use('/', home);

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening of port ${port}`);
});
