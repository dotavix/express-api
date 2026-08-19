let tasks = [
  {
    id: 1,
    title: "Tarea 1",
    completed: false,
  },
  {
    id: 2,
    title: "Tarea 2",
    completed: true,
  },
];

const getAllTask = (req, res) => {
  res.json({ tasks });
};

const getTask = (req, res) => {
  let id = parseInt(req.params.id);
  let taskIndex = tasks.find((task) => task.id === id);

  if (taskIndex === -1) {
    res.status(404).json({ error: true, message: "Tarea no existe." });
  } else {
    res.json({ task: tasks[taskIndex] });
  }
};

const addTask = (req, res) => {
  let { title } = req.body;
  let id = tasks.length + 1;
  tasks.push({ id, title, completed: false });
  res.json({ error: false, message: "Tarea agregada exitosamente." });
};

const editTaskForm = (req, res) => {
  let id = parseInt(req.params.id);
  let taskIndex = tasks.find((task) => task.id === id);

  if (taskIndex === -1) {
    res.status(404).json({ error: true, message: "Tarea no existe." });
  } else {
    task[taskIndex].title = req.body.title;
    res.json({ error: false, message: "La tarea editada exitosamente." });
  }
};

const completeTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);
  if (task) {
    task.completed = true;
    res.json({ error: false, message: "Tarea completada exitosamente." });
  } else {
    res.status(404).json({ error: true, message: "La tarea no existe." });
  }
};

const uncompleteTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);

  if (task) {
    task.completed = false;
    res.json({ error: false, message: "Tarea cambio a sin completar." });
  } else {
    res.status(404).json({ error: true, message: "La tarea no existe." });
  }
};

const deleteTask = (req, res) => {
  let id = parseInt(req.params.id);
  let foundTask = tasks.findIndex((task) => task.id === id);
  if (foundTask) {
    tasks.splice(foundTask, 1);
    res.json({ error: false, message: "La tarea fue eliminada." });
  }
};

export default {
  getTask,
  getAllTask,
  completeTask,
  deleteTask,
  editTaskForm,
  uncompleteTask,
  addTask,
};
