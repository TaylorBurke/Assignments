import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const About = () => {
    return (
        <div>
        <div className="about">
            <h1>Mario Brothers Plumbing International</h1>
            <h2>Mario Brother Plumbing was founded in <a href = "https://en.wikipedia.org/wiki/Mario" target = "blank"> 1981.</a> </h2>
            <p>Our mission is to provide affordable piping services to the world. Me and my brother Luigi will shrink down to the size of your pipe and clear out all the Goombas for you. Because we are video game characters, we only accept gold coins as payment. But since we don't have to eat or pay rent, our services are very inexpensive.</p>
            <img src = "https://pre00.deviantart.net/89f4/th/pre/i/2018/008/4/d/mario_and_luigi__gunner_bros_by_sonicjeremy-dbzdwx1.png" width = "550px"/>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea unde commodi hic maiores molestiae velit perferendis dolore soluta officia? Tempora quisquam vel corporis harum impedit alias repellat illum iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sint omnis eius non corporis suscipit eligendi saepe aliquid. Dolores odit cupiditate nulla eveniet impedit voluptas laboriosam consectetur voluptatibus illum labore!</p>

            
        </div>
        <Footer />
        </div>
    )
}

export default About;