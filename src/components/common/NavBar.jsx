import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import LogoNavbar from '../../assets/images/logo-navbar.webp';

import { BurgerMenu } from './BurgerMenu';
import { navLinks } from '../utils/NavBarMenu';

export const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState(navLinks[0].id);

    const handleLinkClick = (e, item) => {
        e.preventDefault();
        setActiveLink(item.id);

        if (location.pathname === '/') {
            if (item.to === '/') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
                return;
            }

            const targetElement = document.querySelector(item.to);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth',
                });
            }
        } else {
            navigate(`/${item.to}`);
        }
    };

    return (
        <header>
            <nav className="navbar" aria-label="Barra de navegación principal">
                {/* LOGO */}

                <div className="logo-container">
                    <NavLink to="/" aria-label="Ir a la página principal" data-link="navbar-logo-btn">
                        <img src={LogoNavbar} alt="Logotipo de Mejoravit en la barra de navegación" className="logo-navbar" />
                    </NavLink>
                </div>

                {/* LISTA  */}

                <ul className="menu-nav bold-text">
                    {navLinks.map((item) => (
                        <li key={item.id}>
                            {item.to.startsWith('#') || item.to === '/' ? (
                                <a
                                    href={item.to}
                                    onClick={(e) => handleLinkClick(e, item)}
                                    className={activeLink === item.id ? 'active' : ''}
                                    title={item.title}
                                    data-link={item.dataLink}
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <NavLink
                                    to={item.to}
                                    title={item.title}
                                    className={({ isActive }) => (isActive || activeLink === item.id ? 'active' : '')}
                                    onClick={() => setActiveLink(item.id)}
                                    data-link={item.dataLink}
                                >
                                    {item.label}
                                </NavLink>
                            )}
                            {item.id !== navLinks[navLinks.length - 1].id && <span className="linea-separadora light-text">|</span>}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* BURGERMENU */}

            <BurgerMenu />
        </header>
    );
};
