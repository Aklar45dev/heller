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
          <div className="page-subtitle-font">les acteurs de la réouverture de la Bièvre</div>
        </div>
      </div>
      <div className="inter-vid-container">
        <video className="videoPlayerInterview" src="https://heller-bucker.s3.eu-west-3.amazonaws.com/ITV-SMVB%26MGP_1.mp4" preload="auto" controls={true} autoPlay='autoPlay' />
        <div className='acteurs1'>
          <p className="page-subtitle-font-left">Les acteurs et partenaires de la renaturation de la Bièvre</p>
          <p className="page-para-left">Afin de réaliser ce projet, la Ville d’Antony est entourée de différents acteurs :</p>
        </div>
        <div className='patenaire-container'>
          <div className='patenaire'>
            <img src="./img/page4/métropole.png" />
            <p>La <span className="page-para-bold">Métropole du Grand Paris</span> (MGP) a la compétence « Gestion des Milieux Aquatiques et Prévention des Inondations » sur le territoire. Maitre d’ouvrage, elle pilote les études de réouverture de la Bièvre et de la renaturation du ru des Godets à Antony jusqu’à la réalisation des travaux.</p>
          </div>
          <div className='patenaire'>
            <img src="./img/page4/logo_aesn.png" />
            <p>L’<span className="page-para-bold">Agence de l’Eau Seine-Normandie </span>(AESN) met en œuvre la politique de l’eau du bassin hydrographique de la Seine en finançant les projets des acteurs locaux. Elle s’assure également que les initiatives mises en place soient compatibles avec la politique de l’eau en France, encadrée par le ministère de la transition écologique.</p>
          </div>
          <div className='patenaire'>
            <img src="./img/page4/logo-siavb.png" />
            <p>Le <span className="page-para-bold">Syndicat Intercommunal pour l’Aménagement de la Vallée de la Bièvre </span>(SIAVB) intervient sur la partie en amont de la rivière de la commune de Guyancourt à la commune de Wissous. Il a pour mission notamment d’entretenir la rivière et ses affluents, de la préserver et de la mettre en valeur sur le plan écologique et paysager.</p>
          </div>
          <div className='patenaire'>
            <img src="./img/page4/logo-smbvb.png" />
            <p>Le <span className="page-para-bold">Syndicat Mixte du Bassin Versant de la Bièvre</span> (SMBVB) élabore et met en œuvre le Schéma d’Aménagement et de Gestion des Eaux (SAGE) du bassin versant de la Bièvre. Il porte et réunit les collectivités autour du Contrat Bièvre qui a pour objectif la réouverture et la renaturation de la Bièvre et de ses affluents.</p>
          </div>
          <div className='patenaire'>
            <img src="./img/page4/logo-siaap-3.png" />
            <p>Le <span className="page-para-bold">Service public de l’assainissement francilien </span>(SIAAP) est propriétaire et gestionnaire de la canalisation de la Bièvre ainsi que du bassin de retenu en amont.</p>
          </div>
        </div>
        <div className="acteurs">
          <p className='page-para-left'>
          À ces acteurs s’ajoutent d’autres partenaires : la Région Ile-de-France, la Direction régionale et interdépartementale de l’environnement, de l’aménagement et des transports (DRIEAT), l’Office français de la biodiversité (OFB) et Vallée-Sud-Grand-Paris (VSGP).
          </p>
        </div>
      </div>
    </div>
  )
}

export default Interview