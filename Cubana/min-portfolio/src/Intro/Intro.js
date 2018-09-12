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
            if (bottom_of_window + 100 >= bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 3200);

            }

        });

    });

});



const Intro = () => {
    return (
        <div className = "App-fade hideme">
        <div className="App-intro">
        <div className="Header">
        <h1>My Name is Christina</h1>
    
        </div>
            <div className="Header-paragraph">
            La Cubana is named after my mother, who taught me how to cook and sacrificed her life in Cuba for her kids. She's the reason there's real Cuban flavor in every Cubano we make.

                <div><a className ="opacity" href="https://medium.com/@codeWithJS/how-i-make-websites-a5bff943614a" target ="blank"> Eat Cuban!</a></div>
            </div>
        </div>
        </div>
    )
}


export default Intro;