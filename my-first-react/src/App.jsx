
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task === "") return;

    setTasks([...tasks, task]);
    setTask("");
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>Students List</h1>

      <input style={{backgroundColor:'orange'}}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Student Name"
      />

      <button style={{backgroundColor:'greenyellow'}} onClick={addTask}>Add</button>
         <h2>Students:</h2>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            <button style={{backgroundColor:'red'}} onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

