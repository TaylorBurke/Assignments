// https://coursework.vschool.io/random-color-component/

import React from "react";

const GenRando = (props) => {
    // const myRandoColor = props.info.map(colors => {

    //     return <div key={colors.hex}>

    //         <p>test</p>

    //     </div>

    // })

    return (
        <div style={{color: props.color}}>
           Hello
        </div>
    )
}



export default GenRando;