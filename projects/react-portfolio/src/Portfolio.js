import React from 'react';
import geoQthumbnail from './pictures/geoQthumbnail.png';
import shrapnelthumbnail from './pictures/shrapnelthumbnail.png';
import vertbeauty from './pictures/vertbeauty.png';
import sleepBank from './pictures/sleepBank.png';


function Portfolio() {
    return (
        <div className='portfolioContainer'>

            <div className="top">
                <a href="https://floating-river-42317.herokuapp.com/" target="blank"><img src={geoQthumbnail} alt="geoQuery Thumbnail" width="180px" /></a>
                <h2>GeoQuery</h2>

                <div className="hoverButton">
                    <a href="https://floating-river-42317.herokuapp.com/" target="blank"> <span>View Project </span></a>
                </div>

                <p>Front end API interface which displays basic information on the world's countries.</p>
                <p>Built with Flexbox, ES6, React, Redux and Axios, using the RESTcountries database.</p>


            </div>


            <div>
                <a href="http://example.com/" target="blank"><img src={sleepBank} alt="Sleep Bank thumbnail" width="180px" /></a>
                <h2>Sleep Bank</h2>

                <div className="hoverButton">
                    <a href="http://example.com/" target="blank"> <span>View Project </span></a>
                </div>

                <p>Fullstack application with basic CRUD functionality.</p>
                <p>Built with Flexbox, ES6, MongoDB, Mongoose, Express, React and Axios.</p>


            </div>



            <div>
                <a href="http://shrapnelarchery.com/" target="blank"><img src={shrapnelthumbnail} alt="archery thumbnail" width="180px" /></a>
                <h2>Shrapnel Archery</h2>

                <div className="hoverButton">
                    <a href="http://shrapnelarchery.com/" target="blank"> <span>View Project </span></a>
                </div>

                <p>Responsive website driving eCommerce sales.</p>
                <p>Built with WordPress, WooCommerce and Yoast.</p>


            </div>
            <div>
                <a href="https://vertbeauty.com/" target="blank"><img src={vertbeauty} alt="archery thumbnail" width="180px" /></a>
                <h2>Vert Beauty</h2>

                <div className="hoverButton">
                    <a href="https://vertbeauty.com/" target="blank"> <span>View Project </span></a>
                </div>

                <p>Responsive website driving eCommerce sales and booking appointments.</p>
                <p>Built with WordPress, WooCommerce and Yoast.</p>


            </div>
        </div>
    )


}

export default Portfolio;