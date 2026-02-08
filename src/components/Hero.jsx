import { motion } from 'framer-motion';
import { schoolData } from '../data/schoolData';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[var(--color-bg-cream)]">

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-[#e8f5e9] rounded-l-[100px] -z-10 opacity-60 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-accent-yellow)] rounded-full blur-3xl -z-10 opacity-20"></div>

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-[#dcedc8] text-[var(--color-primary-green)] font-semibold text-sm tracking-wide">
                        Admissions Open for 2026-27
                    </span>
                    <h1 className="leading-tight">
                        {schoolData.hero.tagline.split(' ').map((word, i) => (
                            <span key={i} className="inline-block mr-3">
                                {word === "Nature" ? <span className="text-[var(--color-primary-light)]">{word}</span> : word}
                            </span>
                        ))}
                    </h1>
                    <p className="text-xl text-[var(--color-text-muted)] max-w-lg leading-relaxed">
                        {schoolData.hero.subTagline}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="#contact" className="btn btn-primary flex items-center gap-2 group">
                            {schoolData.hero.cta}
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </a>
                        <a href="#about" className="btn bg-white border border-[var(--color-primary-green)] text-[var(--color-primary-green)] hover:bg-[#f1f8e9]">
                            Learn More
                        </a>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Main Image Placeholder */}
                    <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2038&auto=format&fit=crop"
                            alt="Children playing in nature"
                            className="w-full h-[500px] object-cover"
                        />
                    </div>

                    {/* Floating Badge */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs hidden md:block"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-[var(--color-accent-yellow)] p-3 rounded-full">
                                <svg className="w-8 h-8 text-[var(--color-primary-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                            </div>
                            <div>
                                <p className="font-bold text-lg text-[var(--color-primary-green)]">Holistic Growth</p>
                                <p className="text-sm text-gray-500">Academics + Art + Nature</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
