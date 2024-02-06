// App.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, { id: tasks.length + 1, ...task }]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <TaskForm onSubmit={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default App;
