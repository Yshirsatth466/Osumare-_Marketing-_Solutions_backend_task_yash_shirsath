const taskService = require('../services/TaskService');

const getAllTasks = (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    res.json(taskService.getAllTasks(page, limit));
};

const getTaskById = (req, res) => {
    const task = taskService.getTaskById(parseInt(req.params.id));
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
};

const createTask = (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    res.status(201).json(taskService.createTask(title, description));
};

const updateTask = (req, res) => {
    const { title, description } = req.body;
    const updatedTask = taskService.updateTask(parseInt(req.params.id), title, description);
    if (!updatedTask) return res.status(404).json({ error: 'Task not found' });
    res.json(updatedTask);
};

const deleteTask = (req, res) => {
    const deleted = taskService.deleteTask(parseInt(req.params.id));
    if (!deleted) return res.status(404).json({ error: 'Task not found' });
    res.status(204).send();
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };