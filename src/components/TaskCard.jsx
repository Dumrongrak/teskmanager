function TaskCard({ task }) {
    return (
        <div className="task-card">
            <h3>{task.taskName}</h3>
            <p><strong>Due Date:</strong> {task.dueDate}</p>
            <p><strong>Priority:</strong> <span className="badge">{task.priority}</span></p>
        </div>
    )
}

export default TaskCard