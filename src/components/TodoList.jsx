import TodoItem from "./TodoItem";

const TodoList = ({todos, updateTodo, removeTodo}) => { 
    return (
        <div className="rounded-md bg-white [&>article]:p-4 mt-8 dark:bg-gray-800 transition-all duration-1000">
          {
            todos.map(todo => ( 
              <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} removeTodo={removeTodo} />
            ))
          }
        </div>
    )
}
export default TodoList;