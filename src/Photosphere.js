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

  const pointData = [{name: "plane1", x: 0, y: -2, z: -10, src: "./mask.png", title: 'Title 1', text: "Text 1"},
  {name: "plane2", x: -10, y: 0, z: 3, src: "./mask2.png", title: 'Title 2', text: "Text 2"},
  {name: "plane3", x: 10, y: 2, z: 0, src: "./logo192.png", title: 'Title 3', text: "Text 3"}]

  let pointName = ""

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
  camera.position.z = 0.01
  const renderer = new THREE.WebGLRenderer()

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
        pointName = 'null'
        return
      }
      else{
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
  }
  
  animate()

  const createPoint = (props) => {
    const geometry = new THREE.PlaneGeometry( 1, 1 )
    const alpha = new THREE.TextureLoader().load( props.src )
    //const alpha = new THREE.TextureLoader().load( './circle.png' )
    
    const material = new THREE.SpriteMaterial( { alphaMap: alpha, map: alpha } )
    material.transparent = true
    const plane = new THREE.Sprite( material )
    plane.name = props.name
    plane.position.x = props.x
    plane.position.y = props.y
    plane.position.z = props.z
    scene.add( plane )
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
      <div>
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
    </div>
  )
}

export default Photosphere
