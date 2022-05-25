import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = ({ removeTodo, toggleTodoCompleted }) => {
  const todos = useSelector(state => state.todos.todos);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}          
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
