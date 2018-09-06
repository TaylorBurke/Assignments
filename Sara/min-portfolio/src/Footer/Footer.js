import React from 'react';
import './Footer.css';
import $ from 'jquery';
import linkedin from '../pics/linkedin.png';
import twitter from '../pics/twitter.png';
import github from '../pics/github.png';
import dribbble from '../pics/dribbble.png';

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
            if (bottom_of_window + 500 >= bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 3200);

            }

        });

    });

});


const Footer = (props) => {
    return (


        <div ref={props.setContactRef}className="Footer hideme">
    <div>
                <div className="Fadetop"> </div>
                <div className="Footer-header">
                    Let's <span clasName ="big"> grow together. </span>
        </div>
                <div className="Footer-paragraph">
                If you would like to learn more about my classes or one on one sessions, email or call me.

                    


                    {/* glow will be a tool tip which displays my email */}
                </div>

         <div className="Footer-contacts">
                    <a href="#" target="blank">
                        <img src={linkedin} alt="linkedin" width="60px" />
                    </a>

                    <a href="#" target="blank">
                        <img src={twitter} alt="twitter" width="60px" />
                    </a>


                    <a href="#" target="blank">
                        <img src={dribbble} alt="dribbble" width="60px" />
                    </a>


                </div>
            </div>
            </div>

    )
}

export default Footer;