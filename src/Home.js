import './App.css'
import React, { useEffect } from 'react'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import Lottie from "lottie-react"
import blob from "./Anim/lines.json"
import $ from "jquery"

const Home = props => {

  $(() => {
    window.addEventListener( 'pointermove', parallaxUpdate )
    $('body').css('cursor', 'default')
    $('#footer-text').css({display: 'none'})
    $('#home-link').css({display: 'none'})
    $('#logo').addClass("logo-home").fadeOut(0)
    $('#logo-container').addClass("logo-container-center")
    $('body').css({overflow: 'visible'})
    $("body").removeClass("none")
    $('#consul').css({display: 'block'})
    $('footer').css({position: 'absolute'})

    if(!props.hasLaunched){
      $('#footer-mention').css({display: 'none'})
      $('.logo').fadeOut(0)
    }
    if(props.hasLaunched){
      $('#launch-btn').fadeOut(800)
      $('#launch').css({display: 'none'})
      $('.logo').fadeOut(0).fadeIn(0)
      $('.logo-ville').fadeOut(0)
      $('#footer-mention').css({display: 'block'})
      $('#homeVid').css({display: 'none'})
      props.lecteur.play()
    }
    timer()

  })

  useEffect(() => {
    $('.page').fadeOut(0).fadeIn(1000)
    $('footer').fadeIn(250)
    $('#MapView').css({display: 'none'})
  },[])

  const launch = () => {
    $('#launch').fadeOut(800)
    $('#logo-ville').fadeOut(800)
    $('#launch-btn').fadeOut(800)
    $('#mainVid').trigger('play')
  }

  const endVideo = () => {
    $('#homeVid').fadeOut(500)
    $('#footer-mention').css({display: 'block'})
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

  const timer = () => {
    if(!props.timerRun){
      let delta = 0
      let offset = 0
      props.timerRuns()
      setInterval(() => {
        delta+=0.035
        offset = Math.cos(delta)+1
        $('#para-1').css('transform', `translate(${(postionX*45)}px,${(postionY*40)+(offset*12)}px)`)
        $('#para-2').css('transform', `translate(${postionX*15}px,${(postionY*10)+(offset*5)}px)`)
        $('#para-3').css('transform', `translate(${postionX*20}px,${(postionY*15)+(offset*7)}px)`)
        $('#para-4').css('transform', `translate(${postionX*25}px,${(postionY*20)+(offset*10)}px)`)
        $('#para-5').css('transform', `translate(${postionX*35}px,${(postionY*30)+(offset*8)}px)`)
      }, 16)
    }
  }

  let postionY = 0
  let postionX = 0

  const parallaxUpdate = event => {
    postionY = (event.pageY/window.innerHeight)-0.5
    postionX = (event.pageX/window.innerWidth)-0.5
  }

  const skip = 'Passer >'

  return (
    <div className="page">
      <div className="home-vid-container" id="homeVid">
        <video id='mainVid' controls='controls' src="https://heller-bucker.s3.eu-west-3.amazonaws.com/film+intro_1.mp4" onEnded={() => endVideo()} />
        <button onClick={() => endVideo()} className='skip'>{skip}</button>
      </div>
      <div className="launcher" id='launch'>
        <div className="gradient3"><img src="./gradient.png" /></div>
        <div className="gradient4"><img src="./gradient.png" /></div>
        <img className="introLogo" src='./LOGO.png' />
        <div className='para-container'>
        <img id='para-1' className="para-pic" src="./img/page5/1.png"/>
        <img id='para-2' className="para-pic" src="./img/page5/2.png"/>
        <img id='para-3' className="para-pic" src="./img/page5/3.png"/>
        <img id='para-4' className="para-pic" src="./img/page5/4.png"/>
        <img id='para-5' className="para-pic" src="./img/page5/5.png"/>
      </div>
      </div>
        
      <div className="menu-container">
        <div className="page-para-home">
          Une expérience interactive documentaire vous plonge dans l’histoire du Parc Heller. 
          Comprenez les enjeux de son réaménagement pour mieux répondre à la consultation.
        </div>
        <Link id="map-link" className="link-menu" to="/map"><img src="./img/menu/aux-origines.png" /></Link>
        <Link id="photo-link" className="link-menu" to="/photosphere"><img src="./img/menu/fil-eau.png" /></Link>
        <Link id="pod-link" className="link-menu" to="/podcast"><img src="./img/menu/PLAINE-DE-SPORT.png" /></Link>
        <Link id="inter-link" className="link-menu" to="/interview"><img src="./img/menu/renaissance.png" /></Link>
        <Link id="para-link" className="link-menu" to="/parallax"><img src="./img/menu/emergence.png" /></Link>
      </div>
      <div className="lottieBG">
        <Lottie animationData={blob} loop={true}/>
      </div>
      <button onClick={() => toggleAudio()} className="mute-btn">
        <img id="button-img" src="./sound-on.png" />
      </button>
      <div className='logo-ville-container' id='logo-ville'>
          <img className="logo-ville" src='./logo-ville.png' />
      </div>
      <div className="launcher-btn-container" id='launch-btn'>
        <button className='' onClick={() => launch()} >
            <img src="./lancement-du-site.png" />
        </button>
      </div>
    </div>
  )
}

export default Home