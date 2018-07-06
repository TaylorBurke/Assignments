import React, { Component } from 'react'
import NamesDisplay from './NamesDisplay'

class NameEntryForm extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
            names: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()

        this.setState(prevState => {
            return {
                names: [...this.state.names, this.state.input],
                input: ''
            }
        })

    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.input}</h1>
                <form
                onSubmit={this.handleSubmit}
                >
                    
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={this.state.input}
                        onChange={this.handleChange}
                        name="input"
                    />
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={this.state.input}
                        onChange={this.handleChange}
                        name="input"
                    />
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={this.state.input}
                        onChange={this.handleChange}
                        name="input"
                    />
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={this.state.input}
                        onChange={this.handleChange}
                        name="input"
                    />
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={this.state.input}
                        onChange={this.handleChange}
                        name="input"
                    />
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={this.state.input}
                        onChange={this.handleChange}
                        name="input"
                    />
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={this.state.input}
                        onChange={this.handleChange}
                        name="input"
                    />
                    <button>
                        Submit
                    </button>
                    {this.state.names.map(name => {
                        return (
                            <p>{name}</p>
                            )
                        })
                    }
                    
                </form>
                <NamesDisplay input ={this.state.input} names={this.state.names}/>
            </div>
        )
    }
}

export default NameEntryForm;