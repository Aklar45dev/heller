import './App.css'
import { useEffect } from 'react'
import ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginIndicator} from "scrollmagic-plugins"
import $ from 'jquery'

const MapView = () => {

  useEffect(() => {
    //ScrollMagicPluginIndicator(ScrollMagic)
    const controller = new ScrollMagic.Controller()

    //scene00
    const Scene00 = new ScrollMagic.Scene({
      triggerElement: '#project00',
      duration: '80%',
      reverse: true,
      triggerHook: 0.5,
    })
    .setClassToggle('#project00', 'fade-in') //add class to project01
    .addTo(controller)

    Scene00.on("progress",  event => {
      $('#el-00').css({opacity: event.progress}) 
    })

    //scene0
    const Scene0 = new ScrollMagic.Scene({
      triggerElement: '#project0',
      duration: '80%',
      reverse: true,
      triggerHook: 0.5,
    })
    .setClassToggle('#project0', 'fade-in') //add class to project01
    .addTo(controller)

    Scene0.on("progress",  event => {
      $('#el-0').css({opacity: event.progress}) 
    })

    //scene1
    const Scene1 = new ScrollMagic.Scene({
      triggerElement: '#project01',
      duration: '80%',
      reverse: true,
      triggerHook: 0.5,
    })
    .setClassToggle('#project01', 'fade-in') //add class to project01
    .addTo(controller)

    Scene1.on("progress",  event => {
      $('#el-1').css({opacity: event.progress}) 
    })

    //scene2
    const Scene2 = new ScrollMagic.Scene({
      triggerElement: '#project02',
      triggerHook: 0.5,
      reverse: true,
      duration: '80%'
    })
    .setClassToggle('#project02', 'fade-in') //add class to project02
    .addTo(controller)

    Scene2.on("progress",  event => {
      $('#el-2').css({opacity: event.progress}) 
    })

    //scene3
    const Scene3 = new ScrollMagic.Scene({
      triggerElement: '#project03',
      triggerHook: 0.5,
      reverse: true,
      duration: '80%'
    })
    .setClassToggle('#project03', 'fade-in') //add class to project02
    .addTo(controller)

    Scene3.on("progress",  event => {
      $('#el-3').css({opacity: event.progress}) 
    })

    //scene4
    const Scene4 = new ScrollMagic.Scene({
      triggerElement: '#project04',
      triggerHook: 0.5,
      reverse: true,
      duration: '80%'
    })
    .setClassToggle('#project04', 'fade-in') //add class to project02
    .addTo(controller)

    Scene4.on("progress",  event => {
      $('#el-4').css({opacity: event.progress}) 
    })

    //scene5
    const Scene5 = new ScrollMagic.Scene({
      triggerElement: '#project05',
      triggerHook: 0.5,
      reverse: true,
      duration: '80%'
    })
    .setClassToggle('#project05', 'fade-in') //add class to project02
    .addTo(controller)

    Scene5.on("progress",  event => {
      $('#el-5').css({opacity: event.progress}) 
    })

    //scene6
    const Scene6 = new ScrollMagic.Scene({
      triggerElement: '#project06',
      triggerHook: 0.5,
      reverse: true,
      duration: '80%'
    })
    .setClassToggle('#project06', 'fade-in') //add class to project02
    .addTo(controller)

    Scene6.on("progress",  event => {
      $('#el-6').css({opacity: event.progress}) 
    })

    //scene7
    const Scene7 = new ScrollMagic.Scene({
      triggerElement: '#project07',
      triggerHook: 0.5,
      reverse: true,
      duration: '80%'
    })
    .setClassToggle('#project07', 'fade-in') //add class to project02
    .addTo(controller)

    Scene7.on("progress",  event => {
      $('#el-7').css({opacity: event.progress}) 
    })
    
  },[])

  return (
    <div className="page">
      <div className="down-arrow">↓</div>
      <div className="container">
        <div className="page-title-font-map">AUX ORIGINES DU PARC</div>
        <div className="map-container">
          <div className="map-img-container">
            <img src="./soccer.jpg"  id="el-0"/>
            <img src='./map.png' id="el-00"/>
          </div>
          <div className="map-text-container">
            <div className="map-el" id="el-1"><span className="date">1938</span><br/><span className="map-title">Acquisition</span></div>
            <div className="map-el" id="el-2"><span className="date">1940</span><br/><span className="map-title">création étang du soleil</span></div>
            <div className="map-el" id="el-3"><span className="date">1945</span><br/><span className="map-title">nom HELLER</span></div>
            <div className="map-el" id="el-4"><span className="date">1956</span><br/><span className="map-title">Bièvre recouverte</span></div>
            <div className="map-el" id="el-5"><span className="date">1986</span><br/><span className="map-title">restauration du moulin</span></div>
            <div className="map-el" id="el-6"><span className="date">1990</span><br/><span className="map-title">Bassin de la noisette</span></div>
            <div className="map-el" id="el-7"><span className="date">1994</span><br/><span className="map-title">Fontaine et statue côté Chateau Sarran</span></div>
          </div>
        </div>
        </div>
      <div className="project" />
        <div id="project000" className="project"/>
        <div id="project00" className="project"/>
        <div id="project01" className="project"/>
        <div id="project02" className="project"/>
        <div id="project03" className="project"/>
        <div id="project04" className="project"/>
        <div id="project05" className="project"/>
        <div id="project06" className="project"/>
        <div id="project07" className="project"/>
      <div className="project" />
    </div>
  )
}

export default MapView