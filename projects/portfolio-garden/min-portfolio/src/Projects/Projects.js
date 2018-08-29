import React from 'react';
import './Projects.css';

const Projects = () => {

return(

<div className="Projects">
    <div className="Projects-header">Recent Projects</div>
    <ol>
<li>
    <a className="pop" href="#">Gamified Goals<span className ="arrow">➤</span></a>
</li>
<li>
    <a className="pop" href="#">Sleep Tracker<span className ="arrow">➤</span></a>
</li>
<li>
    <a className="pop" href="#">GeoQuery<span className ="arrow">➤</span></a>
</li>
<li>
    <a className="pop" href="#">Shrapnel Archery<span className ="arrow">➤</span></a>
</li>
<li>
    <a className="pop" href="#">Vert Beauty<span className ="arrow">➤</span></a>
</li>
    </ol>
</div>

)

}

export default Projects;