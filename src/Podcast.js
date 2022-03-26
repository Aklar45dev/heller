import './App.css'
import './App.scss'
import React, { useEffect } from 'react'
import $ from 'jquery'
import { useHistory } from 'react-router-dom'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Podcast = props => {

  $(() => {
    $('#logo-container').removeClass("logo-container-center")
    $('#consul').css({display: 'block'})
    $('#logo').removeClass("logo-home")
    window.addEventListener( 'pointermove', parallaxUpdate )
    props.lecteur.pause()
    $('#before').fadeOut(0)
    $('#before2').fadeOut(0)
    $('#after2').fadeOut(0)
    $('#before3').fadeOut(0)
    $('#after3').fadeOut(0)
    $('body').css('cursor', 'default')
    $('#footer-text').css({display: 'block'})
    $('#home-link').css({display: 'block'})
    $('#footer-mention').css({display: 'none'})
  })

  useEffect(() => {
    $('#pause').css({display: 'none'})
    $('.page').fadeOut(0).fadeIn(1000)
    $('.logo').fadeOut(0).fadeIn(1000)
  },[])

  const parallaxUpdate = event => {
    let postionY = ((event.pageY/window.innerHeight)-0.5)*3
    let postionX = (((event.pageX/window.innerWidth)-0.5))*3-50
    let BGpostionY = ((event.pageY/window.innerHeight)-0.5)*1.5
    let BGpostionX = (((event.pageX/window.innerWidth)-0.5)*1.5)-50
    let LpostionY = ((event.pageY/window.innerHeight)-0.5)*10
    let LpostionX = (((event.pageX/window.innerWidth)-0.5)*10)-50
    $('#para-pod-1').css('transform', `translate(${postionX}%,${postionY}%)`)
    $('#para-leg-1').css('transform', `translate(${LpostionX}%,${LpostionY}%)`)
    $('#bg-1').css('transform', `translate(${BGpostionX}%,${BGpostionY}%)`)
    $('#para-pod-2').css('transform', `translate(${postionX}%,${postionY}%)`)
    $('#para-leg-2').css('transform', `translate(${LpostionX}%,${LpostionY}%)`)
    $('#bg-2').css('transform', `translate(${BGpostionX}%,${BGpostionY}%)`)
    
    $('#para-pod-3').css('transform', `translate(${postionX}%,${postionY}%)`)
    $('#para-leg-3').css('transform', `translate(${LpostionX}%,${LpostionY}%)`)
    $('#bg-3').css('transform', `translate(${BGpostionX}%,${BGpostionY}%)`)
    $('#para-pod-4').css('transform', `translate(${postionX}%,${postionY}%)`)
    $('#para-leg-4').css('transform', `translate(${LpostionX}%,${LpostionY}%)`)
    $('#bg-4').css('transform', `translate(${BGpostionX}%,${BGpostionY}%)`)

    $('#para-pod-5').css('transform', `translate(${postionX}%,${postionY}%)`)
    $('#para-leg-5').css('transform', `translate(${LpostionX}%,${LpostionY}%)`)
    $('#bg-5').css('transform', `translate(${BGpostionX}%,${BGpostionY}%)`)
    $('#para-pod-6').css('transform', `translate(${postionX}%,${postionY}%)`)
    $('#para-leg-6').css('transform', `translate(${LpostionX}%,${LpostionY}%)`)
    $('#bg-6').css('transform', `translate(${BGpostionX}%,${BGpostionY}%)`)
  }

  const history = useHistory()

  const nextPage = () => {
    history.push("/interview");
  }

  let slideId = 1;

  const processId = (increment) => {
    let id = 1
    if(slideId == 6 && increment === 1){
      id = 1
      switchSlide(id)
      return
    }
    if(slideId == 1 && increment === -1){
      id = 6
      switchSlide(id)
      return
    }
    else{
      id = slideId+increment
      switchSlide(id)
    }
    
  }

  const switchSlide = id => {
    slideId = id
    $('#before').fadeOut(0)
    $('#after').fadeOut(0)
    $('#before2').fadeOut(0)
    $('#after2').fadeOut(0)
    $('#before3').fadeOut(0)
    $('#after3').fadeOut(0)
    $('#btn1').removeClass('pod-btn-on')
    $('#btn2').removeClass('pod-btn-on')
    $('#btn3').removeClass('pod-btn-on')
    $('#btn4').removeClass('pod-btn-on')
    $('#btn5').removeClass('pod-btn-on')
    $('#btn6').removeClass('pod-btn-on')
    switch (id) {
      case 1:
        $('#after').fadeIn(500)
        $('#btn1').addClass('pod-btn-on')
        break;
      case 2:
        $('#btn2').addClass('pod-btn-on')
        $('#after2').fadeIn(500)
        break;
      case 3:
        $('#btn3').addClass('pod-btn-on')
        $('#after3').fadeIn(500)
        break;
      case 4:
        $('#btn4').addClass('pod-btn-on')
        $('#before').fadeIn(500)
        break;
      case 5:
        $('#btn5').addClass('pod-btn-on')
        $('#before2').fadeIn(500)
        break;
      case 6:
        $('#btn6').addClass('pod-btn-on')
        $('#before3').fadeIn(500)
        break;
    }
  }

  const right = '>'
  const left = '<'

  return (
    <div className="page">
      <div className="gradient"><img src="./gradient.png" /></div>
      <div className="gradient2"><img src="./gradient.png" /></div>
      <div className="header-page-scroll">
        <div className="text-wrappper">
          <div className="page-title-font">TERRE DE SPORT</div>
          <div className="page-subtitle-font">le rugby au coeur du parc</div>
          <div className="page-para">
          Entre 1940 et 1970, la Ville implante au parc Heller des espaces pour les sportifs,<br/>
          notamment de grands terrains de rugby. Jusqu’à leur déménagement, les matchs<br/>
          attireront un public toujours de plus en plus nombreux.
          </div>
        </div>
      </div>
      <div className="pod-container">
          <div className='para-unveil'>
            <div className='pod-arrow-container'>
              <button onClick={() => processId(-1)} className="left">{left}</button>
              <button onClick={() => processId(1)} className="right">{right}</button>
            </div>
            <div id="after">
              <img id='bg-1' src="./img/page3/après-plan-2.png" />
              <img id='para-pod-1' src="./img/page3/après-plan-1.png" />
              <img id='para-leg-1' src="./img/page3/legende-2022.png" />
            </div>
            <div id="before">
              <img id='bg-2' src="./img/page3/avant-plan-1.png" />
              <img id='para-pod-2' src="./img/page3/avant-plan-2.png" />
              <img id='para-leg-2' src="./img/page3/legende-1960.png" />
            </div>
            <div id="after2">
              <img id='bg-3' src="./img/page3/image-3-arriere_plan.png" />
              <img id='para-pod-3' src="./img/page3/image-3-premier_plan.png" />
              <img id='para-leg-3' src="./img/page3/legende-2022.png" />
            </div>
            <div id="before2">
              <img id='bg-4' src="./img/page3/image-2-arriere-plan.png" />
              <img id='para-pod-4' src="./img/page3/image-2-premier-plan.png" />
              <img id='para-leg-4' src="./img/page3/legende-1960.png" />
            </div>
            <div id="after3">
              <img id='bg-5' src="./img/page3/image-4-arriere-plan.png" />
              <img id='para-pod-5' src="./img/page3/image-4-premier-plan.png" />
              <img id='para-leg-5' src="./img/page3/legende-2022.png" />
            </div>
            <div id="before3">
              <img id='bg-6' src="./img/page3/image-3-arriere-plan.png" />
              <img id='para-pod-6' src="./img/page3/image-3-premier.png" />
              <img id='para-leg-6' src="./img/page3/legende-1960.png" />
            </div>
          </div>
          <div className='pod-btn-container'>
            <button className="pod-btn pod-btn-on" id="btn1" onClick={() => switchSlide(1)}></button>
            <button className="pod-btn" id="btn2" onClick={() => switchSlide(2)}></button>
            <button className="pod-btn" id="btn3" onClick={() => switchSlide(3)}></button>
            <button className="pod-btn" id="btn4" onClick={() => switchSlide(4)}></button>
            <button className="pod-btn" id="btn5" onClick={() => switchSlide(5)}></button>
            <button className="pod-btn" id="btn6" onClick={() => switchSlide(6)}></button>
          </div>
          <div className="podPlayer">
            <AudioPlayer autoPlay src="https://heller-bucker.s3.eu-west-3.amazonaws.com/RUGBY.mp3"/>
          </div>
      </div>
    </div>
  )
}

export default Podcast