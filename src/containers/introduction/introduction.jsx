import DownloadBtn from '../../components/downloadbtn/downloadbtn'
import MaPhoto from '../../assets/photo/Js.png'
 import ImageStyle from '../../utils/style/imagestyle'
import '../../sass/containers/_introduction.scss'

const Introduction = () => {
  return (
    <section className="intro">
      <h2 id="a-propos" className="intro__title">
        À propos
      </h2>
      <div className="intro__desc">
       <p> 
       Titulaire d’une licence en mathématiques et fort de mon expérience en tant que professeur particulier, 
       je me suis tourné vers le développement web pour élargir mes compétences et envisager une carrière en freelance.
        Passionné par les nouvelles technologies, j’ai suivi la formation d’intégrateur web sur OpenClassrooms, 
        où j’ai acquis une solide maîtrise du HTML, du CSS, du JavaScript, etc. Je suis enthousiaste 
       à l’idée de continuer à explorer ce domaine tout en renforçant mes compétences.
       </p>    
       <div className="intro__desc-liens">
  <button  className="buttonGithub"  onClick={() => window.open('https://github.com/martingale708', '_blank')}>
    <span className='intro-button'>Github</span>
  </button>
  <button  className="buttonContact"  onClick={() => window.location.href = '/#contact'}>
    <span className='intro-button'>Me contacter</span>
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
