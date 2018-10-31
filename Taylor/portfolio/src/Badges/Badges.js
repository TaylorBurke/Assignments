import React from 'react';
import './Badges.css';
import $ from "jquery";
import star from '../pics/star-icon.png';

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
                
                    <img src={star} alt="ribbon" height="40px" />
             
                    
                </div>
              </div>
            </div>
    )
}


export default Badges;