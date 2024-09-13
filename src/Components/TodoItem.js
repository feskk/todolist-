import React from 'react';

function TodoItem({ task, index, removeTask }) {
  return (
    <li>
      {task}
      <button onClick={() => removeTask(index)}>
        <i className="fas fa-trash-alt"></i> 
      </button>
    </li>
  );
}

export default TodoItem;
