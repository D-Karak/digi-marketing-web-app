const mongoose = require('mongoose');

// This file only handles the connection logic to the MongoDB Atlas Database.
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {});

        console.log(`✅ MongoDB Successfully Connected!: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
