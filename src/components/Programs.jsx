import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { schoolData } from '../data/schoolData';
import Section from './Section';

const Programs = () => {
    const [selectedProgram, setSelectedProgram] = useState(null);

    return (
        <Section
            id="programs"
            title="Our Programs"
            subtitle="Age-appropriate learning journeys designed to spark curiosity and foster independence."
            className="bg-[var(--color-bg-cream)]"
        >
            <div className="grid md:grid-cols-3 gap-8">
                {schoolData.programs.map((program, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        onClick={() => setSelectedProgram(program)}
                        className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                        <div className="h-3 bg-[var(--color-primary-green)] group-hover:h-4 transition-all"></div>
                        <div className="p-8">
                            <span className="inline-block px-3 py-1 bg-[#f1f8e9] text-[var(--color-primary-green)] text-xs font-bold rounded-full mb-4">
                                {program.age}
                            </span>
                            <h3 className="text-2xl font-bold mb-4 text-[var(--color-text-dark)] group-hover:text-[var(--color-primary-green)] transition-colors">
                                {program.name}
                            </h3>
                            <p className="text-[var(--color-text-muted)] mb-6">
                                {program.focus}
                            </p>

                            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                                <span className="text-sm font-semibold text-[var(--color-text-muted)]">Learn More</span>
                                <div className="w-8 h-8 rounded-full bg-[var(--color-bg-cream)] flex items-center justify-center group-hover:bg-[var(--color-primary-green)] group-hover:text-white transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProgram && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProgram(null)}
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedProgram(null)}
                                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>

                            <span className="inline-block px-3 py-1 bg-[#f1f8e9] text-[var(--color-primary-green)] text-sm font-bold rounded-full mb-4">
                                {selectedProgram.age}
                            </span>
                            <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-2">{selectedProgram.name}</h2>
                            <p className="text-[var(--color-text-muted)] text-lg mb-8">{selectedProgram.details?.description}</p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-[var(--color-text-dark)] mb-4 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-[var(--color-primary-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                                        Curriculum Highlights
                                    </h4>
                                    <ul className="space-y-2">
                                        {selectedProgram.details?.curriculum.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-green)] mt-2 shrink-0"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[var(--color-text-dark)] mb-4 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-[var(--color-primary-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        Daily Schedule
                                    </h4>
                                    <p className="text-gray-600 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <span className="block text-sm font-semibold text-gray-400 mb-1">Time</span>
                                        {selectedProgram.details?.schedule}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100 flex justify-end">
                                <a
                                    href="#contact"
                                    onClick={() => setSelectedProgram(null)}
                                    className="px-6 py-3 bg-[var(--color-primary-green)] text-white font-semibold rounded-full hover:bg-[var(--color-primary-green)]/90 transition-colors"
                                >
                                    Enquire about {selectedProgram.name}
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </Section>
    );
};

export default Programs;
