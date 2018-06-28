import React from "react";

function Box(props){
    const divStyles = {backgroundColor: props.backgroundColor};
    return (
    <div className="box" style={divStyles}>
      <h2>Mother of All Suits</h2>
      <p>The MoAS is a Siren Class mech extension that collapses into a fanny pack. Press the green button from the select menu to set to stun mode.</p>
    </div>
    )
  }

  export default Box;