import React from 'react';
import resumeicon from './pictures/resume-icon.jpg';


function Resume() {
    return (
        <div className='resumeContainer'>
            <div className = "name"><h2>Taylor Burke</h2></div>
            <h3>JavaScript Developer</h3>
            <h5>creative && problemSolver ? collaborate : !collaborate</h5>
            <a href="https://drive.google.com/file/d/12kPSGDEOaa1zgt6VIi6mC7IlMMd4WeaH/view?usp=sharing" target="blank"><img src={resumeicon} width="110px" alt="" /></a>

            <a href="https://www.github.com/TaylorBurke" target="blank"><img src="https://camo.githubusercontent.com/7710b43d0476b6f6d4b4b2865e35c108f69991f3/68747470733a2f2f7777772e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6f637469636f6e732f313032342f6d61726b2d6769746875622d3235362e706e67" width="105px" alt="" /></a>

            <a href="https://www.linkedin.com/in/taylor-burke/" target="blank"><img src="https://sophosnews.files.wordpress.com/2017/12/linkedin.png?w=780&h=408&crop=1" width="180px" alt="" /></a>

            <a href="https://simbi.com/taylor-burke" target="blank">
                <img src="https://lh3.googleusercontent.com/Ai6m1osFZOQ4ATUstq-_w1HeVBpCq00sDfrGv7P92_fbSiQO2M_QqP2yA624RipZDRfO=s180-rw" width="110px" alt="" />
            </a>
        </div>
    )
}

export default Resume;