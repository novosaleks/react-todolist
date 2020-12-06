import React from 'react';

import './app-header.scss';

const AppHeader = () => {
    return (
        <header className='app-header'>
            <h1 className='app-header__title'>Todo List</h1>
            <div className='app_header__status'>1 more to do, 3 done</div>
        </header>
    );
};

export default AppHeader;