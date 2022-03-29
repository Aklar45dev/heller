import './App.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import React, { useEffect, useRef } from 'react'
import Card from './Card'
import $ from 'jquery'
import { useHistory } from 'react-router-dom'


const Photosphere = props => {

  $(() => {
    $('#logo').removeClass("logo-home")
    $('#consul').css({display: 'block'})
    $('#logo-container').removeClass("logo-container-center")
    window.addEventListener( 'pointermove', onPointerMove )
    window.addEventListener("mousedown", showCard)
    props.lecteur.play()
    $('body').css({overflow: 'hidden'})
    $('#footer-text').css({display: 'block'})
    $('footer').css({position: 'absolute'})
    $('#home-link').css({display: 'block'})
    $('#footer-mention').css({display: 'none'})
  })
  
  useEffect(() => {
    const container = document.getElementById( 'canvas' )
    container.appendChild( renderer.domElement )
    pointData.forEach(item => createPoint(item))
    $('.page').fadeOut(0).fadeIn(1000)
    $('footer').fadeOut(250)
    $('.logo').fadeOut(0).fadeIn(1000)
  },[])

  const audio = ['','',new Audio('https://heller-bucker.s3.eu-west-3.amazonaws.com/Bievre.mp3'),new Audio('https://heller-bucker.s3.eu-west-3.amazonaws.com/Lavoir.mp3') ,'',new Audio("https://heller-bucker.s3.eu-west-3.amazonaws.com/p%C3%AAche.mp3"),new Audio("https://heller-bucker.s3.eu-west-3.amazonaws.com/soleil.mp3")]

  const pointData = [
    {name: "1", x: 0, y: 1, z:-4, src: "./img/page2/curage.png", img: [{original: './img/curage.jpg'}], title: `LE CURAGE`, text: `Curer la Bièvre était une obligation imposée aux habitants par la nature et par la loi. À l’aide d’outils (pelles, râteaux ou machines à godets), les ouvriers raclaient le fond de l’eau pour en extraire les sédiments accumulés. Cette opération avait pour but de préserver la végétation et la qualité des eaux, de consolider les berges, de limiter les crues.`},
    {name: "2", x: -3, y:-1, z:1, src: "./img/page2/inondation.png", img: [{original: './img/inondations-01.jpg'},{original: './img/inondations-02.jpg'},{original: './img/inondations-03.jpg'},{original: './img/inondations-04.jpg'}], title: `INONDATIONS À ANTONY`, text: `Caves inondées, terrains immergés, rues transformées en canaux… Le dimanche 6 mai 1928, Antony vit son inondation la plus grave avec près de 20 ha submergés et 150 maisons envahies. Les eaux montent à plus de 10 cm par heure et inondent les rues des Prés Coustou et Prosper-Legouté, l’avenue Jean-Monnet, le lotissement Michalon, l’impasse Trudon. D’importants moyens sont déployés : les casernes de Chaligny, Port-Royal et de Grenelle sont mobilisées ainsi que la brigade fluviale et ses bachots. Pompiers et militaires, de l’eau jusqu’aux genoux, transportent de jeunes enfants et leurs effets personnels sur leurs épaules vers un abri. Le niveau de la Bièvre ne redescend que le lundi après-midi. `},
    {name: "3", x: 3, y: 0.1, z: 3, src: "./img/page2/bièvre-à-atony.png", img: [{original: './img/bievre-01.jpg'},{original: './img/bievre-02.jpg'},{original: './img/bievre-03.jpg'},{original: './img/bievre-04.jpg'}], title: `LA BIÈVRE À ANTONY`, text: `Longue de 35 km, la Bièvre, qui prend sa source à Guyancourt, traverse 15 communes. Elle entre dans Antony par la rue du Pont-de-Pierre à la hauteur de la coulée verte. Elle poursuit sa route  à travers le parc Heller jusqu’à la rue de l’Abreuvoir avant de passer sous la voie ferrée et de gagner la RD 920.`},
    {name: "4", x: -3, y: -0.5, z: -3, src: "./img/page2/lavoirs.png", img: [{original: './img/lavoir-01.jpg'},{original: './img/lavoir-02.jpg'},{original: './img/lavoir-03.jpg'}], title: `LES LAVOIRS`, text: `La Ville mettait à la disposition des habitants des lavoirs pour effectuer leurs « grandes lessives ». Après la première guerre mondiale, on en comptait trois : les lavoirs du Moulin, du ru des Morteaux et de la Grande Pierre. Les lavandières y lavaient leur linge à l’aide de boîtes à laver, battoirs, brosses et savons.  Ces tâches ménagères participaient à la détérioration de la Bièvre.`},
    {name: "5", x: 4, y: -1, z: 0, src: "./img/page2/métiers-de-la-bièvre.png", img: [{original: './img/metiers-bievre-01.jpg'},{original: './img/metiers-bievre-02.jpg'},{original: './img/metiers-bievre-03.jpg'}], title: `LES MÉTIERS DE LA BIÈVRE`, text: `Vers la fin du XVIIe siècle, de nombreux corps de métier nécessitant une utilisation continue de l'eau s'installent sur les bords de la Bièvre : teintureries, blanchisseries, tanneries, mégisseries et riverains se partagent son eau, bientôt suivis par  les entrepôts et les usines. Cette concentration d'activités entraîne rapidement la pollution de la rivière. Tandis que les particuliers y vident détritus et excréments, les artisans y déversent produits toxiques, déchets, eaux savonneuses et restes d'animaux.`},
    {name: "6", x: 3, y: -0.5, z: -3, src: "./img/page2/pêcheurs.png", img: [{original: './img/peche-01.jpg'},{original: './img/peche-02.jpg'},{original: './img/peche-03.jpg'},{original: './img/peche-04.jpg'}], title: `LA PÊCHE`, text: `Les amateurs de pêche étaient nombreux à se retrouver sur les rives de la Bièvre pour récupérer dans leurs filets des gardons, écrevisses, goujons et brochets. L’étang du soleil était lui aussi un lieu prisé. La renaturation de la rivière va permettre de retrouver une biodiversité florissante et riche.`},
    {name: "7", x: -0.7, y: -0.1, z: 3, src: "./img/page2/étang-du-soleil.png", img: [{original: './img/etang-1.jpg'},{original: './img/etang-2.jpg'},{original: './img/etang-3.jpg'},{original: './img/etang-4.jpg'},{original: './img/etang-5.jpg'},{original: './img/etang-6.jpg'},{original: './img/etang-7.jpg'},{original: './img/etang-9.jpg'}], title: `L'ÉTANG DU SOLEIL`, text: `L’étang est en partie alimenté par une dérivation du ru des Godets. Il fut creusé à la pelle dans les années 1940 par un Antonien, Jean Proksa, qui agrandit avec son fils ce qui n’était à l’origine qu’une modeste mare. Le propriétaire attira ensuite les amateurs de canotage en proposant des barques à louer et ouvrit une guinguette : « Le Soleil d’Antony ». Elle ferma ses portes en 1975, année du décès de M. Proksa. Des aérateurs été installés en 2017 pour offrir une oxygénation suffisante à la faune aquatique qui le peuple, mais n’est pas suffisant. Des analyses réalisées la même année ont révélé la présence d’hydrocarbure dans sol et la vase présente dans l’eau représente à ce jour plus de la moitié du bassin. Aujourd’hui, l’étang est en fin de vie.`}
  ]

let pointName = "null"
let cardVisible = false
let canClick = true

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
  const clock = new THREE.Clock()
  camera.position.z = 0.01

  const renderer = new THREE.WebGLRenderer()
  let sprites = []

  renderer.setSize( window.innerWidth, window.innerHeight )
  const controls = new OrbitControls( camera, renderer.domElement )
  controls.enablePan = false
  controls.enableZoom = false
  controls.enableDamping = true
  controls.minPolarAngle = 0.8
  controls.maxPolarAngle = 2.4
  controls.dampingFactor = 0.02
  controls.rotateSpeed = 0.15

  const geometry = new THREE.SphereGeometry()
  const texture = new THREE.TextureLoader().load( './PARC_HELLER.jpg')
  const material = new THREE.MeshBasicMaterial( { map: texture } )
  material.side = THREE.BackSide

  const sphere = new THREE.Mesh( geometry, material )
  sphere.name = 'sphere'
  scene.add( sphere )
  sphere.scale.x = 100
  sphere.scale.y = 100
  sphere.scale.z = 100
  sphere.rotation.y = 1.4

  const raycaster = new THREE.Raycaster()
  const pointer = new THREE.Vector2()
  let lastHitPoint = null

  const onPointerMove = event => {
    if(window.location.pathname === "/photosphere"){
      let top = $('#canvas').position().top
      pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1
      pointer.y = - ( (event.clientY-top+window.scrollY) / window.innerHeight ) * 2 + 1
      raycaster.setFromCamera( pointer, camera )
      const intersects = raycaster.intersectObjects( scene.children )
      if(intersects[0].object.name === "sphere"){
        $('body').css('cursor', 'grab')
        pointName = 'null'
        if(lastHitPoint !== null){
          lastHitPoint.scale.set(1.2,0.75,1.2)
        }
        return
      }
      else{
        $('body').css('cursor', 'pointer')
        pointName = intersects[0].object.name
        lastHitPoint = intersects[0].object
        intersects[0].object.scale.set(1.35,0.80,1.35)
        return
        }
      }
  }

  const createPoint = (props) => {
    const geometry = new THREE.PlaneGeometry( 1, 1 )
    const iconTex = new THREE.TextureLoader().load( props.src )
    const alpha = new THREE.TextureLoader().load( './circle.png' )
    const sprite = new THREE.SpriteMaterial( { alphaMap: alpha, map: alpha } )
    sprite.transparent = true
    const plane = new THREE.Sprite( sprite )
    sprites.push(sprite)
    const icon = new THREE.SpriteMaterial( { alphaMap: iconTex, map: iconTex } )
    sprite.transparent = true
    const planeIcon = new THREE.Sprite( icon )
    plane.name = props.name
    plane.position.x = props.x
    plane.position.y = props.y
    plane.position.z = props.z
    planeIcon.name = props.name
    planeIcon.position.x = props.x
    planeIcon.position.y = props.y
    planeIcon.position.z = props.z
    planeIcon.scale.x = 1.2
    planeIcon.scale.y = 0.75
    planeIcon.scale.z = 1.2
    scene.add( planeIcon )
  }

  const showCard = () => {
    if(canClick){
      if (pointName !== "null") {
        if(!cardVisible){
          $('#arrows-for-boomers').fadeOut(500)
          $('#consul').fadeOut(500)
          childRef.current[pointName-1].playAudio()
          $(`#${pointName}`).css({display: 'flex'}).fadeOut(0).fadeIn(150)
          cardVisible = true
        }
      }
    }
  }

  const hideCard = () => {
    $('#arrows-for-boomers').fadeIn(250)
    $('#consul').fadeIn(250)
    cardVisible = false
  }

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

  const history = useHistory()

  const nextPage = () => {
    history.push("/podcast")
  }

  const childRef = useRef([])

  const right = '>'
  const left = '<'
  let rotationCam = -1.57

  const rotate = (direction) => {
    rotationCam = rotationCam + 0.5*direction
    controls.target.set(Math.cos(rotationCam)*0.2, 0, Math.sin(rotationCam)*0.2)
    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = 0.01
  }

  const animate = () => {
    const delta = clock.getDelta()
    requestAnimationFrame( animate )
    renderer.render( scene, camera )
    controls.update(delta)
    controls.rotateSpeed = -0.25
  }
  
  animate()

  const hoverTag = (state) => {
    canClick = !state
  }
  
  return (
    <div className="page photosphere">
      <div className="header-page">
        <div className="text-wrappper">
          <div className="page-title-font">AU FIL DE L’EAU</div>
          <div className="page-subtitle-font">étang, mare et rivières</div>
        </div>
      </div>
      {pointData.map((point, i) => <Card key={point.title} ref={el => childRef.current.push(el)} audio={audio} point={point} hideCard={hideCard} />)}
      <div id="canvas">
        <img className='icon-360' src="./360.png" />
        <div className='sphere-arrow-container' id='arrows-for-boomers'>
          <button onClick={() => rotate(-1)} onMouseOver={() => hoverTag(true)} onMouseLeave={() => hoverTag(false)}><img className='btn-sphere' src="./FLECHE-G.png"/></button>
          <button onClick={() => rotate(1)} onMouseOver={() => hoverTag(true)} onMouseLeave={() => hoverTag(false)}><img className='btn-sphere' src="./FLECHE-D.png"/></button>
        </div>
      </div>
      <button onClick={() => toggleAudio()} className="mute-btn">
        <img id="button-img" src="./sound-on.png" />
      </button>
    </div>
  )
}

export default Photosphere
