import './App.css'
import Home from './Home'
import Photosphere from './Photosphere'
import Map from './Map'
import MapView from './MapView'
import Podcast from './Podcast'
import Interview from './Interview'
import Footer from './Footer'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import { ReactComponent as IconMenu } from './Anim/logo.svg'
import $ from "jquery"
import React, { useState, useEffect } from 'react'

const App = () => {

  $(() => {
    $('#MapView').css({display: 'none'})
  })

  useEffect(() => {
    getData()
  },[])
  
  const getData = async() => {
    await fetch('https://y7lr4l3pqd.execute-api.eu-west-3.amazonaws.com/Prod')
      .then(response => response.json())
      .then(data => {
          console.log(data)
      })
    }

  return (
    <Router>
      <div id="logo-container">
        <Link className="logo" id="logo" to="/"><IconMenu/></Link>
      </div>
      <div id="MapView">
        <MapView />
      </div>
      <Switch>
        <Route path='/photosphere' component={Photosphere} />
        <Route path='/map'  component={Map}/>
        <Route path='/podcast' component={Podcast} />
        <Route path='/interview' component={Interview} />
        <Route path='/' component={Home} />
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App