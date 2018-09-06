import React from 'react';
import './Bar1.css';
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

<div className="Bar hideme1">
    Transform your latent energy into fruitful passion.
    <p>Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione sunt mollitia nobis laborum? Dignissimos veritatis omnis optio nesciunt explicabo, laboriosam quod eos, incidunt quam eveniet fugiat? Delectus voluptas magni suscipit. </p>
</div>

)

}

export default Projects;