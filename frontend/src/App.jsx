
import React, { useState } from "react";
import "./App.css";
import Sidebar from "./component/Sidebar";
import Weather from "./component/Weather";
import getTodayString from "./component/Today";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input.trim()]);
      setInput("");
      setShowInput(false);
    }
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="date-display">
        {getTodayString()}
      </div>
      <div className="main">
        <button
          id="addTaskButton"
          className="btn add-task"
          onClick={() => setShowInput(true)}
        >
          할일추가
        </button>
        {showInput && (
          <div className="task-input-box">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="새로운 할일을 입력하세요..."
              className="task-input"
            />
            <button
              onClick={handleAddTask}
              className="task-add-btn"
            >
              추가
            </button>
          </div>
        )}
        <ul className="task-list">
          {tasks.map((task, idx) => (
            <li key={idx} className="task-item">
              {task}
            </li>
          ))}
        </ul>
      </div>
      <Weather />
    </div>
  );
}
export default App;