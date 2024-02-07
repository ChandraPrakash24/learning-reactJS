import { useState } from "react";

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [todo, setTodo] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodo((prevTodo) => [
      ...prevTodo,
      { id: crypto.getRandomValues(), title: newTask, completed: false },
    ]);
    setNewTask("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="todo-list">
        <div className="form-row">
          <label htmlFor="add-task">New Task</label>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            id="add-task"
          />
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todo.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => {
                  setTodo((prevTodo) =>
                    prevTodo.map((todoItem) =>
                      todoItem.id === item.id
                        ? { ...todoItem, completed: !todoItem.completed }
                        : todoItem
                    )
                  );
                }}
              />
              {item.title}
            </label>
            <button className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
