import './App.css'
import $ from 'jquery'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"

const Card = props => {
  
  const hideCard = () => {
    $(`#${props.point.name}`).css({display: 'none'})
    $("body").css({overflowY: 'scroll'})
    props.unhide()
  }
  
  return (
    <div id={props.point.name} className="card-container">
        <button className="close-btn" onClick={() => hideCard()}>X</button>
        <div className="card">
          <ImageGallery items={props.point.img} showBullets={false} showFullscreenButton={false} showNav={true} showPlayButton={false} slideDuration={250} slideInterval={5000}/>
          <div className="card-content">
            <h2>{props.point.title}</h2>
            <p className="card-text">{props.point.text}</p>
          </div>
        </div>
      </div>
  )
}

export default Card