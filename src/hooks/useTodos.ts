import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoFilter } from "../lib/types";

function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }

  return context;
}

export function useTodos() {
  const { todos } = useTodoContext();
  const todosCount = todos.length;
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const [filter, setFilter] = useState<TodoFilter>("all");

  const getTodos = () => {
    let todosToReturn = todos;

    if (searchTerm) {
      todosToReturn = todosToReturn.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    switch (filter) {
      case "active":
        todosToReturn = todosToReturn.filter((todo) => !todo.completed);
        break;
      case "completed":
        todosToReturn = todosToReturn.filter((todo) => todo.completed);
        break;
      default:
        break;
    }

    return todosToReturn;
  };

  return { getTodos, todosCount, setSearchTerm, setFilter };
}

export function useTodoActions() {
  const { todos, setTodos } = useTodoContext();

  const addTodo = (title: string) => {
    const newTodo = {
      id: Date.now().valueOf(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const toggleAllTodos = (completed: boolean) => {
    setTodos(todos.map((todo) => ({ ...todo, completed })));
  };

  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const editTodo = (id: number, title: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)));
  };

  return {
    addTodo,
    deleteTodo,
    toggleTodo,
    toggleAllTodos,
    clearCompletedTodos,
    editTodo,
  };
}
