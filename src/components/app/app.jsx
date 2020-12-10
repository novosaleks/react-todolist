import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './app.scss';

import FilterPanel from "../filter-panel";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import AppHeader from "../app-header";

class App extends Component {
    state = {
        list: [
            {id: 5212161, label: 'Drink Coffee', important: false, done: false},
            {id: 5216362, label: 'Create your first own task :)', important: true, done: false},
        ],
        search: '',
        filterType: 1,
    }

    id = 0;

    switchProp = (item, prop, data) => {
        item[prop] = !item[prop];

        this.setState({
            list: data,
        });
    }

    cloneState = (stateProp) => {
        return JSON.parse(JSON.stringify(this.state[stateProp]));
    }

    toggleDone = id => {
        const clonedArr = this.cloneState('list');

        clonedArr.forEach(item => {
            if (item.id === id) {
                this.switchProp(item, 'done', clonedArr);
            }
        });
    }

    toggleImportant = id => {
        const clonedArr = this.cloneState('list');

        clonedArr.forEach(item => {
            if (item.id === id) {
                this.switchProp(item, 'important', clonedArr);
            }
        })
    }

    addItem = label => {
        this.setState(({list}) => {
            return {
                list: [...list, {id: this.id++, label, important: false, done: false}],
            }
        });
    };

    deleteItem = id => {
        this.setState(({list}) => {
            const newArr = list.filter(item => {
                return item.id !== id;
            });

            return {list: newArr}
        });
    }

    setSearchPatter = search => {
        if (search !== this.state.search) {
            this.setState({
                search,
            });
        }
    }

    setFilter = filterType => {
        if (filterType !== this.state.filterType) {
            this.setState({
                filterType,
            });
        }
    }

    findElements = (elements) => {
        return elements.filter(item => {
            return item.label.toLowerCase().includes(this.state.search);
        });
    }

    checkElementsByFilter = (elements) => {
        switch (this.state.filterType) {
            case 2: return elements.filter(item => !item.done);
            case 3: return elements.filter(item => item.done);
            default: return elements;
        }
    }

    filterElements = () => {
        const foundElements = this.findElements(this.state.list);

        return this.checkElementsByFilter(foundElements);
    }

    render() {
        const doneAmount = this.state.list.filter(item => item.done).length,
            todoAmount = this.state.list.filter(item => !item.done).length,
            availableItems = this.filterElements();

        return (
            <main className='app'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 mx-auto">
                            <AppHeader done={doneAmount}
                                       todo={todoAmount}/>
                            <FilterPanel setSearchPatter={this.setSearchPatter}
                                        setFilter={this.setFilter}/>
                            <TodoList data={availableItems}
                                      deleteItem={this.deleteItem}
                                      toggleImportant={this.toggleImportant}
                                      toggleDone={this.toggleDone}/>
                            <ItemAddForm addItem={this.addItem}/>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default App;