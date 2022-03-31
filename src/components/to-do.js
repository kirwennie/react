import React from 'react';
import TodoListItem from './to-do-list-item';

const TodoList = ({todos, onDelet, toggleDone, toggleImportant}) => {

  const elements = todos.map((item) =>{
    const {id, ...itemProps} = item;
    return (
          <li key={id} className="list-group-item">
            <TodoListItem {...itemProps} onDelet={()=>onDelet(id)}
            toggleDone = {() => toggleDone(id)}
            toggleImportant = {() => toggleImportant(id)}
            />
          </li>
    );
  });

  return (
    <ul className='list-group'>
      {elements}
    </ul>
  );
  };

export default TodoList;
