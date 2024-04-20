import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./app/store"; 
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import ThemeToggle from "./components/ThemeToggle";
import { clearCompleted } from "./todoSlice";
import "./index.css";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [filter, setFilter] = useState("all");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleClearCompleted = () => {
    store.dispatch(clearCompleted());
  };

  
  return (
    <Provider store={store}>
      <div className={`${theme} transition-colors duration-500`}>
        {" "}
       
        <div className="container mx-auto p-4">
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              TODO
            </h1>
            <ThemeToggle toggleTheme={toggleTheme} />
          </header>
          <AddTodoForm />
          <TodoList filter={filter} />
          <footer className="flex justify-between items-center p-4">
            <FilterButtons filter={filter} setFilter={setFilter} />
            <button onClick={handleClearCompleted} className="...">
              Clear Completed
            </button>
          </footer>
        </div>
      </div>
    </Provider>
  );
};

export default App;
