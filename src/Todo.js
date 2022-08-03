import React from 'react'

export default function Todo({todoElement, toggleTodo}) {
const handleToggleClick = () => {
  toggleTodo(todoElement.id);
}

  return (
      <div>
          <label>
              <input type="checkbox" checked={todoElement.complete} onChange={handleToggleClick} />
              {todoElement.name}
          </label>
      </div>
  );
}
