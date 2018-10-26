import React, { Component } from 'react';
import store from './Store'

class Display extends Component {

    constructor(props) {
        super(props);
        this.state = {
            airData: null
        }
    }

    componentDidMount() {
        store.on('airData', airData => {
            this.setState({ airData })
        })
    }



    render() {
        const { airData } = this.state
        // same as writing -> const airData = this.state.airData
        if (!airData) {
            return <div>
                <h2>What are you breathing?</h2>
                </div>
        }

        console.log(this.state);
        console.log()

        document.body.style.backgroundImage = `linear-gradient(${airData.breezometer_color} ,rgb(184, 255, 249)) 
        `

        return (
            
            <div className = "displayData">
            <h2>{<a href="https://airnow.gov/aqi/aqi-basics" target ="blank">Air quality index: </a>} {airData.country_aqi}</h2>
                <h3>{`You have ${airData.breezometer_description.toLowerCase()}!`}</h3>
                <h4>{`Main pollutant: ${airData.dominant_pollutant_description}`}</h4>
                <h4>{`Recommendation: ${airData.random_recommendations.health}!`}</h4>

            </div>
        );
    }
}
export default Display;