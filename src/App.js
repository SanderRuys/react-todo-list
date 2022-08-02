//import hooks
import React, { useState } from 'react';
import TodoList from "./TodoList";
import "./styles/App.css";

function App() {
    const [todos, setTodos] = useState(['Todo 1', 'Todo 2']);

    /*const handleSubmit = event => {
        event.preventDefault();
        console.log("chicken");
    };*/

    return (
        //TODO: Add todo list (maybe form)
        <>
            <div className="paper">
                <div className="lines">
                    <div className="text">
                        <h1>Todo List</h1>
                        <input type="text" placeholder="Add a todo" />
                        <button>Clear list</button>
                        <TodoList todoList={todos} />
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
