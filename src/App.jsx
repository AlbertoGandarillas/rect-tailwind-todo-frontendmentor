import { useEffect, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import Header from "./components/Header";
import TodoAdd from "./components/TodoAdd";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
// const initialStateTodos = [
//   {
//     id: 1,
//     title: "Complete online JavaScript course",
//     completed: true,
//   },
//   {
//     id: 2,
//     title: "Jog around the park 3x",
//     completed: false,
//   },
//   {
//     id: 3,
//     title: "10 minutes meditation",
//     completed: true,
//   },
//   {
//     id: 4,
//     title: "Read for 1 hour",
//     completed: false,
//   },
// ]
const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];
const reOrder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);
  useEffect(() => {
    localStorage.setItem(todos, JSON.stringify(todos));
  }, [todos]);
  const [filter, setFilter] = useState("all"); // ["all", "active", "completed"
  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filterTodos = () => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  const handleDragEnd = (result) => {
    const {destination, source} = result;
    if(!destination) return;
    if( source.index === destination.index && source.droppableId.droppableId) return;
    setTodos((prevTasks) => reOrder(prevTasks, source.index, destination.index));
  };

  return (
    <div className="main-h-screen md:bg-[url('./assets/images/bg-desktop-light.jpg') dark:bg-[url('./assets/images/bg-mobile-dark.jpg') dark:md:bg-[url('./assets/images/bg-desktop-dark.jpg') bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:text-gray-400">
      <Header />
      <main className="md:max-w-x1 container mx-auto mt-8 px-4">
        <TodoAdd createTodo={createTodo} />
        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList
            todos={filterTodos()}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
          />
        </DragDropContext>
        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        />
        <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main>
      <p className="mt-8 text-center dark:bg-gray-900">
        Drag and drop to reorder list
      </p>
    </div>
  );
};
export default App;
