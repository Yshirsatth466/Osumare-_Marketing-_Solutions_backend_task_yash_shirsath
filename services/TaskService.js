const Task = require('../models/Task');

class TaskService {
    constructor() {
        this.tasks = [];
        this.currentId = 1;
    }

    getAllTasks(page = 1, limit = 10) {
        const startIndex = (page - 1) * limit;
        return this.tasks.slice(startIndex, startIndex + parseInt(limit));
    }

    getTaskById(id) {
        return this.tasks.find(task => task.id === id);
    }

    createTask(title, description) {
        const newTask = new Task(this.currentId++, title, description);
        this.tasks.push(newTask);
        return newTask;
    }

    updateTask(id, title, description) {
        const task = this.getTaskById(id);
        if (!task) return null;
        if (title) task.title = title;
        if (description) task.description = description;
        return task;
    }

    deleteTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index === -1) return false;
        this.tasks.splice(index, 1);
        return true;
    }
}

module.exports = new TaskService();
