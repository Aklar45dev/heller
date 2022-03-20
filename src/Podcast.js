import './App.css'
import React, { useEffect } from 'react'
import $ from 'jquery'
import AudioPlayer from 'react-audio-element'

const Podcast = props => {

  $(() => {
    $('#logo-container').removeClass("logo-container-center")
    $('#consul').css({display: 'block'})
    $('#logo').removeClass("logo-home")
    window.addEventListener( 'pointermove', parallaxUpdate )
    props.lecteur.pause()
  })

  useEffect(() => {
    $('#pause').css({display: 'none'})
    $('.page').fadeOut(0).fadeIn(1000)
    $('.logo').fadeOut(0).fadeIn(1000)
  },[])

  const parallaxUpdate = event => {
    let postionY = ((event.pageY/window.innerHeight)-0.5)*3
    let postionX = (((event.pageX/window.innerWidth)-0.5))*3-50
    let BGpostionY = ((event.pageY/window.innerHeight)-0.5)*1.5
    let BGpostionX = (((event.pageX/window.innerWidth)-0.5)*1.5)-50
    $('#para-pod-1').css('transform', `translate(${postionX}%,${postionY}%)`)
    $('#para-pod-2').css('transform', `translate(${postionX}%,${postionY}%)`)
    $('#bg-1').css('transform', `translate(${BGpostionX}%,${BGpostionY}%)`)
    $('#bg-2').css('transform', `translate(${BGpostionX}%,${BGpostionY}%)`)
  }

  let isBefore = true

  const toggleScenes = () => {
    if(isBefore){
      isBefore = false
      $('#after').fadeIn(500)
      $('#before').fadeOut(500)
      $('#toggleBtn').html("Après")
      return
    }
    if(!isBefore){
      isBefore = true
      $('#before').fadeIn(500)
      $('#after').fadeOut(500)
      $('#toggleBtn').html("Avant")
    }
  }

  return (
    <div className="page">
      <div className="gradient"><img src="./gradient.png" /></div>
      <div className="gradient2"><img src="./gradient.png" /></div>
      <div className="page-title-font">TERRE DE SPORT</div>
      <div className="page-subtitle-font">le rugby au coeur du parc</div>
      <div className="pod-container">
          <div className='para-unveil'>
            <div id="after">
              <img id='bg-1' src="./img/page3/après-plan-2.jpg" />
              <img id='para-pod-1' src="./img/page3/après-plan-1.png" />
            </div>
            <div id="before">
              <img id='bg-2' src="./img/page3/avant-plan-1.png" />
              <img id='para-pod-2' src="./img/page3/avant-plan-2.png" />
            </div>
          </div>
            <button id="toggleBtn" onClick={() => toggleScenes()}>Avant</button>
          <AudioPlayer src="https://heller-bucker.s3.eu-west-3.amazonaws.com/RUGBY.mp3"/>
      </div>
    </div>
  )
}

export default Podcast