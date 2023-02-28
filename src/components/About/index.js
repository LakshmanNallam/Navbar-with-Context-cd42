// Write your code here
import ThemeContext from '../../context/ThemeContext'
import NavBar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className="HomeCon">
          <NavBar />
          <div className={`LowerConInHome ${isDarkTheme ? 'dark' : 'light'}`}>
            <div className="ImgConForHome">
              <img
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
                }
                alt="about"
              />
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
