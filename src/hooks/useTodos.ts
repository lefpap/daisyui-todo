import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Pagination, TodoCriteria } from "../lib/types";

function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }

  return context;
}

export function useTodos() {
  const { todos } = useTodoContext();

  const getTodos = (criteria?: TodoCriteria, pagination?: Pagination) => {
    let todosToReturn = todos;

    // Filter todos by search term
    if (criteria?.searchTerm) {
      const searchTerm = criteria.searchTerm.trim();
      todosToReturn = todosToReturn.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter todos by filter type
    switch (criteria?.filter) {
      case "active":
        todosToReturn = todosToReturn.filter((todo) => !todo.completed);
        break;
      case "completed":
        todosToReturn = todosToReturn.filter((todo) => todo.completed);
        break;
      default:
        break;
    }

    // Find total number of todos after filtering
    const total = todosToReturn.length;

    // Paginate todos
    if (pagination) {
      const { page, size } = pagination;
      const startIndex = (page - 1) * size;
      todosToReturn = todosToReturn.slice(startIndex, startIndex + size);
    }

    return { todos: todosToReturn, total };
  };

  return { getTodos };
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
