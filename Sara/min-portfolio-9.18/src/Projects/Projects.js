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
            if (bottom_of_window + 550 >= bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 3200);

            }

        });

    });

});

const Projects = (props) => {

return(

<div ref={props.setProjectRef}className="Projects hideme1">
    <div className="Projects-header">Find a Workshop</div>
    <ol>
<li>
    <a className="pop" href="#" target="blank">3 Day Breathe Intensive<span className ="arrow">➤</span></a>
</li>
<li>
    <a className="pop" href="#" target="blank">Introduction to Prana<span className ="arrow">➤</span></a>
</li>
<li>
    <a className="pop" href="#" target="blank">Becoming One With the Breath<span className ="arrow">➤</span></a>
</li>
<li>
    <a className="pop" href="#" target="blank">Advanced Clearing Techniques<span className ="arrow">➤</span></a>
</li>
    </ol>
</div>

)

}

export default Projects;