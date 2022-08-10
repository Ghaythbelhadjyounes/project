const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("DataBase connected ...");
  } catch (error) {
    console.log("Can not connect with DB !!!", error);
  }
};

module.exports = connectDB;
