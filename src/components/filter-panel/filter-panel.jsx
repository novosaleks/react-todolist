import React, {Component} from 'react'

import './filtex-panel.scss';

export default class FilterPanel extends Component {
    state = {
        search: '',
        filterType: 1,
    }

    searchElements = e => {
        const search = e.target.value;

        this.setState({
            search,
        });

        this.props.setSearchPatter(search.toLowerCase());
    }

    switchActiveFilter = filterType => {
        if (filterType !== this.state.filterType) {
            this.setState({
                filterType,
            });

            console.log(filterType);
            this.props.setFilter(filterType);
        }
    }

    render() {
        return (
            <div className="filter-pane input-group mt-2">
                <input type="text" className="form-control mr-1" value={this.state.search} onChange={this.searchElements}
                       placeholder='Search...'
                />
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button onClick={() => this.switchActiveFilter(1)}
                            type="button" className={`btn btn-outline-primary
                        ${this.state.filterType === 1 ? 'active' : null}`}>All
                    </button>
                    <button onClick={() => this.switchActiveFilter(2)}
                            type="button" className={`btn btn-outline-primary
                        ${this.state.filterType === 2 ? 'active' : null}`}>Active
                    </button>
                    <button onClick={() => this.switchActiveFilter(3)}
                            type="button" className={`btn btn-outline-primary
                        ${this.state.filterType === 3 ? 'active' : null}`}>Done
                    </button>
                </div>
            </div>
        );
    }
};