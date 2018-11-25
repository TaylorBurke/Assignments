import React from 'react';

const Information = () => {
    return (
        <div>
            <p></p>

            <h2>How to Use this App</h2>
            <p>
                Type the name of the country you would like to return data on. If the name is not complete it will still try and return a country, but it will return the first result with the complete text, starting in alphabetical order. For this reason, there is a bug which will affect certain queries. If you type "India" vs "Republic of India" you will be able to observe this bug.

                Another interesting side effect of this architecture is that a, f, g, h, n, i, s, and t by themselves will all return "Afghanistan."

                To return the United States, you must type the full name, or type USA.
            </p>

            <h2>A short history of GeoQuery</h2>
            <p>This application began in June of 2018, when I was a student attending <a href="https://vschool.io" target="blank" >V School</a>'s JavaScript full-stack bootcamp. Our first big project was a front-end project.</p>
            <p>I was looking for an API that was easy to use since this would be my first big React project using Redux, Thunk, and Axios. RESTful countries gave me a very simple endpoint URL which I could drop into my Redux store via an action utilizing a string literal and user supplied variable. From the redux store, I was able to map the Display component. Special thanks to <a href="http://btdev.surge.sh/" target="blank">Ben Turner</a> for helping me with the action creators, reducers, and get request!</p>

            <p>The first version of this app was deployed on heroku, <a href="https://floating-river-42317.herokuapp.com/" target="blank">here</a>. In November I decided to refactor the app as an excercise and while I was in the application I polished the color pallete and a added a few css effects that I felt like contributed to a more 'material design' feel.</p>

            <p>See the menu bar at the bottom of the page for more info on the source code, API, and for a link to my personal portfolio.</p>
            
            <p></p>
        </div>
    )
}

export default Information;
