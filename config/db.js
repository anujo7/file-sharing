require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    // Database connection 


    mongoose.connect(
        process.env.MONGO_CONNECTION_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(
        () => {
            console.log("Connected to MongoDB");
        }).catch(e => console.log(e));
}

// EBSpmcZzxK4kzUwQ

module.exports = connectDB;