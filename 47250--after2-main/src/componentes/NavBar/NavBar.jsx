import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
        <img className='logoMarolio' src={"./img/logo.png"} alt="Logo Marolio" />

        <nav>
            <ul>
                <li>Home</li>
                <li>Almacen</li>
                <li>Limpieza</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar