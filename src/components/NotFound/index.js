import './index.css'
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

const notFoundImg = 'https://assets.ccbp.in/frontend/react-js/not-found-img.png'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutBgColor = isDarkTheme ? 'dark-bg' : 'light-bg'

      const textColor = isDarkTheme ? 'dark-text' : 'light-text'

      return (
        <div className={`not-container ${aboutBgColor}`}>
          <Navbar />
          <div className="home-container">
            <img src={notFoundImg} className="home-img" alt="not found" />
            <h1 className={`home-text ${textColor}`}>Lost your Way?</h1>
            <p className={`description ${textColor}`}>
              We cannot seem to find the page
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
