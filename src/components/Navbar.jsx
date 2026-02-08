import { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { schoolData } from '../data/schoolData';

import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Active section logic
            const sections = schoolData.navigation.map(link => link.href.substring(1));
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = schoolData.navigation;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo Area */}
                <a href="#" className="flex items-center gap-2" aria-label="Peepul Tree School Home">
                    <img src={logo} alt={schoolData.name} className="h-12 w-auto object-contain" />
                    <span className={`font-[var(--font-heading)] text-2xl font-bold ${scrolled ? 'text-[var(--color-primary-green)]' : 'text-[var(--color-primary-green)]'}`}>
                        {schoolData.name}
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`font-medium transition-colors ${activeSection === link.href.substring(1) ? 'text-[var(--color-primary-green)] font-bold' : 'text-[var(--color-text-dark)] hover:text-[var(--color-primary-light)]'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="btn btn-primary">
                        Admissions
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-[var(--color-primary-green)]"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[var(--color-bg-cream)] border-t border-[var(--color-primary-light)] overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium py-2 border-b border-gray-100"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="btn btn-primary text-center mt-4"
                                onClick={() => setIsOpen(false)}
                            >
                                Enquire Now
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
