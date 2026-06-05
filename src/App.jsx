import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim() === "") return;

    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="parent">
      <input
        type="text"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />

      <button onClick={addTodo}>
        Add
      </button>

      <div className="todo-list">
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
      </div>
    </div>
  );
};

export default App;