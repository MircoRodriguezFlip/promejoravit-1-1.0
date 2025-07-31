import logoCargando from '../../assets/images/logo-navbar.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const Cargando = () => {
    return (
        <div className="cargando-container">
            <img src={logoCargando} alt="Logotipo de Mejoravit" />

            <FontAwesomeIcon icon={faSpinner} spin size="2x" className="spinner-icon" />
        </div>
    );
};
