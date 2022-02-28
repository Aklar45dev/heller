import './App.css'
import ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginIndicator} from "scrollmagic-plugins"
import { Tween, Timeline } from "react-gsap"
import $ from 'jquery'

const Map = () => {

$(() => {

  ScrollMagicPluginIndicator(ScrollMagic);
  var controller = new ScrollMagic.Controller();
  var Scene = new ScrollMagic.Scene({
    triggerElement: '#project01'
  })
  .setClassToggle('#project01', 'fade-in') //add class to project01
  .addIndicators({
    name: "project01",
    colorStart: "pink"
  })
  .addTo(controller)

  var Scene = new ScrollMagic.Scene({
    triggerElement: '#project02'
  })
  .setClassToggle('#project02', 'fade-in') //add class to project02
  .addIndicators({
    name: "project02",
    colorStart: "white"
  })
  .addTo(controller)

})

  return (
    <div className="App">
      <div id="project01" className="project">Project 1</div>
      <div id="project02" className="project">Project 2</div>
      <div className="project" />
    </div>
  )
}

export default Map