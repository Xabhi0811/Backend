
    
 const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load .env file

const connectDB = async () => {
  try {
    await mongoose.connect(process.env. DATA_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected Successfully');
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error.message);
    process.exit(1); // Exit on failure
  }
};

module.exports = connectDB;
