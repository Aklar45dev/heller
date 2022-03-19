import './App.css'
import { useEffect } from 'react'
import $ from 'jquery'

const Map = props => {

  $(() => {
    $('#logo').removeClass("logo-home")
    $('#consul').css({display: 'block'})
    $('#logo-container').removeClass("logo-container-center")
    //props.lecteur.play()
  })
  
  
  useEffect(() => {
    $('.page').fadeOut(0).fadeIn(1000)
    $('.logo').fadeOut(0).fadeIn(1000)
    $('#MapView').css({display: 'block'})
  },[])
  
  return (
    <div>

    </div>
  )
}

export default Map