import React from 'react';
import './Footer.css'
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

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 1500);

            }

        });

    });

});


const Footer = () => {
    return (


        <div className="Footer">
            <div className="hideme">
                <div className="Footer-header">
                    Let's work together.
        </div>
                <div className="Footer-paragraph">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt atque qui voluptatem et totam non ducimus voluptate praesentium facere ea illo veritatis unde optio rerum id, aut cupiditate cumque eaque.
    
            </div>
            </div>


        </div>
    )
}

export default Footer;