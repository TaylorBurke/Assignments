import React from 'react';
import './Projects.css';
import $ from 'jquery'

$(function () {  // $(document).ready shorthand
    $('.monster').fadeIn('slow');
});

$(document).ready(function () {

    /* Every time the window is scrolled ... */
    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.hideme1').each(function (i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade in */
            if (bottom_of_window + 500 >= bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 3500);

            }

        });

    });

});

const Projects = (props) => {

return(

<div ref={props.setProjectRef}className="Projects hideme1">
    <div className="Projects-header">Recent Projects</div>
    <ol>
<li>
    <a className="pop" href="https://gamified-goaltracker.herokuapp.com/" target="blank">Gamified Goals<span className ="arrow">➤</span></a>
</li>
<li>
    <a className="pop" href="https://github.com/TaylorBurke/Assignments/tree/master/projects/full-stack" target="blank">Sleep Tracker<span className ="arrow">➤</span></a>
</li>
<li>
    <a className="pop" href="https://floating-river-42317.herokuapp.com/" target="blank">GeoQuery<span className ="arrow">➤</span></a>
</li>
<li>
    <a className="pop" href="http://www.shrapnelarchery.com" target="blank">Shrapnel Archery<span className ="arrow">➤</span></a>
</li>

<li>
    <a className="pop" href="https://www.gaypridebowties.com/
" target="blank">Pride Bowties<span className ="arrow">➤</span></a>
</li>
<li>
    <a className="pop" href="https://www.vertbeauty.com" target="blank">Vert Beauty<span className ="arrow">➤</span></a>
</li>
<li>
    <a className="pop" href="https://github.com/TaylorBurke/Assignments/tree/master/projects/portfolio-garden/min-portfolio" target="blank">This Portfolio<span className ="arrow">➤</span></a>
</li>
    </ol>
</div>

)

}

export default Projects;