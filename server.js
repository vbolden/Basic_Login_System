const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const secret = process.env.JWT_SECRET;

// DATABASE CONNECTION

// MIDDLEWARE

// ROUTES
// app.get("/", (req, res) => {
//     res.send("TEST ROUTE");
// });

// PORT
app.listen(PORT, (req, res) => {
    console.log(`Server is running on PORT: ${PORT}`);
});