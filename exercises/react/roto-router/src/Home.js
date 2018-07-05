import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
        <div className="home">
            <h1>Shit Happens</h1>
            <h2>When you're shit gets clogged up, call Roto-Router, we can unclog that shit!</h2>
            <img src = "https://res.cloudinary.com/lmn/image/upload/fl_lossy,q_80/f_auto/v1/gameskinny/a6241ecdc042b68b73e9e12d8b2e991b.png" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea unde commodi hic maiores molestiae velit perferendis dolore soluta officia? Tempora quisquam vel corporis harum impedit alias repellat illum iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sint omnis eius non corporis suscipit eligendi saepe aliquid. Dolores odit cupiditate nulla eveniet impedit voluptas laboriosam consectetur voluptatibus illum labore!</p>

            
        </div>
        <Footer />
        </div>
    )
}

export default Home;