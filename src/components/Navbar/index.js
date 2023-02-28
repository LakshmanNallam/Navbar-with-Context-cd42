import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NavBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      console.log(isDarkTheme)
      const changeThemeBtnClicked = () => {
        toggleTheme()
      }

      return (
        <div className={`navv ${isDarkTheme ? 'dark' : 'light'}`}>
          <div className="firstImgConHolder">
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
              }
              className="logo"
              alt="website logo"
            />
          </div>
          <Link to="/" className={`link ${isDarkTheme ? 'dark' : 'light'}`}>
            <p>Home</p>
          </Link>
          <Link
            to="/about"
            className={`link ${isDarkTheme ? 'dark' : 'light'}`}
          >
            <p>About</p>
          </Link>
          <div className="firstImgConHolder">
            <button
              type="button"
              className="btn"
              onClick={changeThemeBtnClicked}
            >
              <img
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
                }
                className="logo"
                alt="theme"
              />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NavBar
