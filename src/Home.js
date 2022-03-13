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
    $("body").removeClass("none")
  })
  
  useEffect(() => {
    $('.page').fadeOut(0).fadeIn(1000)
    $('.logo').fadeOut(0).fadeIn(1000)
    $('#MapView').css({display: 'none'})
  },[])

  return (
    <div className="page">
      <div className="menu-container">
        <Link id="map-link" className="link-menu" to="/map">Aux origines<br/>du parc</Link>
        <Link id="photo-link" className="link-menu" to="/photosphere">Historique<br/>de l'enfouissement<br/>de la briève</Link>
        <Link id="pod-link" className="link-menu" to="/podcast">Un espace<br/>pour les sportifs</Link>
        <Link id="inter-link" className="link-menu" to="/interview">Renaissance<br/>d'une rivière :<br/>La réouverture<br/>de la brièvre</Link>
      </div>
      <div className="lottieBG">
        <Lottie animationData={blob} loop={true}/>
      </div>
    </div>
  )
}

export default Home