import React from 'react';

import './app-header.scss';

const AppHeader = ({done, todo}) => {
    return (
        <div className='app-header d-flex justify-content-between align-items-end mt-2'>
            <h1 className='app-header__title'>TODO List</h1>
            <div className='app_header__status'>{todo} more to do, {done} done</div>
        </div>
    );
};

export default AppHeader;