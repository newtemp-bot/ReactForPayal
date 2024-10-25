import { useState } from 'react';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

const ToDoForm = () => {
  const [task, setTask] = useState('');

  const addTask = async (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    await addDoc(collection(db, 'todos'), {
      task,
      completed: false,
    });
    setTask('');
  };

  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default ToDoForm;
