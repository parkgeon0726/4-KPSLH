// backend/src/routes/todos.js (에시)
const express = require('express');
const router = express.Router();

let todos = []; // 메모리 저장(초기 학습용)

router.get('/', (req, res) => {
  res.json(todos);
});

router.post('/', (req, res) => {
  const { text } = req.body;
  const newTodo = { id: Date.now(), text, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.map(t =>
    t.id === +id ? { ...t, completed: !t.completed } : t
  );
  res.json(todos.find(t => t.id === +id));
});

router.delete('/:id', (req, res) => {
  todos = todos.filter(t => t.id !== +req.params.id);
  res.status(204).end();
});

module.exports = router;