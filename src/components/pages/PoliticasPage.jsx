import { TitleSEO } from '../utils/TitleSEO';

import { SectionPp1 } from '../imports/SectionPp1';

const PoliticasPage = () => {
    return (
        <main>
            <TitleSEO
                title="Mejoravit | Política de Privacidad"
                description="Conoce cómo protegemos y utilizamos tu información personal en nuestra plataforma de Crédito Mejoravit."
                canonical="https://creditosoloparati.com.mx/politica-privacidad"
            />

            <SectionPp1 />
        </main>
    );
};

export default PoliticasPage;
