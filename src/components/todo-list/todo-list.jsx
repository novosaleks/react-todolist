import React from 'react';

import './todo-list.scss';

import ListItem from "../todo-list-item";

const TodoList = ({data, deleteItem, toggleImportant, toggleDone}) => {

    const items = data.map(item => {
            const {id, ...listItem} = item;
            return (
                <li className="list-group-item" key={id}>
                    <ListItem {...listItem}
                              deleteItem={() => deleteItem(id)}
                              toggleImportant={() => toggleImportant(id)}
                              toggleDone={() => toggleDone(id)}/>
                </li>
            );
        }
    );

    return (
        <div className='todo-list mt-2'>
            <ul className="list-group">
                {items}
            </ul>
        </div>
    );
};

export default TodoList;