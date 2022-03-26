import './App.css'

const Footer = () => {
  
  const date = new Date().getFullYear()

  return (
    <footer className="page">
      <p id="footer-text">Parc Heller © {date}</p>
      <p id="footer-mention">infos pratiques - mentions légales</p>
    </footer>
  )
}

export default Footer