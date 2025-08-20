const Task = require('../models/taskModel');

exports.createTask = async (req, res) => {
    try {

        console.log(req.user)

        req.body.userId = req.user._id;
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllTaskByUserId = async (req, res) => {
    try {

        const userId = req.params.id;
        const tasks = await Task.find({ userId }).populate('userId', 'name email');
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};