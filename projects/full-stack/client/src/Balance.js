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

// if query for date returns result this becomes a put instead of a post

            <div className="Balance" >
                <h2>Your Balance for the Week:</h2>
                <p>{this.state.transactions.map((trans, i) => {

                    const averageSet = [];
                    let sleepTimes = trans.sleepHours;

                    for (let i = 0; i < sleepTimes.length; i++);
                    averageSet.push(sleepTimes[i]);

                    {/* if (sleepTimes / sleepTimes.length > 7) {

                    } */}

                    return averageSet;

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

                        let nightOf;

                        if (datePretty === 0) {
                            nightOf = "Saturday"
                        }
                        if (datePretty === 1) {
                            nightOf = "Sunday"
                        }
                        if (datePretty === 2) {
                            nightOf = "Monday"
                        }
                        if (datePretty === 3) {
                            nightOf = "Tuesday"
                        }
                        if (datePretty === 4) {
                            nightOf = "Wednesday"
                        }
                        if (datePretty === 5) {
                            nightOf = "Thursday"
                        }
                        if (datePretty === 6) {
                            nightOf = "Friday"
                        }

                        const getSleepHours = <li className={color}>{`On ${nightOf} night you slept ${trans.sleepHours} hours.`}</li>

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