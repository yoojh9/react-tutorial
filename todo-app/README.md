# Todo App

ReactJS modifier는 인자로 값을 직접 받거나, 함수를 받음.
함수를 인자로 받을 때는 함수의 첫번쨰 argument로 현재 state 값을 넣어준다.


```TypeScript
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodo("");
    setTodos(currentArray => [...currentArray, todo])
  };
```
