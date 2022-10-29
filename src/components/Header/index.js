import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="header-container">
    <li className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-img"
      />
      <h1 className="logo-text"> Wave</h1>
    </li>
    <li className="links-container">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/about">
        About
      </Link>
      <Link className="link" to="/contact">
        Contact
      </Link>
    </li>
  </ul>
)

export default Header
