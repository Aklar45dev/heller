import './App.css'

const Footer = () => {
  
  const date = new Date().getFullYear()

  return (
    <footer className="page">
      <p>Parc Heller © {date}</p>
    </footer>
  )
}

export default Footer