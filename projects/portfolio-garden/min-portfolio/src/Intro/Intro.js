import React from 'react';
import './Intro.css';
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
            if (bottom_of_window >= bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 3500);

            }

        });

    });

});



const Intro = () => {
    return (
        <div className = "App-fade hideme">
        <div className="App-intro">
        <div className="Header">
        <h1>I design websites that connect people & ideas</h1>
        </div>
            <div className="Header-paragraph">
            I love to solve interesting problems and create beautiful interfaces that enhance the human experience. I use JavaScript and React in addition to responsive CSS.

                <div><a className ="opacity" href="#"> How I make Websites</a></div>
            </div>
        </div>
        </div>
    )
}





export default Intro;