import React from "react";
import {v4 as uuidv4} from "uuid";

const Form = ({ input, setInput, tasks, setTasks }) => {

    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setTasks([...tasks, {id: uuidv4(), title: input, completed: false}]);
        setInput("");
    }

    return (

        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="New Task..."
                className="task-input"
                value={input}
                required
                onChange={onInputChange}
            />
            <button className="add-button" type="submit">
                Add
            </button>
        </form>
    )
}

export default Form;