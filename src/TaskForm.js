// TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;