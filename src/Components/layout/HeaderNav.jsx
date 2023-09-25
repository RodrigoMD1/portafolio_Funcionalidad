import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <span>R</span>
                <h3>
                    Rodrigo Martinez Duvivier
                </h3>
            </div>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/Inicio" className={({ isActive }) => isActive ? "active" : ""}>inicio</NavLink>
                        <NavLink to="/Portafolio" className={({ isActive }) => isActive ? "active" : ""}>Portafolio</NavLink>
                        <NavLink to="/Servicios" className={({ isActive }) => isActive ? "active" : ""}>Servicios</NavLink>
                        <NavLink to="/Curriculum" className={({ isActive }) => isActive ? "active" : ""}>Curriculum</NavLink>
                        <NavLink to="/Contacto" className={({ isActive }) => isActive ? "active" : ""}>Contacto</NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    )
}
