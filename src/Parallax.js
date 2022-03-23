import './App.css'
import { useEffect } from 'react'
import $ from 'jquery'
import { useHistory } from 'react-router-dom'

const Parallax = props => {

  $(() => {
    $('#consul').css({display: 'block'})
    window.addEventListener( 'pointermove', parallaxUpdate )
    props.lecteur.pause()
  })

  const timer = () => {
    if(!props.timerRun){
      let delta = 0
      let offset = 0
      props.timerRuns()
      setInterval(() => {
        delta+=0.035
        offset = Math.cos(delta)+1
        $('#para-1').css('transform', `translate(${(postionX*45)}px,${(postionY*40)+(offset*12)}px)`)
        $('#para-2').css('transform', `translate(${postionX*15}px,${(postionY*10)+(offset*5)}px)`)
        $('#para-3').css('transform', `translate(${postionX*20}px,${(postionY*15)+(offset*7)}px)`)
        $('#para-4').css('transform', `translate(${postionX*25}px,${(postionY*20)+(offset*10)}px)`)
        $('#para-5').css('transform', `translate(${postionX*35}px,${(postionY*30)+(offset*8)}px)`)
      }, 16)
    }
  }
  
  useEffect(() => {
    $('.page').fadeOut(0).fadeIn(1000)
    $('.logo').fadeOut(0).fadeIn(1000)
    $('#logo').removeClass("logo-home")
    $('#logo-container').removeClass("logo-container-center")
    timer()
    
  },[])

  
  let postionY = 0
  let postionX = 0

  const parallaxUpdate = event => {
    postionY = (event.pageY/window.innerHeight)-0.5
    postionX = (event.pageX/window.innerWidth)-0.5
  }

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
        <button onClick={() => nextPage()} title="page suivante">→</button>
      </div>
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