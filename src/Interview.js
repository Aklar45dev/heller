import './App.css'
import React, { useEffect } from 'react'
import $ from "jquery"
import { useHistory } from 'react-router-dom'

const Interview =props => {

  $(() => {
    $('#logo-container').removeClass("logo-container-center")
    $('#logo').removeClass("logo-home")
    props.lecteur.pause()
    $('#footer-text').css({display: 'block'})
    $('#home-link').css({display: 'block'})
    $('#footer-mention').css({display: 'none'})
  })

  useEffect(() => {
    $('.page').fadeOut(0).fadeIn(1000)
    $('#pause').css({display: 'none'})
    $('#consul').css({display: 'block'})
    $('footer').css({position: 'relative'})
    $('.logo').fadeOut(0).fadeIn(1000)
  })

  const history = useHistory()

  const nextPage = () => {
    history.push("/parallax");
  }

  return (
    <div className="page photosphere">
      <div className="gradient4"><img src="./gradient.png" /></div>
      <div className="header-page-scroll">
        <div className="text-wrappper">
          <div className="page-title-font">RENAISSANCE D’UNE RIVIÈRE</div>
          <div className="page-subtitle-font">la réouverture de la bièvre</div>
          <div className="page-para">
          Le projet de renaissance de la Bièvre mobilise de nombreux acteurs qui,<br/> 
          ensemble, amorcent une nouvelle approche de la nature en milieu urbain.
          </div>
        </div>
      </div>
      <div className="inter-vid-container">
        <video className="videoPlayerInterview" muted src="https://heller-bucker.s3.eu-west-3.amazonaws.com/ITV-SMVB%26MGP_1_1.mp4" preload="auto" controls={true} autoPlay='autoPlay' />
        <div className='acteurs1'>
          <p className="page-subtitle-font-left">LES ACTEURS ET PARTENAIRES DE LA RENATURATION DE LA BIÈVRE</p>
          <p className="page-para-left">Afin de réaliser ce projet, la Ville d'Antony est entourée de différents acteurs:</p>
        </div>
        <div className='patenaire-container'>
          <div className='patenaire'>
            <img src="./img/page4/métropole.png" />
            <p><span className="page-para-bold">La Métropole du Grand Paris</span> (MGP) pilote la réouverture de la Bièvre. Maitre d’ouvrage, elle coordonne les interactions entre les différents acteurs, organise des réunions, priorise certains sujets et fait circuler les nombreuses informations. </p>
          </div>
          <div className='patenaire'>
            <img src="./img/page4/logo_aesn.png" />
            <p><span className="page-para-bold">L’Agence de l’Eau Seine-Normandie</span> (AESN) met en œuvre la politique de l’eau du bassin métropolitain en finançant les projets des acteurs locaux. Elle assure également que les initiatives mises en place soient compatibles avec la politique de l’eau en France, encadrée par le ministère de la transition écologique.</p>
          </div>
          <div className='patenaire'>
            <img src="./img/page4/logo-siavb.png" />
            <p><span className="page-para-bold">Le Syndicat Intercommunal pour l’Aménagement de la Vallée de la Bièvre</span> (SIAVB) intervient sur la partie en amont de la rivière de la commune de Guyancourt à la commune de Wissous. Elle s’occupe des sections rouvertes de la Bièvre et apporte ainsi son expertise.</p>
          </div>
          <div className='patenaire'>
            <img src="./img/page4/logo-smbvb.png" />
            <p><span className="page-para-bold">Le Syndicat Mixte du Bassin Versant de la Bièvre</span> (SMBVB) est à l’initiative du Schéma d’Aménagement et de Gestion des Eaux (SAGE) qui constate l’existence de dysfonctionnements sur la rivière. Il a ainsi proposé à la Métropole du Grand Paris ce projet de réouverture. Également, il organise et coordonne toutes les animations autour de la Bièvre.</p>
          </div>
          <div className='patenaire'>
            <img src="./img/page4/logo-siaap-3.png" />
            <p><span className="page-para-bold">Le Service public de l’assainissement francilien</span> (SIAAP) est propriétaire et gestionnaire de la canalisation de la Bièvre, des raccordements ainsi que du bassin de retenu en amont.</p>
          </div>
        </div>
        <div className="acteurs">
          <p className='page-para-left'>À ces acteurs s'ajoutent d'autres partenaires:<br/>
          la Région Ile-de-France, la Direction régionale et interdépartementale de l'environnement, de l'aménagement et des<br/>
          transports (DRIEAT), l'Office français de la biodiversité (OFB) et Vallée-Sud-Grand-Paris (VSGP).
          </p>
        </div>
      </div>
    </div>
  )
}

export default Interview