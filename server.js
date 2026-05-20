const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const PORT = process.env.PORT;
const secret = process.env.JWT_SECRET;

// DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URI);

const connectdb = mongoose.connection;
connectdb.on('error', (err) => console.log(err.message + ' is mongo not running?'));
connectdb.on('connected', () => console.log('mongo connected'));
connectdb.on('disconnected', () => console.log('mongo disconnected'));


// MIDDLEWARE

// ROUTES
// app.get("/", (req, res) => {
//     res.send("TEST ROUTE");
// });

// PORT
app.listen(PORT, (req, res) => {
    console.log(`Server is running on PORT: ${PORT}`);
});