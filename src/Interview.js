import './App.css'
import React, { useEffect } from 'react'
import $ from "jquery"
import { useHistory } from 'react-router-dom'

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

  const history = useHistory()

  const nextPage = () => {
    history.push("/parallax");
  }

  return (
    <div className="page photosphere">
      <div className="header-page">
        <div className="text-wrappper">
          <div className="page-title-font">RENAISSANCE D’UNE RIVIÈRE</div>
          <div className="page-subtitle-font">la réouverture de la bièvre</div>
        </div>
        <button onClick={() => nextPage()} title="page suivante">→</button>
      </div>
      <div className="inter-vid-container">
        <video className="videoPlayerInterview" src="https://heller-bucker.s3.eu-west-3.amazonaws.com/ITV-SMVB%26MGP_1.mp4" preload="auto" controls={true} autoPlay='autoPlay' />
      </div>
    </div>
  )
}

export default Interview