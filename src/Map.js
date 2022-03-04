import './App.css'
import { useEffect } from 'react'
import ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginIndicator} from "scrollmagic-plugins"
import $ from 'jquery'

const Map = () => {

  $(() => {
    $('#logo').removeClass("logo-home")
    $('#logo-container').removeClass("logo-container-center")
  })
  
  useEffect(() => {

    ScrollMagicPluginIndicator(ScrollMagic)
    const controller = new ScrollMagic.Controller()
  
    const Scene1 = new ScrollMagic.Scene({
      triggerElement: '#project01',
      duration: '80%',
      reverse: true,
      triggerHook: 0.5,
    })
    .setClassToggle('#project01', 'fade-in') //add class to project01
    .addIndicators({
      name: "project01",
      colorStart: "orange",
      colorTrigger: 'orange'
    })
    .addTo(controller)

    Scene1.on("progress",  event => {
      $('#red').css({opacity: event.progress}) 
    })

    const Scene2 = new ScrollMagic.Scene({
      triggerElement: '#project02',
      triggerHook: 0.5,
      reverse: true,
      duration: '80%'
    })
    .setClassToggle('#project02', 'fade-in') //add class to project02
    .addIndicators({
      name: "project02",
      colorStart: "white",
      colorTrigger: 'white'
      
    })
    .addTo(controller)

    Scene2.on("progress",  event => {
      $('#yellow').css({opacity: event.progress}) 
    })

    const Scene3 = new ScrollMagic.Scene({
      triggerElement: '#project03',
      triggerHook: 0.5,
      reverse: true,
      duration: '80%'
    })
    .setClassToggle('#project03', 'fade-in') //add class to project02
    .addIndicators({
      name: "project03",
      colorStart: "white",
      colorTrigger: 'white'
      
    })
    .addTo(controller)

    Scene3.on("progress",  event => {
      $('#green').css({opacity: event.progress}) 
    })

  },[])

  return (
    <div className="App">

      <div className="container">
        <div className="page-title-font">AUX ORIGINES DU PARC</div>
        <div className="element" id="red"/>
        <div className="element" id="yellow"/>
        <div className="element" id="green"/>
      </div>
      <div className="project" />
        <div id="project01" className="project"/>
        <div id="project02" className="project"/>
        <div id="project03" className="project"/>
      <div className="project" />
    </div>
  )
}

export default Map