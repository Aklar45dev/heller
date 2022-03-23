import './App.css'
import React, { useEffect } from 'react'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import Lottie from "lottie-react"
import blob from "./Anim/lines.json"
import $ from "jquery"

const Home = props => {

  $(() => {
    $('body').css('cursor', 'default')
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
      $('#homeVid').css({display: 'none'})
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

  const endVideo = () => {
    $('#homeVid').fadeOut(500)
    $('#mainVid').trigger('pause')
    props.lecteur.play()
    $('.page').fadeOut(0).delay(1000).fadeIn(1000)
    $('.logo').fadeOut(0).delay(1000).fadeIn(1000)
    props.didLaunch()
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

  return (
    <div className="page">
      <div className="home-vid-container" id="homeVid">
        <video controls='controls' id='mainVid' src="https://heller-bucker.s3.eu-west-3.amazonaws.com/Intro-B%C3%A9ta_1.mp4" onEnded={() => endVideo()} />
        <button onClick={() => endVideo()} className='skip'>Passer</button>
      </div>
      <div className="launcher" id='launch'>
        <div className="gradient3"><img src="./gradient.png" /></div>
        <div className="gradient4"><img src="./gradient.png" /></div>
        <button onClick={() => launch()} >
          <img src="./lancement-du-site.png" />
        </button>
        <img className="introLogo" src='./LOGO.png' />
      </div>
      <div className="menu-container">
        <Link id="map-link" className="link-menu" to="/map"><img src="./img/menu/aux-origines.png" /></Link>
        <Link id="photo-link" className="link-menu" to="/photosphere"><img src="./img/menu/fil-eau.png" /></Link>
        <Link id="pod-link" className="link-menu" to="/podcast"><img src="./img/menu/terre-de-sport.png" /></Link>
        <Link id="inter-link" className="link-menu" to="/interview"><img src="./img/menu/renaissance.png" /></Link>
        <Link id="para-link" className="link-menu" to="/parallax"><img src="./img/menu/emergence.png" /></Link>
        <Link id="suivre-link" className="link-menu" to="/next"><img src="./img/menu/à-suivre.png" /></Link>
      </div>
      <div className="lottieBG">
        <Lottie animationData={blob} loop={true}/>
      </div>
      <button onClick={() => toggleAudio()} className="mute-btn">
        <img id="button-img" src="./sound-on.png" />
      </button>
    </div>
  )
}

export default Home