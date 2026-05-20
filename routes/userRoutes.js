const userRouter = require('express').Router();
const User = require('../models/User');

userRouter.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // CHECK IF USER EXISTS
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                error: "A user with this email already exists"
            });
        }

        // CREATE NEW USER
        const newUser = await User.create(req.body);

        // SUCCESS RESPONSE
        res.status(201).json({
            username: newUser.username,
            email: newUser.email
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = userRouter;