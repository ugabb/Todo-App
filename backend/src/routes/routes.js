const { 
    getAllTodos,
    createTodo,
    editTodo,
    deleteTodo

} = require('../controllers/todo')

const express = require('express');
const router = express.Router();

router.route('/').get(getAllTodos).post(createTodo);
router.route('/:id').patch(editTodo).delete(deleteTodo);

module.exports = router;