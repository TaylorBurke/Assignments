import React from 'react';
import './Schedule.css';
import calendar from '../pics/calendar.jpeg'


const Schedule = (props) => {
    console.log(props);
    return (
        <div className="Schedule">

            <div className="App-title">


                <h1>Check out our foodtruck schedule</h1>
                <h2>All events subject to weather</h2>

                <img src={calendar} width="350px" />
            </div>



            {/* <iframe src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FDenver" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe> */}

<div className="FadeAlt"> </div>

        </div>
    )
}

export default Schedule;