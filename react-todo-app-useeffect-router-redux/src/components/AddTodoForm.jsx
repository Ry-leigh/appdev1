import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todos/todosSlice"

function AddTodoForm () {
  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (title.trim() === "") return
    dispatch(addTodo(title))
    setTitle("")
  }

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default AddTodoForm
