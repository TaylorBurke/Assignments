import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Contact = () => {
    return (
        <div>
        <div className="contact">
            <h1>Contact the Mario Brothers</h1>
            <h2>1-800-SHITTER</h2>
            <h2>shithappens@mariobros.com</h2>
    
            <img src = "https://vignette.wikia.nocookie.net/mariofanon/images/f/fb/Mario_luigi_remake_by_maxigamer-daio8aq.png/revision/latest/scale-to-width-down/484?cb=20180328221648" width = "500px"/>        
        </div>
        <Footer />
        </div>
    )
}

export default Contact;