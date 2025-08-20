
const express = require('express')
const verifyToken = require('../middileware/verifyToken');
const { createTask, getAllTaskByUserId } = require('../controller/taskController');


const router = express.Router();


router.post('/createTask', verifyToken, createTask)
router.get('/get-task/:id', getAllTaskByUserId);


module.exports = router;