import { forwardRef } from "react";
import CrossIcon from "./icons/CrossIcon";
import IconChecked from "./icons/IconChecked";

const TodoItem = forwardRef(({ todo, updateTodo, removeTodo, ...props }, ref) => {
  const { id, title, completed } = todo;
  return (
    <article {...props} ref={ref} className="flex items-center justify-between gap-4 overflow-hidden border-b border-b-gray-300 ">
      <button
        className={`h-5 w-5 flex-none rounded-full border-2 ${
          completed
            ? "flex items-center justify-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            : "inline-block"
        }`}
        onClick={() => updateTodo(id)}
      >
        {completed && <IconChecked />}
      </button>
      <p
        className={`grow text-gray-600 dark:text-gray-400 ${
          completed && "line-through"
        }`}
      >
        {title}
      </p>
      <button className="flex-none" onClick={() => removeTodo(id)}>
        <CrossIcon />
      </button>
    </article>
  );
});
export default TodoItem;
