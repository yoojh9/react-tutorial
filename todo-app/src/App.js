import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodo("");
    // react.js modifier에서 함수를 인수로 받을 때는 함수의 첫번쨰 argument로 현재 state 값을 넣어줌.
    setTodos(currentArray => [...currentArray, todo])
  };

  return (
    <div>
      <h1>My To Do List ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={todo} onChange={onChange} placeholer="Write your to do..." />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
    </div>
  );
}

export default App;
