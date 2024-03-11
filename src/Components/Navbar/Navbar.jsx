import { Link } from 'react-router-dom'
import './Navbar.css'
import companyLogo from '../../assets/misc/car-logo.png'

export default function Navbar() {
    return (
      <nav className='navbar-top'>
        <a href='/' className='company-logo'>
          <img src={companyLogo} alt="company-logo" id='company-logo' />
        </a>
        <ul className='navbar-body'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
          <li>
            <Link to="/cars-and-services">Cars & Services</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
        </ul>
        <div className='registration-buttons'>
          <a href="/">Sign In</a>
          <a href="/" id='register-btn'>Register</a>
  
        </div>
      </nav>
    )
  }