import './App.css'
import React, { useEffect } from 'react'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import Lottie from "lottie-react"
import blob from "./Anim/lines.json"
import $ from "jquery"

const Home = props => {

  $(() => {
    $('#logo').addClass("logo-home").fadeOut(0)
    $('#logo-container').addClass("logo-container-center")
    $('body').css({overflow: 'visible'})
    $("body").removeClass("none")
    $('#consul').css({display: 'none'})
    if(!props.hasLaunched){
      $('.logo').fadeOut(0)
    }
    if(props.hasLaunched){
      $('#launch').css({display: 'none'})
      $('.logo').fadeOut(0).fadeIn(0)
      $('#mainVid').css({display: 'none'})
      props.lecteur.play()
    }
  })

  useEffect(() => {
    $('.page').fadeOut(0).fadeIn(1000)
    $('#MapView').css({display: 'none'})
  },[])

  const launch = () => {
    $('#launch').fadeOut(800)
    $('#mainVid').trigger('play')
  }

  let audioPlaying = true

  const toggleAudio = () => {
    if(audioPlaying){
      props.lecteur.pause()
      audioPlaying = false
      $("#button-img").attr("src","./sound-off.png")
      return
    }
    if(!audioPlaying){
      $("#button-img").attr("src","./sound-on.png")
      props.lecteur.play()
      audioPlaying = true
    }
  }

  const endVideo = () => {
    $('#mainVid').fadeOut(500)
    props.lecteur.play()
    $('.page').fadeOut(0).delay(1000).fadeIn(1000)
    $('.logo').fadeOut(0).delay(1000).fadeIn(1000)
    props.didLaunch()
  }

  return (
    <div className="page">
      <video controls='controls' id='mainVid' src="https://heller-bucker.s3.eu-west-3.amazonaws.com/Intro-B%C3%A9ta.mp4" onEnded={() => endVideo()} />
      <div className="launcher" id='launch'><button onClick={() => launch()} ><img src="./lancement-du-site.png" /></button></div>
      <div className="menu-container">
        <Link id="map-link" className="link-menu" to="/map">AUX ORIGINES<br/>DU PARC</Link>
        <Link id="photo-link" className="link-menu" to="/photosphere">AU FIL<br/>DE L’EAU</Link>
        <Link id="pod-link" className="link-menu" to="/podcast">TERRE<br/>DE SPORT</Link>
        <Link id="inter-link" className="link-menu" to="/interview">RENAISSANCE<br/>D’UNE RIVIÈRE</Link>
        <Link id="para-link" className="link-menu" to="/parallax">L’ÉMERGENCE D’UN<br/>GRAND PROJET</Link>
        <Link id="suivre-link" className="link-menu" to="/next">À SUIVRE...</Link>
      </div>
      <div className="lottieBG">
        <Lottie animationData={blob} loop={true}/>
      </div>
    </div>
  )
}

export default Home