import React from 'react';
import geoQthumbnail from './geoQthumbnail.png';


function Portfolio () {
    return(
        <div className='portfolioContainer'>
            <h1>Sattva</h1>
            <p>Sattva (Sanskrit: सत्त्व) is one of the three Guṇas or "modes of existence" (tendencies, qualities, attributes), a philosophical and psychological concept developed by the Samkhya school of Hindu philosophy.[1][2] The other two qualities are rajas (passion and activity) and tamas (destruction, chaos). Sattva is the quality of goodness, positivity, truth, wholesomeness, serenity, wholeness, creativity, constructiveness, balance, confidence, peacefulness, and virtuousness that is drawn towards Dharma and Jnana (knowledge).</p>
            <h2>GeoQuery</h2>
            <a href="https://floating-river-42317.herokuapp.com/" target="blank"><img src ={geoQthumbnail} alt="geoQuery Thumbnail"/></a>
        </div>
    )


}

export default Portfolio;