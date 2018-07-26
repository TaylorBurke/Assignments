import React from 'react';
import geoQthumbnail from './pictures/geoQthumbnail.png';
import shrapnelthumbnail from './pictures/shrapnelthumbnail.png';
import vertbeauty from './pictures/vertbeauty.png';


function Portfolio() {
    return (
        <div className='portfolioContainer'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="top">
                <a href="https://floating-river-42317.herokuapp.com/" target="blank"><img src={geoQthumbnail} alt="geoQuery Thumbnail" width="180px" /></a>
                <p><h2>GeoQuery</h2></p>
                <p>Front end API interface which displays basic information on the world's countries.</p>
                <p>Built with Flexbox, ES6, React, Redux and Axios, using the RESTcountries database.</p>
                
                <div className="hoverButton">
                    <a href="https://floating-river-42317.herokuapp.com/" target="blank"> <span>View Project </span></a>
                </div>
                </div>

                <div>
                    <a href="http://shrapnelarchery.com/" target="blank"><img src={shrapnelthumbnail} alt="archery thumbnail" width="180px" /></a>
                    <p><h2>Shrapnel Archery</h2></p>
                    <p>Responsive website driving eCommerce sales.</p>
                    <p>Built with WordPress, WooCommerce and Yoast.</p>

                    <div className="hoverButton">
                    <a href="http://shrapnelarchery.com/" target="blank"> <span>View Project </span></a>
                </div>
                </div>
                <div>
                    <a href="https://vertbeauty.com/" target="blank"><img src={vertbeauty} alt="archery thumbnail" width="180px" /></a>
                    <p><h2>Vert Beauty</h2></p>
                    <p>Responsive website driving eCommerce sales.</p>
                    <p>Built with WordPress, WooCommerce and Yoast.</p>

                    <div className="hoverButton">
                    <a href="https://vertbeauty.com/" target="blank"> <span>View Project </span></a>
                </div>
                    </div>
                </div>
                )
            
            
            }
            
export default Portfolio;