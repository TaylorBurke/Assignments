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
        
        
        <h3>Have you wanted to express yourself creatively but didn't know where to start?</h3>

        <h2>What would it look like to unlock your creative potential?</h2>
            <div className="Pitch-paragraph">
           You are invited to come experience this simple approach with me. I will help you to enhance your actions in the direction of life affirming habits and beliefs.
            </div>
            <h1>If not now, then when?</h1>

            </div>
            {/* <div className="Fade"> </div> */}
        </div>
        </div>
    )
}


export default Pitch;