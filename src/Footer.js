import './App.css'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'


const Footer = () => {
  
  const date = new Date().getFullYear()

  return (
    <footer>
      <Link to="./faq">FAQ</Link>
      <Link to="./info" id="footer-mention">infos pratiques - mentions légales</Link>
      <p id="footer-text">Parc Heller © {date}</p>
    </footer>
  )
}

export default Footer