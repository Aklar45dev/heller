import './App.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { useEffect} from 'react'

const Photosphere = () => {

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize( window.innerWidth, window.innerHeight )
  const controls = new OrbitControls( camera, renderer.domElement )
  const geometry = new THREE.SphereGeometry()
  const texture = new THREE.TextureLoader().load( './hdri.jpg')
  const material = new THREE.MeshBasicMaterial( { map: texture } )
  material.side = THREE.BackSide

  const sphere = new THREE.Mesh( geometry, material )
  scene.add( sphere )
  sphere.scale.x = 100
  sphere.scale.y = 100
  sphere.scale.z = 100
  camera.position.z = 1
 
  useEffect(() => {
    document.body.appendChild( renderer.domElement )
  },[])


  const animate = () => {
    requestAnimationFrame( animate )
    renderer.render( scene, camera )
  }
  animate()

  return (
    <div>
      
    </div>
  )
}

export default Photosphere
