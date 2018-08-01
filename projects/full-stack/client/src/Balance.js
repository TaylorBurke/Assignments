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
                <h2>Your Balance for the Week:</h2>
                <p>{this.state.transactions.map((trans, i) => {

                    let sleepTimes = trans.sleepHours;

                    // for (i = 0; i < sleepTimes.length; i++)
                    // return sleepTimes[i]

                    return sleepTimes

                })

                }</p>
                <ul>

                    {this.state.transactions.map((trans, i) => {

                        let color;

                        if (trans.sleepHours > 6) {
                            color = "green"
                        } else {
                            color = "red"
                        }

                        let date = new Date(trans.date);
                        const datePretty = date.getDay();

                        let dayOf;

                        if (datePretty === 0) {
                            dayOf = "Sunday"
                        }
                        if (datePretty === 1) {
                            dayOf = "Monday"
                        }
                        if (datePretty === 2) {
                            dayOf = "Tuesday"
                        }
                        if (datePretty === 3) {
                            dayOf = "Wednesday"
                        }
                        if (datePretty === 4) {
                            dayOf = "Thursday"
                        }
                        if (datePretty === 5) {
                            dayOf = "Friday"
                        }
                        if (datePretty === 6) {
                            dayOf = "Saturday"
                        }

                        const getSleepHours = <li className={color}>{`On ${dayOf} you slept ${trans.sleepHours} hours.`}</li>

                        return getSleepHours
                    })

                    }
                </ul>
                <div>
                    <ul>
                    </ul>
                </div>

            </div>
        )
    }
}



export default Balance;