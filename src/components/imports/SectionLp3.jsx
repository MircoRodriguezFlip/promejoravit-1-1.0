import styles from '../../styles/modules/sectionLp3.module.css';

import img1Section from '../../assets/images/img-section-lp-4.webp';
import { iconosSectionLp3 } from '../utils/iconosSectionLp3';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useAnimationScroll from '../../hooks/UseAnimationScroll';

export const SectionLp3 = () => {
    const imageRef = useAnimationScroll('slide-in');

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.primerContenido}>
                {iconosSectionLp3.map(({ id, titulo, items }) => (
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
                ref={imageRef}
                src={img1Section}
                className="animacion-izq"
                alt="Ejecutiva de Mejoravit mostrando el dinero que puedes recibir con Mejoravit"
                loading="lazy"
                decoding="async"
            />
        </section>
    );
};
