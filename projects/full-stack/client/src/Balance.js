import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import axios from 'axios';



class Balance extends Component {
    state = {
        transactions: []
    }

    componentDidMount() {
        axios.get('/sleep')
            .then(res => {
                this.setState({ transactions: res.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        console.log(this.state);
        return (
            <div className="Balance" >

                <li>
               
                    {this.state.transactions.map(i => {
                    const getSleepHours = 
                    
                    `On ${i.date} you slept ${i.sleepHours} hours.` ;
                    
                    {/* + i.date + i._id; */}
                    return getSleepHours
                })
                }</li>

                <div>
                    <ul>
                        </ul>
                </div>

            </div>
        )
    }
}



export default Balance;