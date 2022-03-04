import './App.css'
import $ from "jquery"

const Interview = () => {

  $(() => {
    $('#logo-container').removeClass("logo-container-center")
    $('#logo').removeClass("logo-home")
  })

  return (
    <div>
      <div className="page-title-font">RENAISSANCE D'UNE RIVIÈRE</div>
      <video className="videoPlayer" src="https://cfp-secretariat.s3.us-east-2.amazonaws.com/y2meta.com+-+Capsule+secr%C3%A9tariat+-+Employeur.mp4" preload="auto" controls={true} />
    </div>
  )
}

export default Interview