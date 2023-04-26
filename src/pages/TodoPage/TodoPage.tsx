import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TodoItem from "../../components/TodoItem";
import AddTodo from "../../components/AddTodo";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../../services/todosApi";
import { logoutUserService } from "../../services/usersApi";

function TodoPage() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = (): void => {
    getTodos()
      .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
      .catch((err: Error) => console.log(err));
  };

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
    e.preventDefault();
    addTodo(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Todo not saved");
        }
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateTodo = (todo: ITodo): void => {
    updateTodo(todo)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not updated");
        }
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteTodo = (_id: string): void => {
    deleteTodo(_id)
      .then(({ status, data }) => {
        if (status != 200) {
          throw new Error("Error! Todo not updated");
        }
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };

  const onLogout = () => {
    logoutUserService();
    navigate("/login", { replace: true });
  };

  return (
    <main className="App">
      <button className="ExitBtn" type="button" onClick={onLogout}>
        Exit
      </button>
      <h1>My Todos</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      {todos.map((todo: ITodo) => (
        <TodoItem
          key={todo._id}
          updateTodo={handleUpdateTodo}
          deleteTodo={handleDeleteTodo}
          todo={todo}
        />
      ))}
    </main>
  );
}

export default TodoPage;
