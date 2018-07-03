import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super()

        this.state = {
            fName: '',
            lName: '',
            isDead: false,
            select: 'Anteater'
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleChange (e) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        // if(e.target.type === 'checkbox') {
        //     const value = e.target.checked
        // }else {
        //     const value = e.target.value
        // }
        this.setState({[e.target.name]: value})
    }

    handleSelect (e) {
        this.setState({select: e.target.value})
    }

    render() {
        return (
            <form>
               <input type="text" 
                      name='fName'
                      placeholder='First Name' 
                      value={this.state.fName} 
                      onChange={this.handleChange}  /> 
                <input type="text"
                      name='lName'
                      placeholder='Last Name' 
                      value={this.state.lName} 
                      onChange={this.handleChange} />
                      Are you dead?
                <input type="checkbox"
                        name='isDead'
                        checked={this.state.isDead}
                        onChange={this.handleChange} />
                <select value={this.state.select} onChange={this.handleSelect} >
                    <option value="Anteater">Anteater</option>
                    <option value="Antelope">Antelope</option>
                    <option value="Ardvaark">Ardvaark</option>
                    <option value="Giraffe">Giraffe</option>
                </select>
            </form>
        )
    }
}
