import { useState, useEffect } from "react";
import Header from "./header";
import Msg from "./msg";
import "./App.css";
import usePrint from "./CostHook";
function App() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([
    { name: "ali", age: 56 },
    { name: "rick", age: 79 },
    { name: "owen", age: 23 },
  ]);
  let getUser = (event) => {
    let inputUser = event.target.value;
    setName(inputUser);
  };
  let addUser = () => {
    let data = users;
    data.push({ name: name, id: Math.random });
    console.log(data, "updated!");
    let newUsers = { ...data };
    setUsers([...data]);
  };
  useEffect(() => {
    console.log("component is rerendering");
  });
  return (
    <div className="">
      <input type="text" onChange={getUser} />
      {name}
      <button onClick={addUser}>Add</button>
      {users.map((user) => (
        <div key={user.name}>{user.name}</div>
      ))}
    </div>
  );
}

export default App;
