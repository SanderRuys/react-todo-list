//import hooks
import React, { useState, useRef, useEffect } from 'react';
import TodoList from "./TodoList";
import "./styles/App.css";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedTodos) {
            setTodos(storedTodos);
        }  
    },[])
        
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find(todo => todo.id === id);
        todo.complete = !todo.complete;
        setTodos(newTodos);
    }

    const clearTodos = () => {
        const newTodos = todos.filter(todos => !todos.complete);
        setTodos(newTodos);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        if (name === '') return;
        setTodos(previousTodos => {
            return [...previousTodos, { id: uuidv4(), name: name, complete: false}];
        })
        console.log(todos);
        inputRef.current.value = null;
    };

    return (
        //TODO: Add todo list (maybe form)
        <>
            <div className="paper">
                <div className="lines">
                    <div className="text">
                        <h1>Todo List</h1>
                        <form onSubmit={handleSubmit}>
                            <input ref={inputRef} type="text" placeholder="Add a todo" />
                        </form>
                        <button onClick={clearTodos}>Clear list</button>
                        <TodoList todoList={todos} toggleTodo={toggleTodo}/>
                    </div>
                </div>
                <div className="holes hole-top"></div>
                <div className="holes hole-middle"></div>
                <div className="holes hole-bottom"></div>
            </div>
        </>
    );
}

export default App;
