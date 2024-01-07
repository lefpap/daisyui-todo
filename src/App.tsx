import ThemeController from "./components/ThemeController";

function App() {
  return (
    <>
      <header className="container flex items-center justify-between py-2">
        <h1 className="text-2xl font-black">Todon't</h1>
        <ThemeController />
      </header>

      <main className="container">
        <form className="flex items-center justify-between py-2 gap-4">
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="What do you need to do?"
          />
          <button type="submit" className="btn btn-neutral">
            Add Task
          </button>
        </form>

        <div></div>
      </main>
    </>
  );
}

export default App;
