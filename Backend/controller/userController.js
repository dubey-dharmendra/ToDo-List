
const User = require('../models/userModel');


exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password }).select(" name email");
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = await user.generateAuthToken(); // Assuming you have a method to generate token
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};