import React from 'react'

function Hitlist(props){
   
const theList = props.info.map(targets => {
    return(
        <div key = {targets.name}>
        <h1>{targets.name}</h1>
        <img src = {targets.image}/>
        </div>
    )
})

    return(
        <div>
            {theList}
        </div>
    )
}
 
export default Hitlist;