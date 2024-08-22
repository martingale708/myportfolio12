import '../../sass/pages/_mentions.scss'

const Mentions = () => {
  return (
    <main className="mentions">
      <h2 className="mentions__title">MENTIONS LÉGALES</h2>
      <p>
        Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour
        la confiance en l'économie numérique, il est précisé aux utilisateurs du
        site Matthieu Bonjour l'identité des différents intervenants dans le
        cadre de sa réalisation et de son suivi.
      </p>
      <h3 className="mentions__subtitle">Editeur du site :</h3>
      <p>
        Le présent site, accessible à l’URL :{' '}
        <a href="https://matthieubonjour.fr/" target="blank">
          https://matthieubonjour.fr/
        </a>
        , est édité par Matthieu Bonjour, résidant 43 impasse de l'ancienne
        gendarmerie 83600 LES ADRETS DE L'ESTEREL.
      </p>
      <h3 className="mentions__subtitle">Hébergement :</h3>
      <p>
        Le site est hébergé par la société Hostinger International LTD, situé :
      </p>
      <ul className="mentions__list">
        <li>61 Lordou Vironos Street</li>
        <li>6023 Larnaca, Chypre</li>
      </ul>
      <p>
        L'hébergeur peut être contacté par le moyen suivant :{' '}
        <a href="https://www.hostinger.fr/contact" target="blank">
          https://www.hostinger.fr/contact
        </a>
      </p>
      <h3 className="mentions__subtitle">Nous contacter :</h3>
      <ul className="mentions__list">
        <li>Par téléphone : (+33) 0629102076</li>
        <li>Par email : matthieu83600-pro@outlook.fr</li>
        <li>
          Par courrier : 43 impasse de l'ancienne gendarmerie 83600 LES ADRETS
          DE L'ESTEREL
        </li>
      </ul>
      <h3 className="mentions__subtitle">Données personnelles :</h3>
      <p>
        De manière générale, vous n’êtes pas tenus de nous communiquer vos
        données personnelles lorsque vous visitez notre site Internet. Vous
        pouvez être amenés à nous communiquer certaines données telles que :
        votre nom, et prénom, votre email seulement si vous remplissez le
        formulaire qui vous est proposé dans la section "Contact". <br />
        Enfin, nous pouvons collecter de manière automatique certaines
        informations vous concernant lors d’une simple navigation sur notre site
        Internet, notamment : des informations concernant l’utilisation de notre
        site, votre adresse IP, le type et la version de votre navigateur, vos
        temps d'accès. De telles informations sont utilisées exclusivement à des
        fins de statistiques internes, de manière à améliorer la qualité du site
        Internet.
      </p>
    </main>
  )
}

export default Mentions
