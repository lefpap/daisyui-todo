import { Todo } from "../lib/types";
import TodoItem from "./TodoItem";

type Props = {
  todos: Todo[];
};

function TodoList({ todos }: Props) {
  if (todos.length === 0) {
    return <p className="text-base-content/50">There is nothing todo now...</p>;
  }

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;
