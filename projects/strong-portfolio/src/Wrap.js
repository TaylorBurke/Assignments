import React from 'react';
import WrapChild from './WrapChild';

const Wrap = () => {


    return (


        
        <div className="Wrap">
            <WrapChild name="Taylor" date={new Date()}/>
            <WrapChild name ="Sara" date={new Date()}/>
            <WrapChild name = "Buba" date={new Date()}/>

        </div>
    )
}

export default Wrap;