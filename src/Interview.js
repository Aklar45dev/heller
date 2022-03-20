import './App.css'
import React, { useEffect } from 'react'
import $ from "jquery"

const Interview =props => {

  $(() => {
    $('#logo-container').removeClass("logo-container-center")
    $('#logo').removeClass("logo-home")
    props.lecteur.pause()
  })

  useEffect(() => {
    $('.page').fadeOut(0).fadeIn(1000)
    $('#pause').css({display: 'none'})
    $('#consul').css({display: 'block'})
    $('.logo').fadeOut(0).fadeIn(1000)
  })

  return (
    <div className="page photosphere">
      <div className="page-title-font">RENAISSANCE D’UNE RIVIÈRE</div>
      <div className="page-subtitle-font">la réouverture de la bièvre</div>
      <video className="videoPlayerInterview" src="https://heller-bucker.s3.eu-west-3.amazonaws.com/ITV-SMVB%26MGP_1.mp4" preload="auto" controls={true} autoPlay='autoPlay' />
    </div>
  )
}

export default Interview