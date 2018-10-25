import React, { Component } from 'react';

class Input extends Component {

    constructor(props){
        super(props);
        
    }

    handleSubmit(e){
        let userInput = this.input.value;
        console.log(userInput)
    }

    

    render() {

        return (
            <div>

                <form onSubmit= handleSubmit action="">
                    <input ref={ref => this.input = ref} type="text" placeholder="enter your address" />
                </form>

            </div >
        );
    }
}

export default Input;