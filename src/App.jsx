import { useState, useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Preloader from './components/Preloader';
import './index.css';

// Lazy load heavy components
const Programs = lazy(() => import('./components/Programs'));
const Campus = lazy(() => import('./components/Campus'));
const FloraFauna = lazy(() => import('./components/FloraFauna'));
const Contact = lazy(() => import('./components/Contact'));
const Gallery = lazy(() => import('./components/Gallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Timeline = lazy(() => import('./components/Timeline'));

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-[var(--color-bg-cream)] overflow-hidden">
            <AnimatePresence>
                {loading && <Preloader />}
            </AnimatePresence>

            {!loading && (
                <>
                    <Helmet>
                        <title>Peepul Tree School | Nature-Centric Learning</title>
                        <meta name="description" content="Peepul Tree School in Palakkad offers a holistic learning environment integrated with nature. Admissions open for Playgroup, Nursery, and Kindergarten." />
                        <meta name="keywords" content="Preschool Palakkad, Nature School, Holistic Education, Kindergarten, Peepul Tree School, Child-centric learning" />
                    </Helmet>
                    <Navbar />
                    <Hero />
                    <About />
                    <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
                        <Programs />
                        <Timeline />
                        <Campus />
                        <FloraFauna />
                        <Gallery />
                        <Testimonials />
                        <FAQ />
                        <Contact />
                    </Suspense>
                    <Footer />
                    <BackToTop />
                </>
            )}
        </div>
    );
}

export default App;
