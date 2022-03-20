import './App.css'
import React, { useEffect } from 'react'
import $ from "jquery"

const Suivre = props => {

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
    <div className="page">
      <div className="gradient"><img src="./gradient.png" /></div>
      <div className="gradient2"><img src="./gradient.png" /></div>
      <div className="page-title-font">À SUIVRE...</div>
      <div className="video-container">
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/601Wt-967Bk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default Suivre