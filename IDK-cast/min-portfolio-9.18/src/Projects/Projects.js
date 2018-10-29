import React from 'react';
import './Projects.css';


const Projects = (props) => {

return(

<div ref={props.setProjectRef}className="Projects hideme1">
    <div className="Projects-header">Enough bullshit, here's all the episodes</div>
    <ol>
<li>
    <a className="pop" href="#" target="blank">How to be a dirty memester<span className ="arrow">➤</span></a>
</li>
<li>
    <a className="pop" href="#" target="blank">Incest, the story of America<span className ="arrow">➤</span></a>
</li>
<li>
    <a className="pop" href="#" target="blank">0: How many fucks I give<span className ="arrow">➤</span></a>
</li>
<li>
    <a className="pop" href="#" target="blank">Getting back at my slum-lord<span className ="arrow">➤</span></a>
</li>
    </ol>
</div>

)

}

export default Projects;