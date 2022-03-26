import './App.css'

const Footer = () => {
  
  const date = new Date().getFullYear()

  return (
    <footer className="page">
      <p id="footer-text">Parc Heller © {date}</p>
      <a href="./info" id="footer-mention">infos pratiques - mentions légales</a>
    </footer>
  )
}

export default Footer