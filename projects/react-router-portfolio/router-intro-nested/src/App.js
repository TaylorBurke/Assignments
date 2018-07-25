import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <div>
           <Navbar />
           <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/about" component={ About }/>
                <Route path="/contact" component={ Contact }/>
                <Route path="/services" component={ Services }/>
           </Switch>
           <Footer />
        </div>
    )
}

export default App;




