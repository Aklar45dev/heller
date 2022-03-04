import './App.css'
import React, { useEffect, useRef } from 'react'
import $ from 'jquery'

const Podcast = () => {

  const audio = new Audio("/steel.mp3")
  const lottieRef = useRef()

  $(() => {
    $('#logo-container').removeClass("logo-container-center")
    $('#logo').removeClass("logo-home")
  })

  useEffect(() => {
    $('#pause').css({display: 'none'})

  },[])

  const play = () => {
    audio.play()
    $('#pause').css({display: 'block'})
    $('#play').css({display: 'none'})
  }

  const pause = () => {
    audio.pause()
    $('#pause').css({display: 'none'})
    $('#play').css({display: 'block'})
  }

  return (
    <div>
      <div className="page-title-font">UN ESPACE POUR LES SPORTIFS</div>
      <img className="podcastIMG" src="./soccer.jpg" alt="podcast"/>
      <div className='play-btn'>
        <button id="play" onClick={() => play()}>PLAY</button>
        <button id="pause" onClick={() => pause()}>STOP</button>
      </div>
    </div>
  )
}

export default Podcast