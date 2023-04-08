import React from "react";

const TasksList = ({ tasks, setTasks }) => {

    const handleDelete = ({id}) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div>
            {tasks.map((task) => (
                <li className="list-item" key={task.id}>
                    <input
                        type="text"
                        value={task.title}
                        className="list"
                        onChange={(event) => event.preventDefault()}
                    />
                    <div>
                        <button className="complete-button task-button">
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button className="edit-button task-button">
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