import './App.css'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'


const Footer = () => {
  
  const date = new Date().getFullYear()

  return (
    <footer>
      <Link to="./faq">FAQ</Link>
      <Link to="./info" id="">infos pratiques - mentions légales</Link>
      <p id="">Parc Heller © {date}</p>
    </footer>
  )
}

export default Footer