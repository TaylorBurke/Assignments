import React from 'react';
import './Pitch.css';
import $ from "jquery";

$(function () {  // $(document).ready shorthand
    $('.monster').fadeIn('slow');
});

$(document).ready(function () {

    /* Every time the window is scrolled ... */
    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.hideme').each(function (i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade in */
            if (bottom_of_window + 100 >= bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 3200);

            }

        });

    });

});



const Pitch = () => {
    return (
        <div className = "App-fade hideme">

        <div className="Pitch-intro">
        {/* <div className="Fadetop"> </div> */}
        <div className="Pitch-Header">
        
        <h1>You went too far</h1>
        </div>
            <div className="Testimonials">
           You scrolled past all my content. Oh, you thought there would be more? Alright, I guess I'll serve up a little something special for you, since you're so fucking into it. Just don't expect me to try that hard.
            </div>
            {/* <div className="Fade"> </div> */}
        </div>
        </div>
    )
}


export default Pitch;