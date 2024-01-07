import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr]">
      {/* Header */}
      <Header title="Todon't" />

      {/* Main */}
      <main className="container grid grid-rows-[auto_1fr] my-3">
        <AddTodo onAddTodo={(title) => console.log(title)} />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
