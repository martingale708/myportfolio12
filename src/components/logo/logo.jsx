import { Link } from 'react-router-dom'
import { useTheme } from '../../utils/hooks/index'
import Logolight from '../../assets/logo/logo1.png'
import Logodark  from '../../assets/logo/logo2.png'
import '../../sass/components/_logo.scss'

const Logo = () => {
  const { darkMode } = useTheme()
  return (
    <div className="header__logo">
      <Link to="/">
        <img src={darkMode ? Logodark : Logolight} alt="Mon logo personnel" />
      </Link>
    </div>
  )
}

export default Logo
