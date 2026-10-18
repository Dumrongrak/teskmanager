import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskCard from './components/TaskCard'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  const handleAddTask = (newTask) => {
    setTasks([newTask, ...tasks])
  }

  return (
      <div className="app-container">
        <header>
          <h1>Task Manager</h1>
        </header>

        <div className="main-layout">
          <div className="left-side">
            <TaskForm onAddTask={handleAddTask} />
          </div>

          <div className="right-side">
            <h2>Tasks List</h2>
            {tasks.length === 0 ? (
                <p className="no-tasks">No tasks added yet.</p>
            ) : (
                <div className="task-list">
                  {tasks.map((task) => (
                      <TaskCard key={task.id} task={task} />
                  ))}
                </div>
            )}
          </div>
        </div>
      </div>
  )
}

export default App