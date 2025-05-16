import logoNavbar from '../../assets/images/logo-navbar.webp';

import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <header className="navbar">
            <NavLink to="/" aria-label="Ir a la página de inicio">
                <img src={logoNavbar} alt="Logotipo de Proconsultores" />
            </NavLink>
        </header>
    );
};
