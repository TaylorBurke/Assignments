import React from 'react';
import InputForm from './InputForm';


class Display extends Component {
    constructor() {
      super()
      this.state = {
        targets: [],
      }
    }

    onSubmit() {
      axios.get(output)
      .then(response => {
        this.setState({ targets: response.data})
      })
      // try(err);
      // catch(err)
    }
  
    render() {
      return (
        <div class = "wrapper">
        <div className="App" class = "grid-container">
          <Display info={this.state.targets} />
        </div>
        </div>
      );
    }
  }


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

                <h3>Region:</h3>
                <h4>{targets.subregion}</h4>

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