import { useState } from "react";

const TodoAdd = ({createTodo}) => {
  const [title, setTitle] = useState('');
const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      return setTitle("");
    }
    createTodo(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className="flex items-center gap-3 overflow-hidden rounded-md bg-white px-4 py-4 dark:bg-gray-800 dark:text-gray-400 transition-all duration-1000"
    >
      <span className="inline-block h-5 w-5 rounded-full border-2"></span>
      <input
        type="text"
        placeholder="Create a new todo......."
        className="w-full text-gray-400 outline-none dark:bg-gray-800 dark:text-gray-400 transition-all duration-1000"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};
export default TodoAdd;
