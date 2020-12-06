import React from 'react';

import './app.scss';

import AppHeader from "../app-header";
import FilterPanel from "../filter-panel";
import TodoList from "../todo-list";

const App = () => {
    const data = [
    ]

    return (
        <>
            <AppHeader/>
            <FilterPanel/>
            <TodoList data={data}/>
        </>
    );
};

export default App;