import './App.css'
import Home from './Home'
import Photosphere from './Photosphere'
import Map from './Map'
import Podcast from './Podcast'
import Interview from './Interview'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import { ReactComponent as IconMenu } from './anim/logo.svg'
import $ from "jquery"
import React, { useState, useEffect } from 'react'

const App = () => {

  const [path, setPath] = useState('/')

  useEffect(() => {
    
  })
  
  return (
    <Router>
      <div id="logo-container">
        <Link className="logo" id="logo" to="/"><IconMenu/></Link>
      </div>
      <Switch>
        <Route path='/photosphere' component={Photosphere} />
        <Route path='/map' component={Map} />
        <Route path='/podcast' component={Podcast} />
        <Route path='/interview' component={Interview} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  )
}

export default App