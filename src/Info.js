import './App.css'
import { useEffect } from 'react'
import $ from 'jquery'
import { useHistory } from 'react-router-dom'

const Info = props => {

  $(() => {
    $('#footer-text').css({display: 'block'})
    $('#home-link').css({display: 'block'})
    $('#footer-mention').css({display: 'none'})
  })

  useEffect(() => {
    $('.page').fadeOut(0).fadeIn(1000)
    $('.logo').fadeOut(0).fadeIn(1000)
    $('#logo').removeClass("logo-home")
    $('footer').css({position: 'relative'})
    $('#logo-container').removeClass("logo-container-center")
  },[])

  return (
    <div className="page">
      <div className="gradient"><img src="./gradient.png" /></div>
      <div className="gradient2"><img src="./gradient.png" /></div>
      <div className="header-page-scroll">
        <div className="text-wrappper">
          <div className="page-title-font">infos pratiques - mentions légales</div>
          <div className="info-container">
          <span className='info-title'>INFOS PRATIQUES</span><br/><br/>
          <span className='info-subtitle'>Horaires d’ouverture :</span> le parc est ouvert de 5 h 30 à 22 h 30, été comme hiver.<br/><br/>
Toutes les entrées sont accessibles aux personnes à mobilité réduite.<br/><br/>
<span className='info-subtitle'>Réglementation :</span><br/><br/>
Est autorisé l'accès aux chiens tenus en laisse ;<br/><br/>
L'usage des engins à deux roues (cyclomoteur, bicyclette, VTT) est strictement interdit, à<br/> l'exception des bicyclettes et jouets à roues pour enfants de moins de 6 ans.<br/><br/>
Pêche interdite dans le grand étang par arrêté du Maire du 2 septembre 2016.<br/><br/><br/><br/>

<span className='info-title'>MENTIONS LÉGALES</span><br/><br/>
<span className='info-subtitle'>Édition</span><br/><br/>
Le présent site est la propriété de la Ville d'Antony, collectivité territoriale (Place de l'Hôtel-<br/>de-Ville, BP60086 92161 Antony Cedex - Tél. : 01 40 96 71 00 - communication@ville<br/>-antony.fr)<br/>
Directeur de la publication : Jean-Yves SENANT<br/>
Contact rédaction : Julie PROTHIERE<br/><br/>
<span className='info-subtitle'>Hébergement</span><br/><br/>
Le prestataire assurant le stockage direct et permanent du site est Amazon Web Services<br/> 
https://aws.amazon.com/<br/><br/>
<span className='info-subtitle'>Droits d'auteur et droit de reproduction</span><br/><br/>
Le nom de domaine "parc-heller.fr" est réservé par la Ville d'ANTONY.<br/>
Par ailleurs, l'ensemble du site et chacun de ses éléments pris séparément relèvent de la<br/> législation française et internationale sur le droit d'auteur et plus largement de la propriété<br/> intellectuelle (incluant notamment la protection au titre du droit d'auteur, du droit des<br/> marques, du droit des bases de données).<br/><br/>
Tous les droits de reproduction, de représentation et de communication publique sont<br/> réservés, y compris pour les documents téléchargeables et représentations visuelles,<br/> audiovisuelles, photographiques, iconographies, logos ou autres.<br/><br/>
La reproduction de tout ou partie de ce site sur un support électronique, quel qu'il soit, sans<br/> autorisation expresse du directeur de la publication, est formellement interdite et constituerait<br/> une contrefaçon sanctionnée par les articles L335-2 et suivants du Code de la propriété<br/>intellectuelle.<br/><br/>
Il en est de même des bases de données figurant sur le site Internet qui sont protégées par les<br/>dispositions de la loi n°98-536 du 1er juillet 1998 et le régime français du droit d'auteur.<br/><br/>
<span className='info-subtitle'>La reproduction des textes sur un support papier est autorisée sous réserve du respect<br/>des trois conditions suivantes :</span><br/><br/>
    • gratuité de la diffusion ;<br/>
    • respect de l'intégrité des documents reproduits (pas de modification ni altération) ;<br/>
    • citation claire et lisible de la source sous la forme suivante : "document issu du site<br/>Internet www.parc-heller.fr Les droits de reproduction sont réservés et strictement<br/>limités".<br/><br/>
Pour toute autre utilisation, veuillez nous consulter.<br/><br/>
<span className='info-subtitle'>Crédits photos :</span> Les représentations iconographiques et photographiques contenues dans ce<br/>site sont utilisées avec l'accord de leurs auteurs : Georges Jabbour, Ville d’Antony. La<br/>reproduction de ces photographies et illustrations est interdite sans autorisation préalable.<br/><br/>
<span className='info-subtitle'>Politique de protection des données personnelles</span><br/><br/>
Aucune information personnelle n’est collectée lors de l’utilisation de ce site.<br/><br/>
<span className='info-subtitle'>Liens</span><br/><br/>
Le site www.parc-heller.fr propose des liens vers d'autres sites. Ces sites, dont les adresses<br/>sont régulièrement vérifiées, ne font pas partie du site de la Ville d'Antony.<br/>
L'équipe de Ville d'Antony n'a pas la maîtrise de leur contenu et décline toute responsabilité<br/>quant aux informations qui y sont présentées.<br/>
<span className='info-subtitle'>Avertissement</span><br/><br/>
Les documents que nous diffusons en version électronique sur ce site font l'objet de<br/>nombreuses relectures ; ils peuvent toutefois contenir des erreurs. Si vous en constatez<br/>n'hésitez pas à nous le faire savoir en contactant le service communication, afin que nous<br/>procédions aux rectifications correspondantes.<br/><br/>
Les textes diffusés peuvent, par ailleurs, avoir fait, entre le moment où vous les avez<br/>téléchargés et celui où vous en prenez connaissance, l'objet de mises à jour. Nous ne<br/>garantissons par suite en aucune manière que ces informations sont exactes, complètes et à<br/>jour. La Ville d'Antony ne saurait être tenue responsable d'éventuels dommages directs ou<br/>indirects pouvant découler de votre accès ou utilisation de ce site, ou d'un dommage ou virus<br/>qui pourrait affecter votre ordinateur ou autre matériel informatique. Plus généralement la<br/>Ville d'Antony n'assure aucune garantie, expresse ou tacite, concernant tout, ou partie, du site.<br/><br/>
<span className='info-subtitle'>Conception – Réalisation</span><br/><br/>
Le site www.parc-heller.fr a été conçu par la Ville d'Antony.<br/>
Jean-Philippe RACINE (N° d'entreprise 2277422079 ; 230 Taschereau Est, Rouyn-Noranda,<br/>Québec, J9X3E8 Canada), a réalisé l'intégration et le développement de ce site.<br/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info