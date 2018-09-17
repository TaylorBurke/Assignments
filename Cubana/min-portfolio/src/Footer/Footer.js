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
                <div className="Footer-header">
                    Let's work together.
        </div>
                <div className="Footer-paragraph">
                    If you would like to hire me or just <br/> talk about your event, find me on these social media <br/> sites, or <span className="tooltip">email me directly and I'll respond in 24 hours.<span className="tooltiptext">laCubana@gmail.com</span></span>

                    


                    {/* glow will be a tool tip which displays my email */}
                </div>

                <div className="Footer-contacts">
                   <div> Test
                    </div>
                    <div> Test
                    </div>
                    <div> Test
                    </div>
                </div>
                <div className="Fade"> </div>
            </div>


        </div>
    )
}

export default Footer;