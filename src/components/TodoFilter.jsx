const TodoFilter = ({ filter, changeFilter }) => {
  return (
    <section className="container mx-auto mt-8 px-4">
      <div className="flex justify-center gap-4 rounded-md bg-white px-4 py-4 transition-all duration-1000 dark:bg-gray-800 dark:text-gray-400">
        <button
          className={`hover:text-blue-600 ${
            filter === "all" && "text-blue-600"
          }`}
          onClick={() => changeFilter("all")}
        >
          All
        </button>
        <button
          className={`hover:text-blue-600 ${
            filter === "active" && "text-blue-600"
          }`}
          onClick={() => changeFilter("active")}
        >
          Active
        </button>
        <button
          className={`hover:text-blue-600 ${
            filter === "completed" && "text-blue-600"
          }`}
          onClick={() => changeFilter("completed")}
        >
          Completed
        </button>
      </div>
    </section>
  );
};
export default TodoFilter;
