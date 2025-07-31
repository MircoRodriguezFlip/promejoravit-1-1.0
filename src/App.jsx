import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { RealVh } from './components/utils/RealVh';

import { NavBar } from './components/common/NavBar';
import { Cargando } from './components/utils/Cargando';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './hooks/ScrollTop';

const LandingPage = lazy(() => import('./components/pages/LandingPage'));
const PoliticasPage = lazy(() => import('./components/pages/PoliticasPage'));
const FaqPage = lazy(() => import('./components/pages/FaqPage'));

function App() {
    return (
        <BrowserRouter>
            <RealVh />

            <ScrollToTop />

            <NavBar />

            <Suspense
                fallback={
                    <main className="cargando">
                        <Cargando />
                    </main>
                }
            >
                <Routes>
                    <Route path="/" element={<LandingPage />}></Route>
                    <Route path="/politica-privacidad" element={<PoliticasPage />}></Route>
                    <Route path="/faq" element={<FaqPage />}></Route>
                </Routes>
            </Suspense>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
