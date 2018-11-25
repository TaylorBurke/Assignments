import React from 'react';


const Favorites = (props) => {
    return (
        
        <div className = "favorites">
<h2> Your Favorites:
    </h2>
            
                
                {/* retrieve parsed / display local storage */}
                <h4>Russia</h4>
                <h4>Iceland</h4>
                <h4>Brazil</h4>
            
        </div>
    )
}

export default Favorites;