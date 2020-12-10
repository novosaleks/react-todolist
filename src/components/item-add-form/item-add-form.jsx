import React, {Component} from "react";

export default class ItemAddForm extends Component {

    state = {
        label: '',
    }

    addNewTask = e => {
        e.preventDefault();

        if (this.state.label) {
            this.props.addItem(this.state.label);

            this.setState({
                label: '',
            });
        }
    };

    inputText = e => {
        this.setState({
            label: e.target.value,
        });
    }

    render() {

        return (
            <form onSubmit={this.addNewTask} className='item-add-form mt-2' action="#">
                <div className="input-group mb-3 d-flex">
                    <input value={this.state.label}
                           onChange={this.inputText} type="text" name='taskname' className='flex-grow-1 mr-1'
                           placeholder='Task name...'
                    />
                    <button className="btn btn-outline-secondary" id="button-addon2">Add element</button>
                </div>
            </form>
        );
    }
};
