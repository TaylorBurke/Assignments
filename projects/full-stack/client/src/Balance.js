import React, { Component } from 'react';
import axios from 'axios';



class Balance extends Component {
    constructor() {
        super();
        this.state = {
            transactions: []
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, id) {
        e.preventDefault();
        axios.delete(`/sleep/${id}`)
            .then(res => {
                const deletedId = res.data._id;
                const initState = this.state.transactions;
                const newState = initState.filter(trans => trans._id !== deletedId) 
                this.setState({transactions: newState}) 
            })
            .catch(function (error) {
                console.log(error);
            });
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

            const getAverage = this.state.transactions.reduce((acc, trans) => {
                return acc + trans.sleepHours
            }, 0) / this.state.transactions.length
            
            let newColor = getAverage >= 7 ? "green" : "red";

        return (


            <div className="Balance" >
                <h3 className={`average ${newColor}`}>Your Average for the Week: {getAverage} hours
                </h3>

                    {
                        this.state.transactions.map((trans, i) => {

                            let color;

                            if (trans.sleepHours >= 7) {
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

                            const getSleepHours = <div key={i} className={color}> {`On ${nightOf} night you slept ${trans.sleepHours} hours. `}

                                <button onClick={(e) => this.handleClick
                                    (e, trans._id)} className="tooltip">&#9747;
    
                                    <span className="tooltiptext">Delete</span>

                                </button> </div>

                            return getSleepHours
                        })

                    }
           
            </div>
        )
    }
}



export default Balance;