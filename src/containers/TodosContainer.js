import React, { Component, Fragment } from 'react';
import { Todos } from "../components/Todos";
import { AddForm } from "../components/AddForm";

export class TodosContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        });
        console.error('HandleChange event fired with an issue...');
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // if (this.state.text.length === 0) {
        //     return;
        // }
        const newItem = {
            text: this.state.text,
            id: Date.now()
          };
        // input-output testing
        let parseEntry = /^[A-Za-z]*$/;
        if (parseEntry.test(newItem.text)){
            this.setState({
                items: this.state.items.concat(newItem),
                text: ''
            })
        }

    }
    removeItem = (id) => {
        const items = this.state.items.filter(item => {
            return item.id !== id;
        })
        this.setState({
            items
        })
        console.log(this.state);
    }

    render() {
        return (
            <>
                <Todos items={this.state.items} removeItem={this.removeItem} />
                <AddForm items={this.state} onSubmit={this.handleSubmit} onChange={this.handleChange}/>
            </>
        )
    }
}
