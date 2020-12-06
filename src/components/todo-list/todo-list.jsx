import React from 'react';

import './todo-list.scss';

import ListItem from "../todo-list-item";

const TodoList = ({data}) => {

    const items = data.map(item => {
            const {id, ...listItem} = item;
            return <li><ListItem key={id} {...listItem} /></li>
        }
    );

    return (
        <div className='todo-list'>
            <ul>
                {items}
            </ul>
        </div>
    );
};

export default TodoList;