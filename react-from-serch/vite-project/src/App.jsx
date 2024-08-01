import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // State for storing tasks, initialized with one task
  const [tasks, setTasks] = useState([
    { description: "this is description", id: Math.random() },
  ]);

  // State for storing input value
  const [input, setInput] = useState("");

  // State for controlling edit mode visibility
  const [showEdit, setShowEdit] = useState(false);

  // State for storing the value being edited
  const [editValue, setEditValue] = useState("");

  // State for storing the id of the task being edited
  const [editId, setEditId] = useState(null);

  // Function to update input state as user types
  let getTask = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  // Function to add a new task
  let addTask = () => {
    if (input.length != 0) {
      // Add new task to tasks array if input is not empty
      setTasks((prevTasks) => [
        ...prevTasks,
        { description: input, id: Math.random() },
      ]);
    } else {
      // Alert if input is empty
      alert("empty tasky");
    }
  };

  // Function to delete a task
  let deleteTask = (id) => {
    // Filter out the task with the given id
    setTasks((prevTasks) =>
      prevTasks.filter((task) => {
        if (task.id != id) return task;
      })
    );
  };

  // Function to save edited task
  let saveTask = () => {
    // Update the task with new description
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === editId ? { ...task, description: editValue } : task
      )
    );
    // Exit edit mode
    setShowEdit(false);
    setEditId(null);
  };

  return (
    <>
      {/* Input field for new task */}
      <input type="text" onChange={getTask} />
      {/* Button to add new task */}
      <button onClick={addTask}>Add</button>

      {/* Map through tasks and render each */}
      {tasks.map((item) => (
        <div key={item.id}>
          {/* Show input field if in edit mode, else show description */}
          {showEdit && editId === item.id ? (
            <input
              type="text"
              onChange={(e) => setEditValue(e.target.value)}
              value={editValue}
            />
          ) : (
            item.description
          )}
          {/* Button to enter edit mode */}
          <button
            onClick={() => {
              setEditValue(item.description);
              setShowEdit(true);
              setEditId(item.id);
            }}
          >
            Edit
          </button>
          {/* Show Save button if in edit mode */}
          {showEdit && editId === item.id ? (
            <button onClick={saveTask}>Save</button>
          ) : null}
          {/* Button to delete task */}
          <button onClick={() => deleteTask(item.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
