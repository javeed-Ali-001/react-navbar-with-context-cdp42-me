import {Link} from 'react-router-dom'

import './index.css'
import ThemeContext from '../../context/ThemeContext'

const logoLightImgUrl =
  'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
const logoDarkImgUrl =
  'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'

const lightImgUrl =
  'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
const darkImgUrl = 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const logoImgUrl = isDarkTheme ? logoDarkImgUrl : logoLightImgUrl

      const themeImgUrl = isDarkTheme ? lightImgUrl : darkImgUrl

      const navbarBgColor = isDarkTheme ? 'navBar-dark' : 'navBar-light'

      const ontoggleButton = () => {
        toggleTheme()
      }

      const textColorText = isDarkTheme ? 'dark-them-text' : 'light-them-text'

      return (
        <div className={`navBar ${navbarBgColor}`}>
          <div className="navbar-content">
            <img src={logoImgUrl} className="logoImg" alt="website logo" />
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className={`links ${textColorText}`}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className={`links ${textColorText}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              data-testId="theme"
              type="button"
              className="theme-button"
              onClick={ontoggleButton}
            >
              <img src={themeImgUrl} className="themeImg" alt="theme" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
