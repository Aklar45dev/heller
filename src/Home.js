import './App.css'
import React, { useEffect } from 'react'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import Lottie from "lottie-react"
import blob from "./Anim/lines.json"
import $ from "jquery"

const Home = () => {

  $(() => {
    $('#logo').addClass("logo-home")
    $('#logo-container').addClass("logo-container-center")
    /*setInterval(function() {
      $('#map-link').slideUp('500', function() {
          $('#map-link').slideDown('500');
      });
  }, 1000);*/
  
  })
  
  useEffect(() => {
    $('.page').fadeOut(0).fadeIn(1000)
    $('.logo').fadeOut(0).fadeIn(1000)
    $('#MapView').css({display: 'none'})
  },[])

  return (
    <div className="page">
      <div className="menu-container">
        <Link id="map-link" className="link-menu" to="/map">Map</Link>
        <Link id="photo-link" className="link-menu" to="/photosphere">Photosphere</Link>
        <Link id="pod-link" className="link-menu" to="/podcast">Podcast</Link>
        <Link id="inter-link" className="link-menu" to="/interview">Interview</Link>
      </div>
      <div className="lottieBG">
        <Lottie animationData={blob} loop={true}/>
      </div>
    </div>
  )
}

export default Home