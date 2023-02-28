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
                    ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/not-found-img.png'
                }
                alt="not found"
              />
            </div>
            <h1>Lost Your Way</h1>
            <p>We cannot seem to find the page you are looking for.</p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
