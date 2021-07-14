import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList'
import './App.css'

const App = () => {

    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState("all")
    const [filteredTodos, setFilteredTodos] = useState([])

    useEffect(() => {
        getLocalStorage()
    }, [])

    useEffect(() => {
        filterHandler()
        saveLocalStorage()
    }, [todos, status])

    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break;
            default:
                setFilteredTodos(todos)
                break;
        }
    }

    const saveLocalStorage = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    const getLocalStorage = () => {
        if(localStorage.getItem('todos') === null){
            localStorage.setItem('todos', JSON.stringify([]))
        } else{
            let localTodo = JSON.parse(localStorage.getItem('todos'))
            setTodos(localTodo)
        }
    }

    

    return (
        <div>
           <div>
               <Header />
           </div>

            <Form 
                input={input}
                setInput={setInput}
                todos={todos}
                setTodos={setTodos}
                setStatus={setStatus}
            />

            <TodoList 
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
            />

        </div>
    )
    
}

export default App