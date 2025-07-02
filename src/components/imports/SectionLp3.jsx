import styles from '../../styles/modules/sectionLp3.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconosSectionLp3 } from '../utils/iconosSectionLp3';

export const SectionLp3 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text">Beneficios Saldo en Línea</h2>
            </header>

            <div className={styles.sectionContenido}>
                <div>
                    {iconosSectionLp3.map(({ id, icon, text }) => (
                        <div key={id} className={styles.iconContainer}>
                            <FontAwesomeIcon icon={icon} className={styles.icon} />
                            <p className="light-text">{text}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.parrafoContainer}>
                    <p className="light-text">
                        Obtén hoy tu crédito Mejoravit 2025 sin necesidad de aval ni revisión en buró de crédito. Pagos cómodos vía nómina y atención
                        veloz 100% personalizada. Te ayudamos a usar tu saldo Mejoravit para remodelar, mejorar tu vivienda o acceder a Mejoravit en
                        efectivo. Realiza hoy mismo tu precalificación Infonavit en pocos minutos y comienza ahora.
                    </p>

                    <h3 className="bold-text">Confiable, seguro y diseñado para ti</h3>
                </div>
            </div>
        </section>
    );
};
