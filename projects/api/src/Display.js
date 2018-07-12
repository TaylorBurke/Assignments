import React from 'react'

const Display = props => {
    const country = props.info.map(targets => {
        return(
            <div>
            <div key = {targets.name} class = "Column A">
                <h2>{targets.name}</h2>
                <img src ={targets.flag}/>
                </div>
                <div class = "Column B">
                <h3>Capital:</h3>
                <h4>{targets.capital}</h4>

                <h3>Population:</h3>
                <h4>{targets.population}</h4>

                <h3>Ethnicity:</h3>
                <h4>{targets.demonym}</h4>

                <h3>Local Name:</h3>
                <h4>{targets.nativeName}</h4>
                </div>
            </div>
        )
    })
    return(
        <div>
            {country}
        </div>
    )
}

export default Display;