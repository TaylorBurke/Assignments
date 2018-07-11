import React from 'react'

function Hitlist(props){
    const theList = props.info.map(hits =>{
        return(
            <div key = {hits.name}>
                <h1>{hits.name}</h1>
                <img src = {hits.image} />
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