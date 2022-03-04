import './App.css'
import { useEffect } from 'react'
import $ from 'jquery'

const Map = () => {

  $(() => {
    $('#logo').removeClass("logo-home")
    $('#logo-container').removeClass("logo-container-center")
  })
  
  
  useEffect(() => {
    $('.page').fadeOut(0).fadeIn(1000)
    $('.logo').fadeOut(0).fadeIn(1000)
    $('#MapView').css({display: 'block'})
  },[])
  
  return (
    <div/>
  )
}

export default Map