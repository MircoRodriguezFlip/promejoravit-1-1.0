import logoFooter from '../../assets/images/logo-navbar.webp';

import { NavLink } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="footer light-text">
            <NavLink to="/" aria-label="Ir a la página de inicio">
                <img src={logoFooter} alt="Logotipo de Mejoravit" />
            </NavLink>

            <NavLink to="/politica-privacidad" title="Ver la política de privacidad">
                Política de privacidad
            </NavLink>
        </footer>
    );
};
