import React from "react";

const TasksList = ({ tasks, setTasks, setEditTask }) => {

    const handleDelete = ({id}) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const handleComplete = (task) => {
        setTasks(
            tasks.map((item) => {
                if (item.id === task.id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    };

    const handleEdit = ({id}) => {
        const findTask = tasks.find((task) => task.id === id);
        setEditTask(findTask);
    };

    return (
        <div>
            {tasks.map((task) => (
                <li className="list-item" key={task.id}>
                    <input
                        type="text"
                        value={task.title}
                        className={`list ${task.completed ? "complete" : ""}`}
                        onChange={(event) => event.preventDefault()}
                    />
                    <div>
                        <button className="complete-button task-button" onClick={() => handleComplete(task)}>
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button className="edit-button task-button" onClick={() => handleEdit(task)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="delete-button task-button" onClick={() => handleDelete(task)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default TasksList;