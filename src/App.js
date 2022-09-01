import './App.css'
import Home from './Home'
import Photosphere from './Photosphere'
import Map from './Map'
import Info from './Info'
import MapView from './MapView'
import Podcast from './Podcast'
import Interview from './Interview'
import Suivre from './Suivre'
import Parallax from './Parallax'
import Footer from './Footer'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import $ from "jquery"
import React, { useEffect, useRef } from 'react'

const App = () => {

  const sphereAudio = new Audio("https://heller-bucker.s3.eu-west-3.amazonaws.com/fond-sonore.mp3")
  sphereAudio.loop = true
  //sphereAudio.muted = true
  sphereAudio.volume = 0.6
  let hasLaunched = false
  let timerRun = false

  $(() => {
    $('#MapView').css({display: 'none'})
    $('#consultation-container').fadeOut(0).delay(1000).fadeIn(10)
  })

  useEffect(() => {
    //getData()
  },[])

  const pauseAudio = () =>{
    sphereAudio.pause()
  }

  const didLaunch = () => {
    hasLaunched = true
  }

  const timerRuns = () => {
    timerRun = true
  }
  
  const getData = async() => {
    await fetch('https://y7lr4l3pqd.execute-api.eu-west-3.amazonaws.com/Prod')
      .then(response => response.json())
      .then(data => {
          console.log(data)
      })
    }

  const showMap = () => {
    MapRef.current.display()
  }
  
  const MapRef = useRef()
  const accueil = "<<"

  return (
    <Router>
        <div className='paysage'>
          <p>Tournez l'appareil en position paysage</p>
          <img src="./landscape.png" />
        </div>
        <div id="logo-container">
          <Link className="logo" id="logo" onClick={() => pauseAudio()} to="/">
            <img src="./LOGO.png"/>
          </Link>
          <Link id="home-link" onClick={() => pauseAudio()} to="/"><strong>{accueil}</strong></Link>
        </div>
        <div id="consultation-container">
          <a className="consul" id="consul" onClick={() => pauseAudio()} href="https://participer.ville-antony.fr/fr-FR/projects/consultation-parc-heller/"><img src="./BOUTTON RESULTATS.png"/></a>
        </div>
        <div id="MapView">
          <MapView ref={el => MapRef.current = el} />
        </div>
        <Switch>
          <Route path='/parallax' component={() => <Parallax lecteur={sphereAudio}/>} />
          <Route path='/info' component={() => <Info lecteur={sphereAudio}/>} />
          <Route path='/photosphere' component={() => <Photosphere lecteur={sphereAudio} />} />
          <Route path='/map' component={() => <Map lecteur={sphereAudio} showMap={showMap} />}/>
          <Route path='/podcast' component={() => <Podcast lecteur={sphereAudio}/>} />
          <Route path='/interview'  component={() => <Interview  lecteur={sphereAudio}/>} />
          <Route path='/next'  component={() => <Suivre  lecteur={sphereAudio}/>} />
          <Route path='/' component={() => <Home  lecteur={sphereAudio} hasLaunched={hasLaunched} didLaunch={didLaunch}  timerRun={timerRun} timerRuns={timerRuns}/>} />
        </Switch>
        <Footer id="footerId"/>
    </Router>
  )
}

export default App