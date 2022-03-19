import './App.css'
import React, { useEffect } from 'react'
import $ from 'jquery'
import ImageSlider from "react-image-comparison-slider";

const Podcast = (props) => {

  const img1 = './img/etang-4.jpg'
  const img2 = './img/etang-5.jpg'

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
      <div className="page-title-font">TERRE DE SPORT</div>
      <div className="page-subtitle-font">LE RUGBY AU CŒUR DU PARC</div>
      <div className="pod-container">
        <div className="pod-bg"/>
        <div className='video-btns'>
          <button id="play" onClick={() => play()}><img src="./play.png" /></button>
          <button id="pause" onClick={() => pause()}><img src="./pause.png" /></button>
        </div>
          <div className="slider pod-container" style={{ width: 700, height: 450 }}>
            <ImageSlider
              image1={img1}
              image2={img2}
              sliderWidth={2}
              sliderColor="white"
              handleColor="black"
              handleBackgroundColor="white"
            />
          </div>
      </div>
        
    </div>
  )
}

export default Podcast