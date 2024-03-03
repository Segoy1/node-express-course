const Task = require('../models/task')

function getAllTasks(req, res) {
    res.send('all items from the file');
}

async function createTask(req, res) {
    try{
    const task = await Task.create(req.body)
    res.status(201).json({task});
    }catch(err){
        res.status(500).json({msg:err})
    }
}

function getTask(req, res) {
    res.json({id: req.params.id});
}

function updateTask(req, res) {
    res.send('update Task');
}

function deleteTask(req, res) {
    res.send('delete Task');
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
