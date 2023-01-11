const Todo = require("../models/TodoSchema");

const getAllTodos = async (req, res) => {
  try {
    const todo = await Todo.find({});
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTodo = async (req, res) => {
  try {
    const { text, completed } = req.body;
    if (!text) {
      return res.status(400).json({ error: "Need a text for the todo!" });
    }
    const todoCreate = await Todo.create({ text, completed });
    res.status(201).json({ todoCreate });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const editTodo = async (req, res) => {
  try {
    const { id: todoId } = req.params;
    const todo = await Todo.findOne({ _id: todoId });

    todo.completed ? todo.completed = false : todo.completed = true;
    await todo.save();

    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id: todoId } = req.params;
    const todo = await Todo.findOneAndDelete({ _id: todoId });

    if (!todo) {
      res.status(404).json({ msg: `No todo with this id: ${todoId}` });
    }

    res.status(200).json({ todo: null, status: "Success" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  deleteTodo,
  editTodo,
};
