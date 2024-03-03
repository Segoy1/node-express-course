const Task = require('../models/task')

async function getAllTasks(req, res) {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks});
    } catch (err) {
        res.status(500).json({msg: err})
    }
}

async function createTask(req, res) {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task});
    } catch (err) {
        res.status(500).json({msg: err})
    }
}

async function getTask(req, res) {
    try {
        const {id: taskId} = req.params;
        const task = await Task.findOne({_id: taskId})
        if (!task) {
            return res.status(404).json({msg: `No Task with id:${taskId}`})
        }
        res.status(200).json({task});
    } catch (err) {
        res.status(500).json({msg: err})
    }
}


async function deleteTask(req, res) {
    try {
        const {id: taskId} = req.params;
        const task = await Task.findOneAndDelete({_id: taskId})
        if (!task) {
            return res.status(404).json({msg: `No Task with id: ${taskId}`})
        }
        res.status(200).json({task});
    } catch (err) {
        res.status(500).json({msg: err})
    }
}

async function updateTask(req, res) {
    try {
        const {id: taskId} = req.params;
        const body = req.body;

        const task = await Task.findOneAndUpdate({_id: taskId}, body, {
            new: true, runValidators: true
        })
        if (!task) {
            return res.status(404).json({msg: `No Task with id: ${taskId}`})
        }
        res.status(200).json({task});
    } catch (err) {
        res.status(500).json({msg: err})
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
