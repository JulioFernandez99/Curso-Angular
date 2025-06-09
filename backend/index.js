const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const FILE_PATH = './tasks.json';

// Leer tareas
app.get('/tasks', (req, res) => {
  const data = fs.readFileSync(FILE_PATH, 'utf8');
  res.json(JSON.parse(data));
});

// Agregar tarea
app.post('/tasks', (req, res) => {
  const newTask = req.body;
  const tasks = JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));
  tasks.push(newTask);
  fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));
  res.status(201).json(newTask);
});

app.listen(3000, () => {
  console.log('API corriendo en http://localhost:3000');
});
