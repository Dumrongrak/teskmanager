import { useState } from 'react'

function TaskForm({ onAddTask }) {
    const [taskName, setTaskName] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [priority, setPriority] = useState('Medium')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!taskName.trim()) return

        onAddTask({
            id: Date.now(),
            taskName,
            dueDate,
            priority,
        })

        setTaskName('')
        setDueDate('')
        setPriority('Medium')
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <h2>Add New Task</h2>
            <div className="form-group">
                <label>Task Name</label>
                <input
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    placeholder="Enter task name..."
                    required
                />
            </div>

            <div className="form-group">
                <label>Due Date</label>
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label>Priority</label>
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>

            <button type="submit">Add Task</button>
        </form>
    )
}

export default TaskForm