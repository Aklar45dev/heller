import './App.css'
import React, { useEffect } from 'react'
import $ from 'jquery'

const Podcast = (props) => {

  $(() => {
    $('#logo-container').removeClass("logo-container-center")
    $('#logo').removeClass("logo-home")
  })

  useEffect(() => {
    $('#pause').css({display: 'none'})
    $('.page').fadeOut(0).fadeIn(1000)
    $('.logo').fadeOut(0).fadeIn(1000)
  },[])

  const play = () => {
    props.lecteur.play()
    $('#pause').css({display: 'block'})
    $('#play').css({display: 'none'})
  }

  const pause = () => {
    props.lecteur.pause()
    $('#pause').css({display: 'none'})
    $('#play').css({display: 'block'})
  }

  return (
    <div className="page">
      <div className="page-title-font">UN ESPACE POUR LES SPORTIFS</div>
      <div className="pod-container">
        <div className="pod-bg"/>
        <div className='video-btns'>
          <button id="play" onClick={() => play()}><img src="./play.png" /></button>
          <button id="pause" onClick={() => pause()}><img src="./pause.png" /></button>
        </div>
        <img className="pod-img" src="./soccer.jpg" alt="podcast"/>
      </div>
    </div>
  )
}

export default Podcast