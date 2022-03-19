import './App.css'
import { useEffect } from 'react'
import $ from 'jquery'

const Parallax = props => {

  $(() => {
    $('#consul').css({display: 'block'})
    window.addEventListener( 'pointermove', parallaxUpdate )
  })
  
  useEffect(() => {
    $('.page').fadeOut(0).fadeIn(1000)
    $('.logo').fadeOut(0).fadeIn(1000)
    $('#logo').removeClass("logo-home")
    $('#logo-container').removeClass("logo-container-center")
  },[])

  const parallaxUpdate = event => {
    let postionY = (event.pageY/window.innerHeight)-0.5
    let postionX = (event.pageX/window.innerWidth)-0.5
    $('#para-1').css('transform', `translate(${postionX*40}px,${postionY*40}px)`)
    $('#para-2').css('transform', `translate(${postionX*30}px,${postionY*30}px)`)
    $('#para-3').css('transform', `translate(${postionX*20}px,${postionY*20}px)`)
    $('#para-4').css('transform', `translate(${postionX*10}px,${postionY*10}px)`)
    $('#para-5').css('transform', `translate(${postionX*5}px,${postionY*5}px)`)
  }


  
  return (
    <div className="page">
      <div className="page-title-font">L’ÉMERGENCE D’UN GRAND PROJET</div>
      <div className="page-subtitle-font">RÉAMÉNAGEMENT DU PARC HELLER</div>
      <div className='para-container'>
        <img id='para-1' className="para-pic" src="./img/page5/1.png"/>
        <img id='para-2' className="para-pic" src="./img/page5/2.png"/>
        <img id='para-3' className="para-pic" src="./img/page5/3.png"/>
        <img id='para-4' className="para-pic" src="./img/page5/4.png"/>
        <img id='para-5' className="para-pic" src="./img/page5/5.png"/>
      </div>
    </div>
  )
}

export default Parallax