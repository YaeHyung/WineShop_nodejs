require("dotenv").config();
const mongoose = require('mongoose');

async function connect(){
  try {
    await mongoose.connect("mongodb://localhost:27017/wineshop",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected');
  } catch (error) {
    console.log(error);
  }
}

module.exports = {connect};
