import React, { Component } from 'react';
import autoBind from 'auto-bind';
import getCords from './getCords';
import getAirData from './getAirData';

class Input extends Component {

    constructor(props){
        super(props);
        // this.handleSubmit = this.handleSubmit.bind(this)
        autoBind(this)
    }

    async handleSubmit(e){

        e.preventDefault();
        let userInput = this.input.value.trim()

        if (userInput.length < 1) {
            return
        }

        const result = await getCords(userInput)
        if (!result) {
            console.log('no result');
            return
        }

        const {lat, lng} = result;

        this.airData = getAirData(lat, lng)

    }



    render() {

        return (
            <div>

                <form onSubmit= {this.handleSubmit} action="">
                    <input ref={ref => this.input = ref} type="text" placeholder="enter your address" />
                </form>

      

            </div >
        );
    }
}

export default Input;