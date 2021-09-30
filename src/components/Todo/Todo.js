import React from 'react';

import './Todo.css';

const Todo = (props) => {

  return (
    <div className="Todo">
      <div
        className={`text ${props.done && 'done'}`}
        onClick={props.clickDetail}>
        {props.title}
      </div>
      {props.done && <div className="done-mark">&#x2713;</div>}
        <button className='doneButton' onClick={props.clickDone}>{(props.done) ? 'Undone' : 'Done'}</button>

        <button onClick={props.clickDelete}>Delete</button>
    </div>
  );
};

export default Todo;
