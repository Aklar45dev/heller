import './App.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { useEffect, useState } from 'react'
import $ from 'jquery'

const Photosphere = () => {

  $(() => {
    $('#logo').removeClass("logo-home")
    $('#logo-container').removeClass("logo-container-center")
    window.addEventListener( 'pointermove', onPointerMove )
    window.addEventListener("mousedown", showCard)
  })

  useEffect(() => {
    const container = document.getElementById( 'canvas' )
    container.appendChild( renderer.domElement )
    pointData.forEach(item => createPoint(item))
    $('.page').fadeOut(0).fadeIn(1000)
    $('.logo').fadeOut(0).fadeIn(1000)
  },[])

  const [point, setPoint] = useState({})

  const pointData = [{name: "plane1", x: 0, y: 0.25, z: -4, src: "./mask.png", title: '1. Lorem ipsum dolor sit amet ', text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."},
  {name: "plane2", x: -4, y: -0.5, z: 0, src: "./logo192.png", title: '2. Lorem ipsum dolor sit amet', text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."},
  {name: "plane3", x: 4, y: 0, z: 0, src: "./mask2.png", title: '3. Lorem ipsum dolor sit amet', text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}]

  let pointName = ""

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
  const texture = new THREE.TextureLoader().load( './hdri.jpg')
  const material = new THREE.MeshBasicMaterial( { map: texture } )
  material.side = THREE.BackSide

  const sphere = new THREE.Mesh( geometry, material )
  sphere.name = 'sphere'
  scene.add( sphere )
  sphere.scale.x = 100
  sphere.scale.y = 100
  sphere.scale.z = 100

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
      spriteRotation += 0.007
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
      $("#card").css({display: 'flex'})
      pointData.forEach(item => {
        if(item.name === pointName){
          setPoint(item)
        }
      })
    }
  }

  const hideCard = () => {
    $("#card").css({display: 'none'})
  }

  return (
    <div className="page">
      <div className="page-title-font">L'ENFOUISSEMENT DE LA BIÈVRE</div>
      <div id="card">
        <button className="close-btn" onClick={() => hideCard()}>X</button>
        <div className="card">
          <img src="./forest.jpg" alt="pic"/>
          <div className="card-content">
            <h2>{point.title}</h2>
            <p>{point.text}</p>
          </div>
        </div>
      </div>
      <div id="canvas"/>
    </div>
  )
}

export default Photosphere
