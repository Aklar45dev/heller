import './App.css'
import React,{ useEffect, useState, useRef, forwardRef, useImperativeHandle  } from 'react';
import ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginIndicator} from "scrollmagic-plugins"
import $ from 'jquery'
import { useHistory } from 'react-router-dom'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'


const MapView = forwardRef((props, ref) => {

  let top = 200 
  
  useImperativeHandle(ref, () => ({

    display() {
      const myTimeout = setTimeout(myGreeting, 500)
      function myGreeting() {
        clearTimeout(myTimeout)
        $(window).scrollTop(10)
        top = 200
        $('#down-arrow').css({opacity: 1})
      }
    }
    
  }))

  $(() => {
  })

  useEffect(() => {


    //ScrollMagicPluginIndicator(ScrollMagic)
    const controller = new ScrollMagic.Controller()
    //scene1
    const Scene1 = new ScrollMagic.Scene({
      triggerElement: '#project01',
      duration: '50%',
      reverse: true,
      triggerHook: 0.5,
    })
    .setClassToggle('#project01', 'fade-in') //add class to project01
    .addTo(controller)

    Scene1.on("progress",  event => {
      $('#el-1').css({opacity: 1}) 
      $('#img-1').css({opacity: 1})
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
      $('#el-1').css({opacity: 0}) 
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
      $('#el-1').css({opacity: 0}) 
      $('#el-2').css({opacity: 0}) 
      $('#img-1').css({opacity: 0}) 
      $('#img-2').css({opacity: 0}) 
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
      $('#el-3').css({opacity: 0})
      $('#img-3').css({opacity: 0})
      $('#img-1').css({opacity: event.progress*2}) 
      $('#img-2').css({opacity: event.progress*2}) 
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
      $('#el-4').css({opacity: 0}) 
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
      $('#el-5').css({opacity: 0}) 
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
      $('#el-6').css({opacity:0}) 
      $('#img-7').css({opacity: event.progress*2}) 
      $('#el-7').css({opacity: event.progress*2}) 
    })

    //scene7-5
    const Scene75 = new ScrollMagic.Scene({
      triggerElement: '#project07-5',
      triggerHook: 0.5,
      reverse: true,
      duration: '100%'
    })
    .setClassToggle('#project07-5', 'fade-in') //add class to project02
    .addTo(controller)

    Scene75.on("progress",  event => {
      $('#el-7').css({opacity:0}) 
      $('#img-7-5').css({opacity: event.progress*2}) 
      $('#el-7-5').css({opacity: event.progress*2}) 
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
      $('#el-7-5').css({opacity: 0}) 
      $('#img-8').css({opacity: event.progress*2}) 
      $('#el-8').css({opacity: event.progress*2})
      $('#down-arrow').css({opacity: 1})

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
      $('#el-8').css({opacity: 0})
      $('#down-arrow').css({opacity: 0})
      $('#img-9').css({opacity: event.progress*2}) 
      $('#el-9').css({opacity: event.progress*2}) 
    })

  },[])

  const scrollTo = () => {
    $(window).scrollTop(0)
  }

  const history = useHistory()

  const nextPage = () => {
    history.push("/photosphere")
    $("#MapView").css({display: 'none'})
  }


  const scrollDown = () => {
    top = top + 825
    //$(window).scollTop(top)
    window.scroll({
      top: top, 
      left: 0, 
      behavior: 'smooth'
    });
  }

  return (
    <div className="page" id="scroller">
      <div className="gradient"><img src="./gradient.png" /></div>
      <div className="gradient2"><img src="./gradient.png" /></div>
      <div className="header-page">
        <div className="text-wrappper">
          <div className="page-title-font">AUX ORIGINES DU PARC</div>
          <div className="page-subtitle-font">de 1870 à nos jours</div>
          <div className="page-para map-text">
          Témoin de l’histoire d’Antony, le Parc Heller a traversé les époques arborant<br/>
          bien des visages. Découvrez l’historique de ses aménagements.
          </div>
        </div>
      </div>
      <button onClick={() => scrollDown()} className="down-arrow" id='down-arrow'>↓</button>
      <div className="container">
        <div className="map-container">
          <div className="map-img-container">
            <img className='map-img' src="./img/page1/PLAN-1.jpg" id="img-1"/>
            <img className='map-img' src="./img/page1/PLAN-2.jpg" id="img-2"/>
            <img className="map-img aquisition" src="./img/page1/PLAN-3.jpg" id="img-3"/>
            <img className='map-img' src="./img/page1/PLAN-3-5.jpg" id="img-4"/>
            <img className='map-img' src="./img/page1/PLAN-4.jpg" id="img-5"/>
            <img className='map-img' src="./img/page1/PLAN-5.jpg" id="img-6"/>
            <img className='map-img' src="./img/page1/PLAN-6.jpg" id="img-7"/>
            <img className='map-img' src="./img/page1/PLAN-7.jpg" id="img-7-5"/>
            <img className='map-img' src="./img/page1/PLAN-7-5.jpg" id="img-8"/>
            <img className='map-img' src="./img/page1/PLAN-8.jpg" id="img-9"/>
          </div>
          <div className="map-text-container">
            <div className="map-el" id="el-1"><span className="date">1870 </span><br/><span className="map-title">Le moulin de la seigneurie d’Antony est situé au bord de la Bièvre.  Il est mentionné dès 1248 dans certains écrits seigneuriaux. Actionné par la Bièvre, il permettait aux habitants de moudre leur grain contre paiement de redevances. Inutilisable aujourd’hui, il est pourtant toujours visible depuis la rue Prosper-Legouté.</span></div>
            <div className="map-el" id="el-2"><span className="date">1880 </span><br/><span className="map-title">Le parc Heller a vu s’ériger de nombreux édifices, seul le château Sarran construit en 1880 a résisté aux guerres. Cette résidence privée est la propriété de la famille Jomain.</span></div>
            <div className="map-el" id="el-3"><span className="date">1938 </span><br/><span className="map-title">La Ville d’Antony acquiert le château Sarran. Après avoir abrité pendant un temps une bibliothèque municipale, il est de 1977 à 1996 le siège du conservatoire municipal de musique Darius-Milhaud.</span></div>
            <div className="map-el" id="el-4"><span className="date">1940 </span><br/><span className="map-title">Création du bassin plus tard appelé « l’étang du Soleil », creusé à la pelle par un Antonien, Jean Proska, qui a agrandit ce qui était à l’origine une mare. Il a ensuite attiré les passionnés de canotage en proposant des barques à louer.</span></div>
            <div className="map-el" id="el-5"><span className="date">1945 </span><br/><span className="map-title">Le parc prend le nom de Georges Heller, conseiller municipal communiste mort en déportation à Flossenbürg le 28 décembre 1944.</span></div>
            <div className="map-el" id="el-6"><span className="date">1950 </span><br/><span className="map-title">La municipalité envisage plusieurs projets de terrains sportifs au milieu du parc. Finalement, deux terrains de rugby y seront aménagés, et bien plus tard une tribune et des vestiaires.</span></div>
            <div className="map-el" id="el-7"><span className="date">1956 </span><br/><span className="map-title">Des travaux sont entrepris pour canaliser la Bièvre et modifier son tracé. Son niveau de pollution et l’odeur générée par les industries (tanneries, teintureries…) devenaient préoccupants.. La rivière devient alors souterraine sur onze kilomètres, entre Antony et Paris, dont 600 m au sein du Parc Heller. Elle poursuit son chemin, canalisée dans Antony, par la rue de l’ Abreuvoir et traverse les quartiers du Centre-ville.</span></div>
            <div className="map-el" id="el-7-5"><span className="date">1988 </span><br/><span className="map-title">Non loin de l’entrée du Ru des Godets, à l’intérieur du parc Heller, une ferme voit le jour. Des poneys, des ânes, des chèvres, des vaches, des poules et des lapins profitent de deux grands enclos de verdure. Les petits antoniens n’ont pas souvent l’occasion de côtoyer ces animaux. Alors les centres de loisirs en semaine et les familles le week-end affluent le long des barrières pour tenter de les appâter avec une carotte ou un brin d’herbe. En 1988, le poneyclub s’installe à côté et accueille aujourd’hui une soixantaine d’équidés. Lors de travaux non loin des enclos en 2017, les animaux sont déplacés vers municipalité.</span></div>
            <div className="map-el" id="el-8"><span className="date">1993-1994 </span><br/><span className="map-title">La Ville entreprend un grand réaménagement du parc Heller. Des aires de jeux voient le jour.. Afin de le rendre plus harmonieux, des fontaines, des statues et un miroir d’eau sont installés. La Ville en profite également pour renouveler les plantations boisées et rafraîchir le sous-bois.</span></div>
            <div className="map-el" id="el-9"><span className="date">2020-2021 </span><br/><span className="map-title">Les aires de jeux sont progressivement renouvelées. La faune et la flore du parc s’épanouissent pendant le confinement. Des orchidées protégées sont découvertes. De nouvelles passerelles permettent de traverser le ru des Godets. Des équipements sportifs sont installés à l’occasion de la deuxième édition du budget participatif antonien. Et les vestiaires du rugby déménagent au stade de la Grenouillère.</span></div>
          </div>
        </div>
        </div>
        <div id="project01" className="project"/>
        <div id="project02" className="project"/>
        <div id="project03" className="project"/>
        <div id="project04" className="project"/>
        <div id="project05" className="project"/>
        <div id="project06" className="project"/>
        <div id="project07" className="project"/>
        <div id="project07-5" className="project"/>
        <div id="project08" className="project"/>
        <div id="project09" className="project"/>
    </div>
  )
})

export default MapView