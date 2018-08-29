import React from 'react';
import './Projects.css';

const Projects = () => {

return(

<div className="Projects">
    <div className="Projects-header">Recent Projects</div>
    <ol>
<li>
    <a className="pop" href="https://gamified-goaltracker.herokuapp.com/" target="blank">Gamified Goals<span className ="arrow">➤</span></a>
</li>
<li>
    <a className="pop" href="#" target="blank">Sleep Tracker<span className ="arrow">➤</span></a>
</li>
<li>
    <a className="pop" href="https://floating-river-42317.herokuapp.com/" target="blank">GeoQuery<span className ="arrow">➤</span></a>
</li>
<li>
    <a className="pop" href="#">Shrapnel Archery<span className ="arrow">➤</span></a>
</li>
<li>
    <a className="pop" href="#">Vert Beauty<span className ="arrow">➤</span></a>
</li>
<li>
    <a className="pop" href="https://github.com/TaylorBurke/Assignments/tree/master/projects/portfolio-garden/min-portfolio" target="blank">This Portfolio<span className ="arrow">➤</span></a>
</li>
    </ol>
</div>

)

}

export default Projects;