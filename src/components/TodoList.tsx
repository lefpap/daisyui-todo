import { TODOS } from "../lib/data";
import Pagination from "./Pagination";
import TodoCriteria from "./TodoCriteria";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <div className="card bg-base-300 shadow-xl">
      <div className="card-body">
        <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
          {/* Title */}
          <h2 className="card-title">Todos</h2>
          {/* Search / Filters */}
          <TodoCriteria setFilter={() => {}} setSearchTerm={() => {}} />
        </div>

        <div className="divider my-0" />

        {/* Todo List */}
        <div className="flex-grow">
          <ul className="space-y-3">
            {TODOS.map((todo) => (
              <TodoItem key={todo.id} {...todo} />
            ))}
          </ul>
        </div>

        {/* Pagination */}
        <div className="card-actions justify-center">
          <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
        </div>
      </div>
    </div>
  );
}

export default TodoList;
