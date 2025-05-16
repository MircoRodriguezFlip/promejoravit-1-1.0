import styles from '../../styles/modules/sectionLp1.module.css';

import img1Section from '../../assets/images/img-section-lp-1.png';

export const SectionLp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <p className="light-text">En Pro Consultores</p>

                <h1 className="bold-text">Gestionamos tu crédito de forma rápida y segura</h1>
            </header>

            <div className={styles.sectionContenido}>
                <img src={img1Section} alt="Ejecutiva de Proconsultores" />
            </div>
        </section>
    );
};
