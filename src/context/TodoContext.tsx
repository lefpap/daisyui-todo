import React, { createContext } from "react";
import { Todo } from "../lib/types";
import useLocalStorage from "../hooks/useLocalStorage";

type TodoContextType = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined
);

export function TodoProvider({ children }: React.PropsWithChildren) {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}
