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
