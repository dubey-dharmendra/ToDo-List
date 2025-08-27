const Task = require('../models/taskModel');

exports.createTask = async (req, res) => {
    try {


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

exports.updateTask = async (req, res) => {
    try {

        const _id = req.params.id;
        const updatedTask = await Task.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true })
        res.status(200).json({ msg: 'Task upadated successfully', updatedTask });
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};


exports.deleteTask = async (req, res) => {
    try {

        const _id = req.params.id;
        await Task.findByIdAndDelete(_id)
        res.status(200).json({ msg: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};