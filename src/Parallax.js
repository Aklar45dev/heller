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
          <div className="page-subtitle-font">réaménagement du parc heller</div>
        </div>
      </div>
    </div>
  )
}

export default Parallax