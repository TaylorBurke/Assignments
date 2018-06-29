import React from 'react'
import Hero from "./Hero";

const superHeroList = [
    {
        name: "Black Spider Man",
        identity: "Donald Glover",
        catchPhrase: "Esskeetit",
        picture: "https://cdn.shopify.com/s/files/1/0759/5877/files/The_PRofessor_spider_man_deuce_brand_1024x1024.png?10057637654221904990"
    },
    {
        name: "The Human Tentacle",
        identity: "Dr. Lovecraft",
        catchPhrase: "Glorp",
        picture: "https://static.comicvine.com/uploads/original/2/25835/579222-o.jpg"
    },
    {
        name: "Mr. Nice Guy",
        identity: "Blake Horton",
        catchPhrase: "Sorry",
        picture: "http://i0.kym-cdn.com/entries/icons/mobile/000/005/681/GoodGuyGreg.jpg" 
    },
    {
        name: "Lazer Eyes",
        identity: "Kim Chong Un",
        catchPhrase: "To the Mooooooon",
        picture: "http://www.freakingnews.com/pictures/129500/Kim-Jung-Un-Super-Hero--129516.jpg"
    },
]


class App extends React.Component {
    handleClick(event) {
        // alert this.catchphrase
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default App