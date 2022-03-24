import './App.css'
import { useEffect } from 'react'
import $ from 'jquery'

const Map = props => {

  $(() => {
    $('#logo').removeClass("logo-home")
    $('#consul').css({display: 'block'})
    $('#logo-container').removeClass("logo-container-center")
    props.lecteur.play()
  })

  useEffect(() => {
    $('.page').fadeOut(0).fadeIn(1000)
    $('.logo').fadeOut(0).fadeIn(1000)
    $('#MapView').css({display: 'block'})
    props.showMap()
  },[])
  
  let audioPlaying = true

  const toggleAudio = () => {
    if(audioPlaying){
      props.lecteur.pause()
      audioPlaying = false
      $("#button-img").attr("src","./sound-off.png")
      return
    }
    if(!audioPlaying){
      $("#button-img").attr("src","./sound-on.png")
      props.lecteur.play()
      audioPlaying = true
    }
  }

  return (
    <div>
      <button onClick={() => toggleAudio()} className="mute-btn">
        <img id="button-img" src="./sound-on.png" />
      </button>
      <img className='icon-scroll' src="./scroll.png" />

    </div>
  )
}

export default Map