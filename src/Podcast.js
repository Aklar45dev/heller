import './App.css'

const Podcast = () => {

  const play = () => {
    let audio = new Audio("/steel.mp3")
    audio.play()
  }

  return (
    <div>
      <div className="page-title-font">UN ESPACE POUR LES SPORTIFS</div>
      <div>
        <img src="./soccer.jpg" alt="podcast"/>
        <button onClick={() => play()}>PLAY</button>
      </div>
      <div className="thumbnail-container">

      </div>
    </div>
  )
}

export default Podcast