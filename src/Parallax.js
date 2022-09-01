import './App.css'
import { useEffect } from 'react'
import $ from 'jquery'
import { useHistory } from 'react-router-dom'

const Parallax = props => {

  $(() => {
    $('#consul').css({display: 'block'})
    props.lecteur.pause()
    $('#footer-text').css({display: 'block'})
    $('#home-link').css({display: 'block'})
    $('#footer-mention').css({display: 'none'})
  })
  
  useEffect(() => {
    $('footer').css({position: 'unset'})
    $('.page').fadeOut(0).fadeIn(1000)
    $('.logo').fadeOut(0).fadeIn(1000)
    $('#logo').removeClass("logo-home")
    $('#logo-container').removeClass("logo-container-center")
  },[])

  
  const history = useHistory()

  const nextPage = () => {
    history.push("/next");
  }
  
  return (
    <div className="page">
      <div className="gradient"><img src="./gradient.png" /></div>
      <div className="gradient2"><img src="./gradient.png" /></div>
      <div className="header-page">
        <div className="text-wrappper">
          <div className="page-title-font">L’ÉMERGENCE D’UN GRAND PROJET</div>
          <div className="page-subtitle-font">La réouverture de la Bièvre</div>
          <div className="page-subtitle-font-white">Découvrez l'avancée du projet à travers cette websérie</div>
        </div>
      </div>
      <div className="video-container">
        <div className='video-container-el'>
          <div className="page-title-font">INTRO</div>
          <video controls="controls" src="https://heller-bucker.s3.eu-west-3.amazonaws.com/page+5_1.mp4" />
        </div>
        <div className='video-container-el'>
          <div className="page-title-font">ÉPISODE 1</div>
          <iframe src="https://www.youtube.com/embed/L1aF3zSD1S0" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
        </div>
        <div className='video-container-el'>
          <div className="page-title-font">ÉPISODE 2</div>
          <iframe src="https://www.youtube.com/embed/nZE1WXzphhQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Parallax