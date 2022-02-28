import './App.css'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'

const Home = () => {

  return (
    <div className="menu-container">
      <Link className="link-menu" to="/map">Map</Link>
      <Link className="link-menu" to="/photosphere">Photosphere</Link>
      <Link className="link-menu" to="/podcast">Podcast</Link>
      <Link className="link-menu" to="/interview">Interview</Link>
    </div>
  )
}

export default Home