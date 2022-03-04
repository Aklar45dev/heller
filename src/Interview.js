import './App.css'
import React, { useRef, useState, useEffect } from 'react'
import $ from "jquery"

const Interview = () => {

  $(() => {
    $('#logo-container').removeClass("logo-container-center")
    $('#logo').removeClass("logo-home")
  })

  useEffect(() => {
    $('.page').fadeOut(0).fadeIn(1000)
    $('.logo').fadeOut(0).fadeIn(1000)
  })

  return (
    <div className="page">
      <div className="page-title-font">RENAISSANCE D'UNE RIVIÈRE</div>
      <div className="video-container">
        <video className="videoPlayer" src="https://cfp-secretariat.s3.us-east-2.amazonaws.com/y2meta.com+-+Capsule+secr%C3%A9tariat+-+Employeur.mp4" preload="auto" controls={true} />
      </div>
    </div>
  )
}

export default Interview