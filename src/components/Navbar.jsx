import React from 'react'
import logo from '../assets/images/windows-0.png'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    const linkClass = ({ isActive }) => isActive ? "text-dark nav-active nav-link " : "text-dark-emphasis nav-item nav-link"

    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-95 ">
            <NavLink className="navbar-brand" to="/">
            <img className='me-3' src={logo} alt="LOGO" /> 
            Wu Jing
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav" >
                <NavLink className={linkClass} to="/">Home</NavLink>
                <NavLink className={linkClass} to="/cv">CV</NavLink>
                <NavLink className={linkClass} to="/contact">Contact</NavLink>
                <NavLink className={linkClass} to="/misc">Misc</NavLink>
            </ul>
            </div>
        </nav>
  )
}

export default Navbar