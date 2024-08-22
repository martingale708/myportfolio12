import { useTheme } from '../../utils/hooks/index'
import DownloadBtn from '../../components/downloadbtn/downloadbtn'
import MaPhoto from '../../assets/photo/Js.png'
// import GitHub from '../../assets/icones/github.png'
// import DarkGitHub from '../../assets/icones/darkgithub.png'
// import LinkedIn from '../../assets/icones/linkedin.png'
// import DarkLinkedIn from '../../assets/icones/darklinkedin.png'
// import Twitter from '../../assets/icones/twitter.png'
// import DarkTwitter from '../../assets/icones/darktwitter.png'
 import ImageStyle from '../../utils/style/imagestyle'
import '../../sass/containers/_introduction.scss'

const Introduction = () => {
  const { darkMode } = useTheme()

  return (
    <section className="intro">
      <h2 id="a-propos" className="intro__title">
        À propos
      </h2>
      <div className="intro__desc">
       <p> 
       Titulaire d'une licence en mathématiques et fort de mon expérience en tant que professeur particulier, 
       je me suis tourné vers le développement web pour élargir mes compétences et envisager une carrière en freelance
       Passionné par les nouvelles technologies, j'ai suivi la formation d'intégrateur web d'OpenClassrooms, 
       où j'ai acquis une solide maîtrise de HTML, CSS, JavaScript etc...
       Je suis enthousiaste à l'idée de continuer à explorer ce domaine tout en renforçant mes compétences
       </p>    
       <div className="intro__desc-liens">
  <button  className="buttonGithub"  onClick={() => window.open('https://github.com/martingale708', '_blank')}>
    GitHub
  </button>
  <button  className="buttonContact"  onClick={() => window.location.href = '/#contact'}>
    Me contacter
  </button>
</div>
        <DownloadBtn />
      </div>
      <div className="intro__photo">
        <ImageStyle />
        <img
          className="image-theme"
          src={MaPhoto}
          alt="Portrait de Herizo Rakotoarivony"
        />
        <h3>Herizo Rakotoarivony</h3>
        <h3>Développeur front-end</h3>
      </div>
    </section>
  )
}

export default Introduction
