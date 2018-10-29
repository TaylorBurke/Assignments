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

    return (

        <div className="Bar hideme1">
            Want to get pictures of my dog sent to your inbox?
    <p>Subscribe.</p>

            <h2>FYI, you might also get some other unsolicited junk*</h2>
            <div className="Header-paragraph">
                *Like, literally, my junk. And I reserve the right to sell your info to the highest bidder, and the lowest bidder, and write it on the bathroom stall, and generally desecrate your inbox.
    
            </div>
        </div>

    )

}

export default Projects;