const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },

    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true

    }
}, {
    versionKey: false,
    timestamps: true
});


const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
