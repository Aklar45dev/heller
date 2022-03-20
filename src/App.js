import './App.css'
import Home from './Home'
import Photosphere from './Photosphere'
import Map from './Map'
import MapView from './MapView'
import Podcast from './Podcast'
import Interview from './Interview'
import Parallax from './Parallax'
import Footer from './Footer'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import $ from "jquery"
import React, { useEffect } from 'react'

const App = () => {

  const audio = new Audio("https://heller-bucker.s3.eu-west-3.amazonaws.com/steel.mp3")
  const sphereAudio = new Audio("https://heller-bucker.s3.eu-west-3.amazonaws.com/fond-sonore.mp3")
  sphereAudio.loop = true

  $(() => {
    $('#MapView').css({display: 'none'})
  })

  useEffect(() => {
    //getData()
  },[])

  const pauseAudio = () =>{
    audio.pause()
    sphereAudio.pause()
  }
  
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
        <Link className="logo" id="logo" onClick={() => pauseAudio()} to="/"><img src="./LOGO.png"/></Link>
      </div>
      <div id="consultation-container">
        <Link className="consul" id="consul" to="/"><img src="./cosultation.png"/></Link>
      </div>
      <div id="MapView">
        <MapView />
      </div>
      <Switch>
        <Route path='/parallax' component={() => <Parallax />} />
        <Route path='/photosphere' component={() => <Photosphere lecteur={sphereAudio} />} />
        <Route path='/map' component={() => <Map lecteur={sphereAudio} />}/>
        <Route path='/podcast' component={() => <Podcast />} />
        <Route path='/interview' component={Interview} />
        <Route path='/' component={Home} />
      </Switch>
      <Footer id="footer"/>
    </Router>
  )
}

export default App