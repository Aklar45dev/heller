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
          <div className="page-title-font">FAQ</div>
        </div>
      </div>
      <div className='Question-main'>
          <Question vidsrc="https://www.youtube.com/embed/L1aF3zSD1S0" imgsrc="none" ansid="ans1" title="Pourquoi rouvrir la Bièvre ?" text="La réouverture de la Bièvre à Antony est un projet piloté par la Métropole du Grand Paris. Cette dernière exerce de plein droit, en lieu et place de ses communes membres, la
compétence « Gestion des Milieux Aquatiques et Prévention des Inondations » dite GEMAPI afin de replacer la gestion des cours d’eau dans une réflexion globale sur l’aménagement
du territoire. Pour cela, elle a identifié sur tout le parcours de la Bièvre, entre Antony et Paris, 5 sites ayant un fort potentiel pour la réouverture et renaturation de cette rivière. Les études
viennent ainsi d’être engagées sur 5 secteurs : Antony (parc Heller), l’Haÿ-les-Roses (parc de la Bièvre), Cachan (jardin le Vallon) ; Gentilly (parc Pablo-Picasso), Paris (Parc Kellerman).
La ville d’Antony a le privilège, à la différence des autres communes engagées aux côtés de la Métropole, d’être traversée par le ru des Godet, affluent de la Bièvre. Il chemine notamment
au sein du parc Heller, permettant ainsi d’envisager la restauration d’une confluence naturelle et ainsi participer au fonctionnement naturel de ces deux rivières. Les grands enjeux liés
à l’eau, à la biodiversité et à l’adaptation au changement climatique sont au cœur de ce projet de territoire ambitieux et vertueux."/>
          <Question vidsrc="none" imgsrc="./plan.png" ansid="ans2" title="Quelles sont les effets de cette réouverture sur les risques météorologiques (inondation, période d’assèchement...) ?" text="Le projet va contribuer à réduire le risque global d’inondation. Les lits emboités (lit mineur inséré dans un lit majeur) offrent d’importantes capacités de stockage pour absorber le
surplus d’eau. Par ailleurs, les sites de réouvertures ont justement été choisis afin de permettre à la rivière de suivre son cycle naturel, entre étiage (le plus faible niveau du cours d’eau
dans l’année ) et inondation sans affecter des personnes ou des habitations. L’eau qui sera ainsi stockée dans les lits n’impactera pas les secteurs urbanisés et réduira ou ralentira le flux
vers la Seine. Le projet sera conçu et dimensionné pour les cas extrêmes (trop et pas assez d’eau) grâce aux choix des végétaux et banquettes de débordement."/>
      <Question vidsrc="none" imgsrc="none" ansid="ans3" title=" Quel sera l’impact du projet sur les nuisibles (moustiques et rats) ?" text="Actuellement, l’étang du soleil est parcouru par un léger courant généré à la fois par l’entrée des eaux du ru des Godets et par deux aérateurs installés en 2017 suite aux premières crises
sanitaires (mortalité d’oiseaux et de poissons) dues à l’asphyxie du milieu. Aussi, l’étendue d’eau n’est pas complètement stagnante même s’il est possible que des populations de
moustiques se développent sur les rives de l’étang.
Le projet de restauration de la confluence entre le ru des Godets et la Bièvre ainsi que la renaturation de ces deux rivières permettront de retrouver un fonctionnement équilibré des
écosystèmes aquatiques du parc. Le fonctionnement dynamique des deux cours d’eau empêchera la présence d’eaux stagnantes, dissipant le risque de développement des
moustiques.
Une attention particulière sera portée aux corbeilles installées dans le parc. Sans déchets, il n’y a pas de risque de prolifération des rats puisqu’ils n’auront pas de sources de nourriture."/>
      <Question vidsrc="none" imgsrc="none" ansid="ans4" title="Quel sera l’impact du projet sur les arbres du parc ?" text="Le scénario retenu concilie préservation des arbres et maintien d’une grande prairie centrale pour les loisirs et les manifestations. Sur les 5 000 arbres du parc, ce scénario en impacterait
au maximum 140 dont 55 arbres de gros diamètre (plus de 40 cm). Les études d’avant-projet viendront préciser ce chiffre à la baisse lors de la définition du tracé de la Bièvre. En phase
chantier, le piquetage du parcours de la Bièvre permettra encore de modifier légèrement le chemin en gardant toujours l’objectif de préserver le maximum d’arbres. D’autre part, le
projet de réouverture de la Bièvre prévoit de replanter au moins le double des arbres impactés par le projet
"/>
      <Question vidsrc="none" imgsrc="none" ansid="ans5" title="Quand et comment vont être associés les habitants au projet de réouverture de la Bièvre ?" text="La Ville va créer un comité de suivi citoyen intégrant les associations. Un appel à candidature sera lancé et ouvert à tous les Antoniens. Un tirage au sort sera ensuite réalisé pour
sélectionner ceux qui participeront à ce comité de suivi.
Parallèlement, la Ville a saisi l’opportunité de la réouverture de la Bièvre et de la renaturation du ru des Godets pour engager un projet de réaménagement du parc Heller. Elle a choisi
d’associer tous les citoyens à une première phase de consultation en 2022 pour recueillir en amont du projet les attentes et souhaits des habitants. Au total, près de 1700 réponses ont
été recueillies en ligne et en consultation directe . Cette démarche a été organisée afin de toucher un public plus large et difficile à capter. Les services de la Ville se sont rendus dans un
centre municipal de loisirs auprès des enfants, au parc Heller plusieurs après-midi et lors d’évènements organisés dans le parc. Des ateliers de co-construction thématiques seront
également organisés lors des prochaines phases du projet."/>
      <Question vidsrc="none" imgsrc="none" ansid="ans6" title="Quel sera le coût d’un tel projet ? Comment est-il financé ?" text="Le coût du projet de réouverture de la Bièvre et de restauration de sa confluence avec le ru des Godets, lui-même renaturé dans le cadre de ce projet, s’élève à 9 millions d’euros.
L’Agence de l’Eau Seine Normandie et la région Ile-de-France sont aujourd’hui susceptibles de financer ce projet à hauteur de 80 %. Les budgets métropolitains consacrés à la GEMAPI
vont ainsi être investis sur le territoire d’Antony.
Ce projet permettra également de répondre aux exigences de l’Union Européenne en matière de qualité des cours d’eau"/>
      </div>
    </div>
  )
}

export default FAQ