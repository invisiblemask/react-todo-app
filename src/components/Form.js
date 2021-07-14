import React from 'react'
import { v4 as uuidv4 } from "uuid";

const Form = ({input, setInput, todos, setTodos, setStatus}) => {

    const inputHandler = (e) => {
        setInput(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos, {text: input, completed: false, id: uuidv4()}
        ])
        setInput("")
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <form>
            <input 
            value={input}
            onChange={inputHandler} 
            type="text" 
            placeholder="Enter a todo"
            className="todo-input" 
            required
            />

            <button onClick={submitHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div onClick={statusHandler} className="select">
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
    </form>
    )
}

export default Form