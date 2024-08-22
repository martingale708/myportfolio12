import { useTheme } from '../../utils/hooks'
import { FiSun, FiMoon } from 'react-icons/fi'
import '../../sass/components/_darkmode.scss'

const DarkMode = () => {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <div className="header__darkmode">
      <input
        className="header__darkmode-input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleDarkMode}
        defaultChecked={darkMode}
      />
      <label
        className="header__darkmode-label"
        htmlFor="darkmode-toggle"
        aria-label="changer le thème du site"
      >
        {darkMode ? <FiMoon /> : <FiSun />}
      </label>
    </div>
  )
}

export default DarkMode