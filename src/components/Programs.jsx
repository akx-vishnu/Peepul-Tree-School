import { motion } from 'framer-motion';
import { schoolData } from '../data/schoolData';
import Section from './Section';

const Programs = () => {
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
                        className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
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
        </Section>
    );
};

export default Programs;
