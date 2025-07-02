import styles from '../../styles/modules/sectionLp2.module.css';
import img1Section from '../../assets/images/img-section-lp-2.webp';

import { Form } from './Form';

import { useMediaQuery } from '../../hooks/UseMediaQuery';

export const SectionLp2 = () => {
    const shouldShowImage = useMediaQuery('(min-width: 992px)');

    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text">Simula tu Mejoravit 2025</h2>

                <h3 className="light-text">
                    Regístrate y un agente especializado se pondrá en contacto contigo en pocos minutos, no esperes más y accede a tu precalificación
                    Crédito Mejoravit 2025
                </h3>
            </header>

            <div className={styles.contenido1}>
                <div className={styles.form}>
                    <Form />
                </div>

                {shouldShowImage && (
                    <img
                        src={img1Section}
                        alt="Ejecutiva de Mejoravit invitándote a completar el formulario de precalificación"
                        loading="lazy"
                        decoding="async"
                    />
                )}
            </div>
        </section>
    );
};
