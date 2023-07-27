import './index.css'
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

const homeLightImg =
  'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

const homeDarkImg = 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeImage = isDarkTheme ? homeDarkImg : homeLightImg

      const homeClassName = isDarkTheme ? 'dark-theme' : 'light-theme'

      const textClassName = isDarkTheme ? 'dark-text' : 'light-text'

      return (
        <div className={`app-container ${homeClassName}`}>
          <Navbar />
          <div className="home-container">
            <img src={homeImage} className="home-img" alt="home" />
            <h1 className={`home-text-light ${textClassName}`}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
