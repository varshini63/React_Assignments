import React, { createContext, useState, useContext } from 'react';

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};


const useTasks = () => useContext(TasksContext);

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const { tasks, setTasks } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    
    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };
    
    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  return (
    <div className="add-task">
      <h3>Add New Task</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task..."
          className="task-input"
        />
        <button type="submit" className="add-button">Add Task</button>
      </form>
    </div>
  );
};


const TasksList = () => {
  const { tasks, setTasks } = useTasks();

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="tasks-list">
      <h3>Your Tasks</h3>
      {tasks.length === 0 ? (
        <p>No tasks yet. Add some tasks to get started!</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span>{task.text}</span>
              <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const TasksCount = () => {
  const { tasks } = useTasks();
  
  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="tasks-count">
      <h3>Tasks Statistics</h3>
      <p>Total tasks: {totalCount}</p>
      <p>Completed tasks: {completedCount}</p>
      <p>Pending tasks: {totalCount - completedCount}</p>
    </div>
  );
};

const ManageTasks = () => {
  return (
    <div className="manage-tasks">
      <AddTask />
      <TasksList />
      <TasksCount />
    </div>
  );
};


const NinthAssignment = () => {
  return (
    <div className="todo-app">
      <h1>To-do App</h1>
      <TasksProvider>
        <ManageTasks />
      </TasksProvider>
      
      <style jsx="true">{`
        .todo-app {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        
        h1 {
          color: #4a7c59;
          text-align: center;
          margin-bottom: 30px;
        }
        
        .manage-tasks {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        
        .add-task, .tasks-list, .tasks-count {
          background-color: #f5f5f5;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        h3 {
          margin-top: 0;
          color: #4a7c59;
        }
        
        .task-input {
          width: 70%;
          padding: 8px;
          margin-right: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        
        button {
          padding: 8px 12px;
          background-color: #4a7c59;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        button:hover {
          background-color: #3d6b4a;
        }
        
        ul {
          list-style-type: none;
          padding: 0;
        }
        
        li {
          display: flex;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #eee;
        }
        
        li.completed span {
          text-decoration: line-through;
          color: #888;
        }
        
        li input[type="checkbox"] {
          margin-right: 10px;
        }
        
        li span {
          flex-grow: 1;
        }
        
        .delete-btn {
          background-color: #e74c3c;
          margin-left: 10px;
        }
        
        .delete-btn:hover {
          background-color: #c0392b;
        }
        
        @media (min-width: 768px) {
          .manage-tasks {
            grid-template-columns: 1fr 1fr;
          }
          
          .add-task {
            grid-column: 1;
          }
          
          .tasks-list {
            grid-column: 1 / span 2;
          }
          
          .tasks-count {
            grid-column: 2;
            grid-row: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default NinthAssignment;