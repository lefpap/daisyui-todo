import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import TodoCriteria from "./components/TodoCriteria";
import TodoList from "./components/TodoList";
import { useTodoActions, useTodos } from "./hooks/useTodos";

function App() {
  const { getTodos, setFilter, setSearchTerm } = useTodos();
  const { addTodo } = useTodoActions();
  return (
    <div className="h-screen grid grid-rows-[auto_1fr]">
      {/* Header */}
      <Header title="Todon't" />

      {/* Main */}
      <main className="container grid grid-rows-[auto_1fr] my-3">
        <AddTodo onAddTodo={addTodo} />
        <div className="card bg-base-300 shadow-xl">
          <div className="card-body">
            <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
              {/* Title */}
              <h2 className="card-title">Todos</h2>
              {/* Search / Filters */}
              <TodoCriteria
                setFilter={setFilter}
                setSearchTerm={setSearchTerm}
              />
            </div>

            <div className="divider my-0" />

            {/* Todo List */}
            <div className="flex-grow">
              <TodoList todos={getTodos()} />
            </div>

            {/* Pagination */}
            <div className="card-actions justify-center">
              <Pagination
                currentPage={1}
                totalPages={5}
                onPageChange={() => {}}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
