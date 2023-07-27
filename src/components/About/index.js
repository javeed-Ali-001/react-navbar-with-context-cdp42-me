import './index.css'
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

const aboutLightImg =
  'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

const aboutDarkImg =
  'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutImg = isDarkTheme ? aboutDarkImg : aboutLightImg

      const aboutBgColor = isDarkTheme ? 'dark-bg' : 'light-bg'

      const textColor = isDarkTheme ? 'dark-text' : 'light-text'

      return (
        <div className={`about-container ${aboutBgColor}`}>
          <Navbar />
          <div className="home-container">
            <img src={aboutImg} className="home-img" alt="about" />
            <h1 className={`home-text-light ${textColor}`}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
