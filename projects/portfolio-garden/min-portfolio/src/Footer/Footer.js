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
                    If you would like to hire me or just talk about collaborating, find me on these social media sites, or <span className="tooltip">email me directly.<span className="tooltiptext">hello@taylorburke.me</span></span>

                    


                    {/* glow will be a tool tip which displays my email */}
                </div>

                <div className="Footer-contacts">
                    <a href="https://linkedin.com/in/taylor-burke/" target="blank">
                        <img src={linkedin} alt="linkedin" width="60px" />
                    </a>

                    <a href="https://twitter.com/codeWithJS" target="blank">
                        <img src={twitter} alt="twitter" width="60px" />
                    </a>

                    <a href="https://github.com/taylorburke" target="blank">
                        <img src={github} alt="github" width="60px" />
                    </a>

                    <a href="https://dribbble.com/TaylorBurke" target="blank">
                        <img src={dribbble} alt="dribbble" width="60px" />
                    </a>


                </div>
            </div>


        </div>
    )
}

export default Footer;