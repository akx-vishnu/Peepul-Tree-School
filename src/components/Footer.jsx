import { schoolData } from '../data/schoolData';
import logo from '../assets/logo.png';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[var(--color-primary-green)] text-white pt-16 pb-8">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center mb-4">
                    <a href="#home" aria-label="Back to Home">
                        <img src={logo} alt={schoolData.name} className="h-20 w-auto object-contain bg-white/10 p-2 rounded-lg" />
                    </a>
                </div>
                <h2 className="text-3xl font-[var(--font-heading)] mb-6 text-white">{schoolData.name}</h2>
                <div className="flex justify-center gap-8 mb-8 text-white/80">
                    {schoolData.navigation.map((link) => (
                        <a key={link.name} href={link.href} className="hover:text-white transition-colors">
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="flex justify-center gap-6 mb-8">
                    <a
                        href={schoolData.contact.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-colors"
                        aria-label="Follow us on Instagram"
                    >
                        <Instagram size={24} />
                    </a>
                    <a
                        href={schoolData.contact.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-colors"
                        aria-label="Follow us on Facebook"
                    >
                        <Facebook size={24} />
                    </a>
                </div>
                <div className="text-white/40 text-sm">
                    &copy; {new Date().getFullYear()} {schoolData.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
