import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TasksList from './components/TasksList';

const App = () => {

  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            tasks={tasks}
            setTasks={setTasks}
          />
        </div>
        <div>
          <TasksList tasks={tasks} setTasks={setTasks}/>
        </div>
      </div>
    </div>
    );
}

export default App;
