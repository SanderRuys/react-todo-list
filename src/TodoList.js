//rfc + Enter
import React from 'react'
import Todo from './Todo'

export default function TodoList({todoList, toggleTodo}) {
  return (
    todoList.map ((todo, index) =>{
        return <Todo key={index} toggleTodo={toggleTodo} todoElement={todo} />
    })
  )
}
