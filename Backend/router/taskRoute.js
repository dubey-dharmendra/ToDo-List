
const express = require('express')
const verifyToken = require('../middileware/verifyToken');
const { createTask, getAllTaskByUserId, updateTask, deleteTask } = require('../controller/taskController');


const router = express.Router();


router.post('/createTask', verifyToken, createTask)
router.get('/get-task/:id', verifyToken, getAllTaskByUserId);
router.patch('/update/:id', verifyToken, updateTask);
router.delete('/delete/:id', verifyToken, deleteTask);


module.exports = router;