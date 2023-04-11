const mongoose = require('mongoose');
//URL to mongodb cluster
const mongo =
  'mongodb+srv://ChillBroh98:Chill98@ishara.xc2juao.mongodb.net/Mosh?retryWrites=true&w=majority';

//connection
const connectDB = async () => {
  try {
    const con = await mongoose.connect(mongo);
    console.log('Successfully connected to mongoDB');
  } catch (err) {
    console.log('Connection error : ', err.message);
  }
};

connectDB();

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

//compile schema to a model
const Course = mongoose.model('Course', courseSchema);

//create object and map with document in mongodb database
const createCourse = async () => {
  try {
    const course = new Course({
      name: 'React.js Course',
      author: 'Ishara',
      tags: ['React', 'Frontend'],
      isPublished: true,
    });

    const result = await course.save();
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
};
createCourse();
