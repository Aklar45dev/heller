import './App.css'
import React, { useRef, useState } from 'react'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import Lottie from "lottie-react"
import blob from "./Anim/lines.json"
import $ from "jquery"

const Home = () => {

  const lottieRef = useRef()
  const [playing, setPlaying] = useState(true)

  $(() => {
    $('#logo').addClass("logo-home")
    $('#logo-container').addClass("logo-container-center")
  })

  const pause = () => {
    if(playing){
      lottieRef.current.pause()
      setPlaying(false)
    }
    if(!playing){
      lottieRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div>
      <div className="menu-container">
        <Link className="link-menu" to="/map">Map</Link>
        <Link className="link-menu" to="/photosphere">Photosphere</Link>
        <Link className="link-menu" to="/podcast">Podcast</Link>
        <Link className="link-menu" to="/interview">Interview</Link>
      </div>
      <div className="lottieBG">
        <Lottie animationData={blob} loop={true}  lottieRef={lottieRef}/>
      </div>
    </div>
  )
}

export default Home