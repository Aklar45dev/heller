import './App.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { useEffect, useState } from 'react'
import Card from './Card'
import $ from 'jquery'

const Photosphere = () => {

  $(() => {
    $('#logo').removeClass("logo-home")
    $('#logo-container').removeClass("logo-container-center")
    window.addEventListener( 'pointermove', onPointerMove )
    window.addEventListener("mousedown", showCard)
    $("body").addClass("none")
  })
  
  useEffect(() => {
    const container = document.getElementById( 'canvas' )
    container.appendChild( renderer.domElement )
    pointData.forEach(item => createPoint(item))
    $('.page').fadeOut(0).fadeIn(1000)
    $('.logo').fadeOut(0).fadeIn(1000)
  },[])

  const pointData = [
    {name: "plane1", x: 0, y: 1, z:-4, src: "./mask.png", img: [{original: './img/curage.jpg'}], 
    title: `LE CURAGE`, text: `Curer la Bièvre était une obligation imposée aux habitants par la nature et par la loi. Cette opération avait pour 
    but de préserver la végétation et la qualité des eaux, de consolider les berges, de limiter les crues.`},
    {name: "plane2", x: -4, y:-1, z:0, src: "./mask.png", img: [{original: './img/inondation.jpeg'},{original: './img/inondation2.jpeg'},{original: './img/inondation3.jpeg'},{original: './img/inondation4.jpeg'}], title: `INONDATIONS À ANTONY`, text: `Caves inondées, terrains immergés, rues transformées en canaux… Le dimanche 6 mai 1928, Antony 
    vit son inondation la plus grave avec près de 20 ha submergés et 150 maisons envahies. Les eaux 
    montent à plus de 10 cm par heure et inondent les rues des Prés Coustou et Prosper-Legouté, 
    l’avenue Jean-Monnet, le lotissement Michalon, l’impasse Trudon. D’importants moyens sont 
    déployés : les casernes de Chaligny, Port-Royal et de Grenelle sont mobilisées ainsi que la brigade 
    fluviale et ses bachots. Pompiers et militaires, de l’eau jusqu’aux genoux, transportent de jeunes 
    enfants et leurs effets personnels sur leurs épaules vers un abri. Le niveau de la Bièvre ne redescend 
    que le lundi après-midi.`},
    {name: "plane3", x: 5, y: 1, z: 2, src: "./mask.png", img: [{original: './img/7_5_28_inondations_à_Antony_[la_[...]Agence_Rol_btv1b53200690r_1.jpeg'},{original: './img/13Fi16.jpg'},{original: './img/14Fi34.jpg'},{original: './img/20220303140905_00001.jpg'},{original: './img/La_Technique_sanitaire_et_municipale_[...]Association_générale_bpt6k9608484t_12.jpg'},{original: './img/PLAN CARTE archive antony.png'}], title: `LA BIÈVRE À ANTONY`, text: `Longue de 35 km, la Bièvre, qui prend sa source à Guyancourt, traverse 15 communes. Elle entre 
    dans Antony par la rue du Pont-de-Pierre à la hauteur de la coulée verte. Elle poursuit sa route à 
    travers le parc Heller jusqu’à la rue de l’Abreuvoir avant de passer sous la voie ferrée et de gagner la 
    RD 920.`},
    {name: "plane4", x: 6, y: 1, z: 0, src: "./mask.png", img: [{original: './img/13Fi19.jpg'},{original: './img/20.jpg'},{original: './img/IMG703.jpg'}], title: `LES LAVOIRS`, text: `La Ville mettait à la disposition des habitants des lavoirs pour effectuer leurs « grandes lessives ».
    Après la première guerre mondiale, on en comptait trois : les lavoirs du Moulin, du ru des Morteaux 
    et de la Grande Pierre. En effet, laver son linge dans une maison posait de nombreux problèmes 
    (vapeur humidifiant les murs, écoulement de l’eau) alors ces « buées » étaient réalisées deux fois par 
    an. Les femmes, appelées lavandières, y lavaient leur linge à l’aide de boîtes à laver, battoirs, brosses 
    et savons. 1er et 2e
    jour : les draps puis le linge de table. 3e et 4e jour : les torchons puis les chemises 
    et les pantalons.`},
    {name: "plane5", x: 4, y: -1, z: 0, src: "./mask.png", img: [{original: './img/artnouveaubievre.jpg'},{original: './img/La_Bièvre___Passage_Moret_[...]Atget_Eugène_btv1b10517901m_1.jpeg'},{original: './img/mégissiers.jpeg'}], title: `LES MÉTIERS DE LA BIÈVRE`, text: `Vers la fin du XVIIe
    siècle, de nombreux corps de métier nécessitant une utilisation continue de l'eau 
    s'installent sur les bords de la Bièvre : teintureries, blanchisseries, tanneries, mégisseries et riverains 
    se partagent l'eau de la rivière, puis les activités industrielles se diversifient : entrepôts et usines 
    s'installent à leur tour. Cette concentration d'activités entraîne rapidement une pollution des eaux de 
    la rivière. Tandis que les particuliers y vident détritus et excréments, les artisans y déversent produits 
    toxiques, déchets, eaux savonneuses et restes d'animaux.`},
    {name: "plane6", x: 6, y: 0, z: -2, src: "./mask.png", img: [{original: './img/03.jpg'},{original: './img/i20.bmp'},{original: './img/k16.bmp'},{original: './img/k20.bmp'}], title: `LA PÊCHE`, text: `Les amateurs de pêche étaient nombreux à se retrouver sur les rives de la Bièvre pour récupérer 
    dans leurs filets des gardons, écrevisses, goujons et brochets.`}
  ]

let pointName = "null"
let cardVisible = false

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
  camera.position.z = 0.01
  const renderer = new THREE.WebGLRenderer()
  let sprites = []
  let spriteRotation = 0

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
  sphere.rotation.y = 1.5

  const raycaster = new THREE.Raycaster()
  const pointer = new THREE.Vector2()

  const onPointerMove = event => {
    if(window.location.pathname === "/photosphere"){
      let top = $('#canvas').position().top
      pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1
      pointer.y = - ( (event.clientY-top+window.scrollY) / window.innerHeight ) * 2 + 1
      raycaster.setFromCamera( pointer, camera )
      const intersects = raycaster.intersectObjects( scene.children )
      if(intersects[0].object.name === "sphere"){
        $('body').css('cursor', 'default')
        pointName = 'null'
        return
      }
      else{
        $('body').css('cursor', 'pointer')
        pointName = intersects[0].object.name
          return
        }
      }
  }

  const animate = () => {
    requestAnimationFrame( animate )
    renderer.render( scene, camera )
    controls.update()
    controls.rotateSpeed = -0.25
    if(sprites[0] !== undefined){
      spriteRotation += 0.005
      sprites.forEach(sprite => {
        sprite.rotation = spriteRotation
      })
    }
  }
  
  animate()

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
    planeIcon.scale.x = 0.5
    planeIcon.scale.y = 0.5
    planeIcon.scale.z = 0.5
    scene.add( plane )
    scene.add( planeIcon )
  }

  const showCard = () => {
      if (pointName !== "null") {
        if(!cardVisible){
          $("body").css({overflowY: 'hidden'})
          $(`#${pointName}`).css({display: 'flex'}).fadeOut(0).fadeIn(150)
          cardVisible = true
        }
      }
  }

  const unhide = () => {
    cardVisible = false
  }

  
  return (
    <div className="page scrollable-element">
      <div className="page-title-font">L'ENFOUISSEMENT DE LA BIÈVRE</div>
      {pointData && pointData.map(point => <Card key={point.title} point={point} unhide={unhide} />)}
      <div id="canvas"/>
    </div>
  )
}

export default Photosphere
