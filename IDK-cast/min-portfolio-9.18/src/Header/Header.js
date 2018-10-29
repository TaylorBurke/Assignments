import React from 'react';
import './Header.css';
import Headline from '../Menu/Headline';

const Header = (props) => {
    console.log(props);
    return (
        <div className="App-header">
            <Headline scrollToContact={props.scrollToContact} scrollToProject={props.scrollToProject} />

            <div className="App-title">


                <h1><div className="big"><br />I Don't Know</div></h1>

                <h1>with Brandon Lopez</h1>

                <div className="Testimonials">
                    <h3>"Brandon's podcast is side-splittingly funny. He's also on the internet and he did pay me to write this review." ~ Taylor </h3>


                    <h3>"Brandon has the heart of a child, which he keeps in his freezer, but other than that, he's a pretty good guy." ~ Mr. Kelly </h3>

                    <h3>"Hey, either start listening or get the fuck out." ~ Me</h3>


                </div>


            </div>


            {/* <div className="Fade"> </div> */}
        </div>
    )
}

export default Header;