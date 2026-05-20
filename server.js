const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const userRouter = require('./routes/userRoutes');

// DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Mongo connected'))
    .catch((error) => console.log(error.message));


// MIDDLEWARE
app.use(express.json());

// ROUTES
// app.get("/", (req, res) => {
//     res.send("TEST ROUTE");
// });
// USERROUTER MOUNT
app.use("/api/users", userRouter);

// PORT
app.listen(PORT, (req, res) => {
    console.log(`Server is running on PORT: ${PORT}`);
});