import React from 'react'

import './filtex-panel.scss';

const FilterPanel = () => {
    return (
        <div className='filter-panel'>
            <input className='filter-panel__search' type="text" placeholder='Search...'/>
            <div className='filter-panel__filter'>f</div>
        </div>
    );
};

export default FilterPanel;