import React from 'react';

function Header(props) {
    const {hero} = props;
    return <div>
        <div className ="Header">
        
        <h1>
            {hero}
        </h1>
        <h5>A Blog Theme by Taylor Burke</h5>
    </div>
    </div>
}



export default Header;