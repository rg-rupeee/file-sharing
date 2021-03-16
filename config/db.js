require('dotenv').config();
const mongoose = require('mongoose');

function connectDB(){
  // database connection
  mongoose.connect(process.env.MONGO_CONNECTIION_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  });

  const connection = mongoose.connection;
  
  connection.once('open', ()=>{
    console.log('Database Connected Succesfully');
  }).catch(err => {
    console.log('Connection Failed', err);
  })
}


module.exports = connectDB;