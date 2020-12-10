import React from "react";

import './todo-list-item.scss';


const ListItem = ({label, important, done, deleteItem, toggleImportant, toggleDone}) => {
    return (
        <div className='todo-list-item d-flex justify-content-between'>
            <span className={`todo-list-item__text ${important && !done ? 'important' : null} 
            ${done ? 'done' : null}`}
                  onClick={toggleDone}>{label}</span>
            <div className="todo-list-item__control d-flex justify-content-between">
                <button type="button" className="btn btn-outline-danger"
                        onClick={deleteItem}>
                    <i className="fa fa-trash"/>
                </button>
                <button type="button" className="btn btn-outline-success"
                        onClick={toggleImportant}>
                    <i className="fa fa-exclamation"/>
                </button>
            </div>
        </div>
    );
};

export default ListItem;