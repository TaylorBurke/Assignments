import React from 'react';
import './Badges.css';
import $ from "jquery";
import csslogo from '../pics/css3-logo.png';
import htmllogo from '../pics/html5-logo.png';
import reactlogo from '../pics/icon-reactjs.svg';

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

                $(this).animate({ 'opacity': '1' }, 3200);

            }

        });

    });

});



const Badges = () => {
    return (
        <div className="App-fade hideme">
            <div className="Badges">
             
                <div className="badgeImage">
                    <img src={htmllogo} alt="html" height="80px" />
                    <img src={reactlogo} alt="react" height="80px" />
                    <img src={csslogo} alt="css" height="80px" />
                    
                </div>
              </div>
            </div>
    )
}


export default Badges;