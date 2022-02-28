import './App.css'
import { Controller, Scene } from 'react-scrollmagic'

const Map = () => {

  return (
    <div>
      <div className="page-title-font">AUX ORIGINES DU PARC</div>
      <Controller>
        <Scene duration={1500} pin>
          <div>Sticky Example</div>
        </Scene>
      </Controller>
    </div>
  )
}

export default Map