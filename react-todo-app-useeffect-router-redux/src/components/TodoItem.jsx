import { useDispatch } from "react-redux"
import { updateTodo, deleteTodo, toggleLocal } from "../features/todos/todosSlice"

function TodoItem ({ todo }) {
  const dispatch = useDispatch()

  const toggleComplete = () => {
    // Optimistically update the UI first
    dispatch(toggleLocal(todo.id))
    // Then persist to the API (async). If the API fails, the UI remains updated.
    dispatch(updateTodo({ ...todo, completed: !todo.completed }))
  }

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  }

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={toggleComplete} />
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.title}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default TodoItem
