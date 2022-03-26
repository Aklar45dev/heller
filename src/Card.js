import './App.css'
import $ from 'jquery'
import React,{ useEffect, useState, useRef, forwardRef, useImperativeHandle  } from 'react';
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
import ReactAudioPlayer  from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

const Card = forwardRef((props, ref) => {
  
  const player = useRef()

  useImperativeHandle(ref, () => ({

    playAudio() {
      if(props.audio[parseInt(props.point.name)-1].src !== undefined){
        player.current.audio.current.play()
      }
    }
    
  }))

  const hideCard = () => {
    if(props.audio[parseInt(props.point.name)-1].src !== undefined){
      player.current.audio.current.pause()
    }
    $(`#${props.point.name}`).css({display: 'none'})
    props.hideCard()
    if(props.audio[parseInt(props.point.name)-1] !== ""){
      props.audio[parseInt(props.point.name)-1].pause()
    }
  }

  return (
    <div id={props.point.name} className="card-container">
        <button className="close-btn" onClick={() => hideCard()}>X</button>
        <div className="card">
          <div className="">
            <ImageGallery items={props.point.img} showBullets={true} showFullscreenButton={true} showNav={true} showPlayButton={false} slideDuration={250} slideInterval={5000}/>
          {props.audio[parseInt(props.point.name)-1].src !== undefined ?
            <div className="player-container-card">
              <ReactAudioPlayer ref={player} src={props.audio[parseInt(props.point.name)-1].src}/>
            </div> : <div/>
          }
          </div>
          <div className="card-content">
            <h2>{props.point.title}</h2>
            <p className="card-text">{props.point.text}</p>
          </div>
        </div>
      </div>
  )
})

export default Card