import React from 'react';
import geoQthumbnail from '../geoQthumbnail.png'

const Home = (props) => {
    return (
        <div className="home">
            <div>
        <h2>GeoQuery</h2>
        </div>
        <div>
            <a href="https://floating-river-42317.herokuapp.com/" target="blank"><img src ={geoQthumbnail} alt="geoQuery Thumbnail"/></a>
            </div>
        </div>
    )
}

export default Home