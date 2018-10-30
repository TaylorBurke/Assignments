import React from 'react';
import './Bar.css';
import $ from 'jquery'
import key from '../pics/key.png';

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

<h1>The future belongs to those who believe in the power of their dreams
</h1>
    <p>How would your life be different if you were living up to your true potential? Imagining a better life is the first step towards making that life a reality. Maybe it doesn't have to be hard... What if you already have the key?</p>

    <img src={key} alt="key"/>
</div>

)

}

export default Projects;