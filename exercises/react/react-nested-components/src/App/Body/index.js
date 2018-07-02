import React from 'react';
import './index.css';
import App from './App';
import Body from './Body';
import Footer from './Footer';
import Navbar from './Navbar';

App = function(){
    const styles = {
        backgroundColor: 'lightgreen'
    }
    return(
        <div style = {styles}>
            <Navbar/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default App;