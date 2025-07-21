import { TitleSEO } from '../utils/TitleSEO';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { SectionLp1 } from '../imports/SectionLp1';
import { SectionLp2 } from '../imports/SectionLp2';
import { SectionLp3 } from '../imports/SectionLp3';
import { SectionLp4 } from '../imports/SectionLp4';
import { SectionLp5 } from '../imports/SectionLp5';

const LandingPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth',
                });
            }
        }
    }, [location]);

    return (
        <main>
            <TitleSEO
                title="Mejoravit | Precalifica Ahora"
                description="En Mejoravit solicita tu Crédito Mejoravit y recibe hasta $162,000 en efectivo, Rápido, fácil y con cobertura a nivel nacional. ¡Solicítalo en línea hoy!"
                canonical="https://creditosoloparati.com.mx/"
            />

            <SectionLp1 />

            <section id="registro">
                <SectionLp2 />
            </section>

            <section id="aplicacion">
                <SectionLp4 />
            </section>

            <section id="beneficios">
                <SectionLp3 />
            </section>

            <SectionLp5 />
        </main>
    );
};

export default LandingPage;
