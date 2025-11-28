import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodos } from "../features/todos/todosSlice"
import AddTodoForm from "../components/AddTodoForm"
import TodoList from "../components/TodoList"

function Todos () {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.items)

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    return (
        <div>
            <h1>Todos</h1>
            <AddTodoForm />
            <TodoList todos={todos} />
        </div>
    )
}

export default Todos
