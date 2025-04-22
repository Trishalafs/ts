const Todo = require('../models/Todo');

exports.getTodos = async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
};

exports.createTodo = async (req, res) => {
    const newTodo = new Todo(req.body);
    const saved = await newTodo.save();
    res.status(201).json(saved);
};

exports.deleteTodo = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(204).end();
};

exports.toggleTodo = async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    todo.completed = !todo.completed;
    await todo.save();
    res.json(todo);
};
