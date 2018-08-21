import React, { Component } from 'react';


class Toggle extends Component {
    constructor() {
        super();
        this.state = {
            active: 'false'
        }


        
        this.store = typeof localStorage === 'undefined' ? null : localStorage;

        this.css = `  
        html { filter: invert(100%); background: #fefefe; }  
        * { background-color: inherit }
        img:not([src*=".svg"]), video { filter: invert(100%) }`

    


        { this.isActive() ? this.css.trim() : this.css }
        // this.handleClick = this.handleClick.bind(this);


        
    }

    componentDidMount() {
        if (this.store) {
            this.setState({
                active: this.store.getItem('Toggle') || false
            });
        }
    }

    componentDidUpdate() {  
        if (this.store) {
          this.store.setItem('Toggle', this.state.active);
        }
      }

    isActive = () => this.state.active;

    themeSwitcher = () => {
        this.setState({
            active: !this.isActive()
        });
    }

    // handleClick(e) {
    //     e.preventDefault();
    //     this.setState({
    //         color: []
    //     })
    // }

    render() {

        // let a = "lightTheme";
        // let b = "anotherLightTheme";
        // let c = "colorTheme";
        // let d = "darkTheme"
        // let themesArray = [a, b, c, d];

        // const randomDraw = () => {
        //     themesArray[Math.floor(Math.random() * themesArray.length)]
        // }


        

            return (
            <div>
                <button className="Toggle" aria-pressed={this.isActive()} onClick={this.themeSwitcher}>
                    dark theme:
                    <span aria-hidden="true">{this.isActive() ? 'on' : 'off'}</span>
                  </button>
                <style media={this.isActive() ? 'screen' : 'none'}>
                    {this.css}
                </style>
            </div>
        );

        {/* <div className="Toggle">
                <button onClick={this.handleClick} >=</button>
            </div> */}
        
    }
}

export default Toggle;