import styles from '../../styles/modules/sectionLp4.module.css';

import img1Section from '../../assets/images/img-section-lp-4.png';
import { iconosSectionLp4 } from '../utils/iconosSectionLp4';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SectionLp4 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.primerContenido}>
                {iconosSectionLp4.map(({ id, titulo, items }) => (
                    <div key={id} className={styles.preguntas}>
                        <h2 className="bold-text">{titulo}</h2>

                        {items.map(({ id, icon, texto }) => (
                            <div key={id} className={styles.iconContainer}>
                                <FontAwesomeIcon icon={icon} className={styles.icon} />
                                <p className="light-text">{texto}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <img
                src={img1Section}
                alt="Ejecutiva de Mejoravit mostrando el dinero que puedes recibir con Mejoravit"
                loading="lazy"
                decoding="async"
            />
        </section>
    );
};
