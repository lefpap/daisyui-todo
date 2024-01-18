import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import TodoCriteriaSelector from "./components/TodoCriteriaSelector";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";
import { TodoCriteria, TodoFilter } from "./lib/types";
import useDelayedState from "./hooks/useDelayedState";
import StatsModal from "./components/TodoStats";

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

  const handleOpenModal = (): void => {
    const modal = document?.getElementById("stats") as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <>
      <StatsModal />
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
                <div className="flex w-full items-center justify-between gap-3">
                  <h2 className="card-title">Todos</h2>
                  <div className="tooltip" data-tip="View Stats">
                    <button className="btn btn-ghost" onClick={handleOpenModal}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
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
    </>
  );
}

export default App;
