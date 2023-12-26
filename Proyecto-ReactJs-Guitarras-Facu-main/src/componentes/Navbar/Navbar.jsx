import CartWidget from '../CartWidjet/CartWidjet';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
        <Link to="/">
        <img className='logoGuitarrasFacu' src={"../img/logo.jpg"} alt="Logo Guitarras Facu" />
        </Link>

        <nav>
        <ul>
            <li>
            <NavLink to="categoria/2">Guitarras Criollas</NavLink>
            </li>

            <li>
            <NavLink to="categoria/3">Guitarras Electricas</NavLink>
            </li>
    
        </ul>
        </nav>

        <CartWidget />
    </header>
    )
}

export default NavBar