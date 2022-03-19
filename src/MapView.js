import './App.css'
import { useEffect } from 'react'
import ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginIndicator} from "scrollmagic-plugins"
import $ from 'jquery'

const MapView = () => {

  useEffect(() => {
    //ScrollMagicPluginIndicator(ScrollMagic)
    const controller = new ScrollMagic.Controller()

    //scene1
    const Scene1 = new ScrollMagic.Scene({
      triggerElement: '#project01',
      duration: '100%',
      reverse: true,
      triggerHook: 0.5,
    })
    .setClassToggle('#project01', 'fade-in') //add class to project01
    .addTo(controller)

    Scene1.on("progress",  event => {
      $('#el-1').css({opacity: event.progress*2}) 
      $('#img-1').css({opacity: event.progress*2}) 
    })

    //scene2
    const Scene2 = new ScrollMagic.Scene({
      triggerElement: '#project02',
      triggerHook: 0.5,
      reverse: true,
      duration: '100%'
    })
    .setClassToggle('#project02', 'fade-in') //add class to project02
    .addTo(controller)

    Scene2.on("progress",  event => {
      $('#img-2').css({opacity: event.progress*2}) 
      $('#el-2').css({opacity: event.progress*2}) 
    })

    //scene3
    const Scene3 = new ScrollMagic.Scene({
      triggerElement: '#project03',
      triggerHook: 0.5,
      reverse: true,
      duration: '100%'
    })
    .setClassToggle('#project03', 'fade-in') //add class to project02
    .addTo(controller)

    Scene3.on("progress",  event => {
      $('#img-3').css({opacity: event.progress*2}) 
      $('#el-3').css({opacity: event.progress*2}) 
    })

    //scene4
    const Scene4 = new ScrollMagic.Scene({
      triggerElement: '#project04',
      triggerHook: 0.5,
      reverse: true,
      duration: '100%'
    })
    .setClassToggle('#project04', 'fade-in') //add class to project02
    .addTo(controller)

    Scene4.on("progress",  event => {
      $('#img-4').css({opacity: event.progress*2}) 
      $('#el-4').css({opacity: event.progress*2}) 
    })

    //scene5
    const Scene5 = new ScrollMagic.Scene({
      triggerElement: '#project05',
      triggerHook: 0.5,
      reverse: true,
      duration: '100%'
    })
    .setClassToggle('#project05', 'fade-in') //add class to project02
    .addTo(controller)

    Scene5.on("progress",  event => {
      $('#img-5').css({opacity: event.progress*2}) 
      $('#el-5').css({opacity: event.progress*2}) 
    })

    //scene6
    const Scene6 = new ScrollMagic.Scene({
      triggerElement: '#project06',
      triggerHook: 0.5,
      reverse: true,
      duration: '100%'
    })
    .setClassToggle('#project06', 'fade-in') //add class to project02
    .addTo(controller)

    Scene6.on("progress",  event => {
      $('#img-6').css({opacity: event.progress*2}) 
      $('#el-6').css({opacity: event.progress*2}) 
    })

    //scene7
    const Scene7 = new ScrollMagic.Scene({
      triggerElement: '#project07',
      triggerHook: 0.5,
      reverse: true,
      duration: '100%'
    })
    .setClassToggle('#project07', 'fade-in') //add class to project02
    .addTo(controller)

    Scene7.on("progress",  event => {
      $('#img-7').css({opacity: event.progress*2}) 
      $('#el-7').css({opacity: event.progress*2}) 
    })

    //scene8
    const Scene8 = new ScrollMagic.Scene({
      triggerElement: '#project08',
      triggerHook: 0.5,
      reverse: true,
      duration: '100%'
    })
    .setClassToggle('#project08', 'fade-in') //add class to project02
    .addTo(controller)

    Scene8.on("progress",  event => {
      $('#img-8').css({opacity: event.progress*2}) 
      $('#el-8').css({opacity: event.progress*2}) 
    })

    //scene9
    const Scene9 = new ScrollMagic.Scene({
      triggerElement: '#project09',
      triggerHook: 0.5,
      reverse: true,
      duration: '100%'
    })
    .setClassToggle('#project09', 'fade-in') //add class to project02
    .addTo(controller)

    Scene9.on("progress",  event => {
      $('#img-9').css({opacity: event.progress*2}) 
      $('#el-9').css({opacity: event.progress*2}) 
    })

  },[])

  const toggleAudio = () => {

  }

  return (
    <div className="page">
      <div className="down-arrow">↓</div>
      <div className="container">
        <div className="page-title-font-map">AUX ORIGINES DU PARC</div>
        <div className="map-container">
          <div className="map-img-container">
            <img className='map-img' src="./img/page1/1.png" id="img-1"/>
            <img className='map-img' src="./img/page1/2.png" id="img-2"/>
            <img className="map-img aquisition" src="./img/page1/3.jpg" id="img-3"/>
            <img className='map-img' src="./img/page1/4.png" id="img-4"/>
            <img className='map-img' src="./img/page1/5.png" id="img-5"/>
            <img className='map-img' src="./img/page1/6.png" id="img-6"/>
            <img className='map-img' src="./img/page1/7.png" id="img-7"/>
            <img className='map-img' src="./img/page1/8.png" id="img-8"/>
            <img className='map-img' src="./img/page1/9.png" id="img-9"/>
          </div>
          <div className="map-text-container">
            <div className="map-el" id="el-1"><span className="date">1870</span><br/><span className="map-title">Le moulin</span></div>
            <div className="map-el" id="el-2"><span className="date">1880</span><br/><span className="map-title">Le château Saran</span></div>
            <div className="map-el" id="el-3"><span className="date">1938</span><br/><span className="map-title">Acquisition</span></div>
            <div className="map-el" id="el-4"><span className="date">1940</span><br/><span className="map-title">L’étang du Soleil</span></div>
            <div className="map-el" id="el-5"><span className="date">1945</span><br/><span className="map-title">Le nom de Georges Heller</span></div>
            <div className="map-el" id="el-6"><span className="date">1950</span><br/><span className="map-title">Terrains sportifs</span></div>
            <div className="map-el" id="el-7"><span className="date">1956</span><br/><span className="map-title">canaliser la Bièvre</span></div>
            <div className="map-el" id="el-8"><span className="date">1993-1994</span><br/><span className="map-title">Un grand réaménagement</span></div>
            <div className="map-el" id="el-9"><span className="date">2020-2021</span><br/><span className="map-title">Les aires de jeux</span></div>
          </div>
        </div>
        </div>
      <div className="project" />
        <div id="project01" className="project"/>
        <div id="project02" className="project"/>
        <div id="project03" className="project"/>
        <div id="project04" className="project"/>
        <div id="project05" className="project"/>
        <div id="project06" className="project"/>
        <div id="project07" className="project"/>
        <div id="project08" className="project"/>
        <div id="project09" className="project"/>
      <div className="project" />
      <button onClick={() => toggleAudio()} className="mute-btn">
        <img src="./sound-off.png" />
      </button>
    </div>
  )
}

export default MapView