import React from 'react';
import './Bar.css';
import $ from 'jquery'
import key from '../pics/pentagram.png';

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

<div className="Bar hideme1">

Oh Lucifer, tempter of men, ruler of the sea, emporer of sky and master of the earth...
    <p>Hear our prayer this day and please bless the fuck out of those who enter here, that they may be so fucking satisfied with my content, because I made it for them, and it deserves to be praised. Thine is the darkest asshole, and the most dank, and thy rod is the longest and the hardest, and thy kingdom is the most wicked, forever and always. Hail Satan!</p>

    <img src={key} alt="hail satan" width = "200px"/>
</div>

)

}

export default Projects;