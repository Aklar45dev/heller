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
    $('body').css({overflow: 'visible'})
    $("body").removeClass("none")
    $('#consul').css({display: 'none'})
  })
  
  useEffect(() => {
    $('.page').fadeOut(0).fadeIn(1000)
    $('.logo').fadeOut(0).fadeIn(1000)
    $('#MapView').css({display: 'none'})
  },[])

  return (
    <div className="page">
      <div className="menu-container">
        <Link id="map-link" className="link-menu" to="/map">AUX ORIGINES DU PARC<br/><span className="subtitle">DE 1860 À NOS JOURS</span></Link>
        <Link id="photo-link" className="link-menu" to="/photosphere">AU FIL DE L’EAU<br/><span className="subtitle">ÉTANG, MARE ET RIVIÈRES</span></Link>
        <Link id="pod-link" className="link-menu" to="/podcast">TERRE DE SPORT<br/><span className="subtitle">LE RUGBY AU CŒUR DU PARC</span></Link>
        <Link id="inter-link" className="link-menu" to="/interview">RENAISSANCE D’UNE RIVIÈRE<br/><span className="subtitle">LA RÉOUVERTURE DE LA BIÈVRE</span></Link>
        <Link id="para-link" className="link-menu" to="/parallax">L’ÉMERGENCE D’UN GRAND PROJET<br/><span className="subtitle">RÉAMÉNAGEMENT DU PARC HELLER</span></Link>
      </div>
      <div className="lottieBG">
        <Lottie animationData={blob} loop={true}/>
      </div>
    </div>
  )
}

export default Home