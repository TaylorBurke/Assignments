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
            if (bottom_of_window + 850 >= bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 3200);

            }

        });

    });

});

const Projects = (props) => {

return(

<div ref={props.setProjectRef}className="Projects hideme1">
    <div className="Projects-header">Our Story</div>
  <p>
Balancing your organization’s online needs can be overwhelming. With so many great options available, why do our clients trust us to meet their needs? 
</p>
</div>

)

}

export default Projects;