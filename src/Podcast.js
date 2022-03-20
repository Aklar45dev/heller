import './App.css'
import React, { useEffect } from 'react'
import $ from 'jquery'
import AudioPlayer from 'react-audio-element'

const Podcast = () => {

  const img1 = './img/page3/après-plan-1.png'
  const img2 = './img/page3/avant-plan-2.png'

  $(() => {
    $('#logo-container').removeClass("logo-container-center")
    $('#consul').css({display: 'block'})
    $('#logo').removeClass("logo-home")
  })

  useEffect(() => {
    $('#pause').css({display: 'none'})
    $('.page').fadeOut(0).fadeIn(1000)
    $('.logo').fadeOut(0).fadeIn(1000)
  },[])

  return (
    <div className="page">
      <div className="page-title-font">TERRE DE SPORT</div>
      <div className="page-subtitle-font">LE RUGBY AU CŒUR DU PARC</div>
      <div className="pod-container">
          <div className="slider pod-container" style={{ width: 700, height: 450 }}>
            
          </div>
          <AudioPlayer src="https://heller-bucker.s3.eu-west-3.amazonaws.com/RUGBY.mp3"/>
      </div>
        
    </div>
  )
}

export default Podcast