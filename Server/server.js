// Load env variables FIRST — before anything else 
const dotenv = require('dotenv') 
dotenv.config()


const express = require('express');
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser")

const app = express();

//routes 
const authRouter = require('./routes/auth')

// Middleware to parse JSON request bodies
app.use(express.json());
// Middleware to parse cookies from incoming requests
app.use(cookieParser());



app.use("/", authRouter);


const port = process.env.PORT || 5000;

// Start the server
connectDB().then(() => {
    console.log("Connected to MongoDB!!");

    app.listen(port, () => {
        console.log(`API is running on port ${port}`);
    });
}).catch((err) => {
    console.error("Failed to connect to DB:", err.message);
});