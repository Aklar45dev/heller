import './App.css'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from "react-gsap";

const Map = () => {

  

  return (
    <div className="App">
      <div className="topSpacing">
        Scroll Down to see the scrollMagic and Tween
      </div>
      <Controller>
        <Scene duration={500} offset={50} triggerElement=".trigger">
          <Tween
            staggerFrom={{ y: 50, visibility: "hidden", opacity: 0 }}
            staggerTo={{ y: 0, visibility: "visible", opacity: 1 }}
            stagger={1}
          >
            <div className="trigger" />
            <div className="div1" />
            <div className="div2" />
            <div className="div3" />
          </Tween>
        </Scene>
      </Controller>
      <div className="bottomSpacing" />
    </div>
  )
}

export default Map