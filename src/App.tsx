import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import TodoCriteriaSelector from "./components/TodoCriteriaSelector";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";
import { TodoCriteria, TodoFilter } from "./lib/types";
import useDelayedState from "./hooks/useDelayedState";

const PAGE_SIZE = 8;

function App() {
  const { getTodos } = useTodos();

  const [searchTerm, setSearchTerm] = useDelayedState("", 500);
  const [filter, setFilter] = useState<TodoFilter>("all");
  const criteria: TodoCriteria = { searchTerm, filter };

  const [page, setPage] = useState(1);

  useEffect(() => {}, [searchTerm, filter, page]);

  const { todos, total } = getTodos(criteria, { page, size: PAGE_SIZE });

  const handleSetSearchTerm = (term: string) => {
    setSearchTerm(term.trim());
    setPage(1);
  };

  const handleSetFilter = (filter: TodoFilter) => {
    setFilter(filter);
    setPage(1);
  };

  return (
    <div className="h-screen grid grid-rows-[auto_1fr]">
      {/* Header */}
      <Header title="Todon't" />

      {/* Main */}
      <main className="container grid grid-rows-[auto_1fr] my-3">
        <AddTodo />
        <div className="card bg-base-300 shadow-xl">
          <div className="card-body">
            <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
              {/* Title */}
              <h2 className="card-title">Todos</h2>
              {/* Todo Criteria */}
              <TodoCriteriaSelector
                setFilter={handleSetFilter}
                setSearchTerm={handleSetSearchTerm}
              />
            </div>

            <div className="divider my-0" />

            {/* Todo List */}
            <div className="flex-grow">
              <TodoList todos={todos} />
            </div>

            {/* Pagination */}
            <div className="card-actions justify-center">
              <Pagination
                currentPage={page}
                pageSize={PAGE_SIZE}
                totalItems={total}
                onPageChange={setPage}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
