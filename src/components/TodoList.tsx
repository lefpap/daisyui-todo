import { Todo } from "../lib/types";
import TodoItem from "./TodoItem";

type Props = {
  todos: Todo[];
};

function TodoList({ todos }: Props) {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;
