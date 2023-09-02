import './App.css'
import React, { useEffect } from 'react'
import $ from "jquery"
import { useHistory } from 'react-router-dom'
import Question from './Question'

const FAQ =props => {

  $(() => {
    $('#consul').css({display: 'block'})
    props.lecteur.pause()
    $('#footer-text').css({display: 'block'})
    $('#home-link').css({display: 'block'})
    $('#footer-mention').css({display: 'none'})
  })
  
  useEffect(() => {
    $('footer').css({position: 'unset'})
    $('.page').fadeOut(0).fadeIn(1000)
    $('.logo').fadeOut(0).fadeIn(1000)
    $('#logo').removeClass("logo-home")
    $('#logo-container').removeClass("logo-container-center")
  },[])

  
  const history = useHistory()

  const nextPage = () => {
    history.push("/next");
  }
  
  return (
    <div className="page">
      <div className="gradient"><img src="./gradient.png" /></div>
      <div className="gradient2"><img src="./gradient.png" /></div>
      <div className="header-page">
        <div className="text-wrappper">
          <div className="page-title-font">FOIRE AUX QUESTIONS</div>
        </div>
      </div>
      <div className='Question-main'>
          <Question vidsrc="https://heller-bucker.s3.eu-west-3.amazonaws.com/film+intro_1.mp4" imgsrc="none" ansid="ans1" title="Pourquoi rouvrir la Bièvre ?" text="La Métropole du Grand Paris pilote le projet de réouverture de la Bièvre à Antony. En effet, elle exerce de plein droit, en lieu et place de ses communes membres, la compétence « Gestion des Milieux Aquatiques et Prévention des Inondations » dite GEMAPI qui vise à replacer la gestion des cours d’eau dans une réflexion globale sur l’aménagement du territoire.  
Afin de s’inscrire dans la mise en œuvre opérationnelle de la politique de l’eau du bassin versant de la Bièvre et en partenariat avec les acteurs du territoire, la Métropole a identifié sur tout le parcours de la Bièvre, entre Antony et Paris, plusieurs sites ayant un fort potentiel pour la réouverture et renaturation de cette rivière. Le but étant de lui redonner un aspect proche d’un état naturel et une dynamique équilibrée.
Les études viennent ainsi d’être engagées sur 5 secteurs : Antony (parc Heller), l’Haÿ-les-Roses (parc de la Bièvre), Cachan (jardin le Vallon) ; Gentilly (parc Pablo-Picasso), Paris (Parc Kellerman).
La ville d’Antony a le privilège, à la différence des autres communes engagées aux côtés de la Métropole, d’accueillir sur son territoire le ru des Godet, affluent de la Bièvre. Il chemine notamment au sein du parc Heller, permettant ainsi d’y envisager la restauration d’une confluence naturelle et ainsi participer au fonctionnement naturel de ces deux rivières. 

Les grands enjeux liés à l’eau, à la biodiversité et à l’adaptation au changement climatique sont au cœur de ce projet de territoire ambitieux et vertueux.
"/>
          <Question vidsrc="none" imgsrc="./plan.png" ansid="ans2" title="Quelles sont les effets de cette réouverture sur les risques météorologiques (inondation, période d’assèchement...) ?" text="Le projet va contribuer à réduire le risque global d’inondation. Les lits emboités offrent d’importantes capacités de stockage pour absorber le surplus d’eau. 

Sur sa partie amont, la Bièvre est équipée de nombreux bassins de retenue.  Associés à un système de télégestion (un ensemble d’appareils et installations hydrauliques qui permet une connaissance en temps réel des conditions de terrain et une gestion automatisée à distance des flux des cours d’eau), ils régulent de façon optimisée le débit du cours d’eau et réduisent au maximum les risques d’inondation.
Par ailleurs, les sites de réouverture ont justement été choisis afin de permettre à la rivière de suivre son cycle naturel, étiage (le plus faible niveau du cours d’eau sur l’année) et crue, sans affecter les riverains. L’eau qui sera ainsi stockée dans les lits n’impactera pas les secteurs urbanisés et réduira ou ralentira le flux vers l’aval du bassin versant. 
Le projet sera conçu et dimensionné pour les cas extrêmes (trop d’eau et pas assez d’eau) grâce à une géométrie adaptée du lit (chenal préférentiel et lit emboité) permettant de concentrer les écoulements en basses eaux et de l’étaler en crue dans un espace restreint aux abords.
"/>
      <Question vidsrc="none" imgsrc="none" ansid="ans3" title=" Quel sera l’impact du projet sur les nuisibles (moustiques et rats) ?" text="Actuellement, l’étang du soleil est parcouru par un léger courant généré à la fois par l’entrée des eaux du ru des Godets et par deux aérateurs installés suite aux premières crises sanitaires (mortalité d’oiseaux et de poissons) rencontrées en 2016 et 2017 et dues à l’asphyxie du milieu. Face à l’évolution de la situation, d’autres solutions d’oxygénation des eaux de l’étang sont à l’étude en attendant les travaux de réaménagement. Ainsi, l’étendue d’eau n’est pas complètement stagnante même s’il est possible que des populations de moustiques se développent sur les rives de l’étang. 
Le projet de restauration de la confluence entre le ru des Godets et la Bièvre réouverte au sein du parc Heller, ainsi que la renaturation de ces deux rivières, permettront de retrouver un fonctionnement équilibré des écosystèmes aquatiques du parc, qui ne soit pas générateur d’un développement anormal des populations de moustiques. L’écoulement dynamique des deux rivières empêchera la présence d’eaux stagnantes permanentes et limitera donc le risque de développement de ces insectes. De plus, le parc abrite une certaine biodiversité capable de les réguler. Des abris à chauve-souris, prédateurs naturels des moustiques, ont été installés dans les parcs de la Ville, notamment au Parc Heller, pour favoriser leur installation. 
Il n’y a également pas de risque particulier de prolifération des rats s’il n’y a pas de déchets, donc de sources de nourritures jetées dans la Bièvre. Des corbeilles seront installées dans le parc à cet effet. Nous rappelons qu’il est interdit de nourrir les canards.
"/>
      <Question vidsrc="none" imgsrc="none" ansid="ans4" title="Quel sera l’impact du projet sur les arbres du parc ?" text="Le cheminement de la rivière dans le parc affectera un certain nombre de sujets. Le tracé retenu concilie préservation des arbres et maintien d’une grande prairie centrale pour les loisirs et les manifestations. Sur près de 5 000 arbres du parc, ce scénario en impacterait au maximum 140 dont 55 arbres de gros diamètre (plus de 40 cm). L'avancement des études d'avant-projet viendra préciser le nombre d'abattage qui s'en trouvera réduit grâce à un travail à une échelle plus fine, permettant de dévier légèrement le tracé pour préserver des arbres. En phase chantier, le piquetage du parcours de la Bièvre permettra encore de modifier légèrement le chemin en gardant toujours l’objectif de préserver le maximum d’arbres. D’autre part, le projet de réouverture de la Bièvre prévoit de replanter au moins le double des arbres impactés par le projet."/>
      <Question vidsrc="none" imgsrc="none" ansid="ans5" title="Quand et comment vont être associés les habitants au projet de réouverture de la Bièvre ?" text="La Ville va créer un comité de suivi citoyen intégrant les associations. Un appel à candidature sera lancé et ouvert à tous les Antoniens. Un tirage au sort sera ensuite réalisé pour sélectionner ceux qui participeront à ce comité de suivi.
Parallèlement, la Ville a saisi l’opportunité de la réouverture de la Bièvre et de la renaturation du ru des Godets pour engager un projet de réaménagement du parc Heller. Elle a choisi d’associer tous les citoyens à une première phase de consultation en 2022 pour recueillir en amont du projet les attentes et souhaits des habitants. Au total, près de 1700 réponses ont été recueillies en ligne et en consultation directe. Cette démarche a été organisée afin de toucher un public plus large et difficile à capter. Les services de la Ville se sont rendus dans un centre municipal de loisirs auprès des enfants, au parc Heller plusieurs après-midi et lors d’évènements organisés dans le parc. Des ateliers de co-construction thématiques seront également organisés lors des prochaines phases du projet. La campagne « Ensemble, imaginons le parc Heller » a été primée aux Trophées interdépartementaux de l’innovation urbaine, catégorie « innovations partenariales et collaboratives ».
"/>
      <Question vidsrc="none" imgsrc="none" ansid="ans6" title="Quel sera le coût d’un tel projet ? Comment est-il financé ?" text="Un projet de renaturation des cours d’eau répond à des politiques publiques prioritaires en termes de gestion de l’eau, de changement climatique et de biodiversité en apportant une réponse technique à l’effondrement de la biodiversité, à la lutte contre les îlots de chaleur et à la préservation de la ressource en eau. La compétence GEMAPI portée par la Métropole du Grand Paris est une compétence obligatoire qui doit répondre à ces grands enjeux environnementaux en mettant en œuvre des projets ambitieux de restauration écologique des milieux aquatiques.
Le coût du projet de réouverture de la Bièvre et de restauration de sa confluence avec le ru des Godets, lui-même renaturé dans le cadre de ce projet, s’élève à 9 millions d’euros au stade de l’étude de faisabilité. Ce coût sera consolidé et affiné lors des phases de conception du projet en prenant en compte les résultats des études techniques (qualité et structure du sol notamment). 
"/>
      </div>
    </div>
  )
}

export default FAQ