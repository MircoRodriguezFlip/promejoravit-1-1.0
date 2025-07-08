import styles from '../../styles/modules/sectionLp5.module.css';

import img1Section from '../../assets/images/img-section-lp-5.webp';

import { BotonNav } from '../utils/BotonNav';

export const SectionLp5 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={`${styles.sectionTitulo} bold-text`}>
                <h2>+1,000</h2>

                <h2>Trabajadores Satisfechos</h2>

                <h3>¿Listo para iniciar?</h3>

                <h3>Simula tu crédito y obtén respuesta hoy mismo</h3>
            </header>

            <div className={styles.sectionContenido}>
                <img
                    src={img1Section}
                    alt="Ejecutiva de Mejoravit de brazos cruzados, esperando que dejes tus datos para solicitar tu crédito Mejoravit"
                    loading="lazy"
                    decoding="async"
                />

                <BotonNav dataCta="section-5-lp-btn-1" />
            </div>
        </section>
    );
};
