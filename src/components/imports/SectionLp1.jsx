import styles from '../../styles/modules/sectionLp1.module.css';

import img1Section from '../../assets/images/img-section-lp-1.webp';

import { BotonNav } from '../utils/BotonNav';

export const SectionLp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <p className="light-text">Solicita tu</p>

                <h1 className="bold-text">Crédito Mejoravit</h1>

                <p className="light-text">En minutos</p>
            </header>

            <div className={styles.sectionContenido}>
                <img src={img1Section} alt="Ejecutiva de Mejoravit" />

                <div className={styles.contenido1}>
                    <BotonNav dataCta="home-btn-1" />

                    <div>
                        <h2 className="light-text">Precalifica y obten hasta $163,000 en efectivo</h2>

                        <h3 className="bold-text">SIN BURO NI AVAL</h3>
                    </div>
                </div>
            </div>

            {/* Fondo animado */}
            <div className={`${styles.bg} ${styles.bg1}`}></div>
        </section>
    );
};
