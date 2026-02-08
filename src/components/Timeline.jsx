import Section from './Section';
import { schoolData } from '../data/schoolData';
import { motion } from 'framer-motion';
import { Sun, CloudSun, Clock } from 'lucide-react';

const Timeline = () => {
    return (
        <Section
            id="daily-routine"
            title="A Day at Peepul Tree"
            subtitle="Flowing with the natural rhythm of the child."
            className="bg-[var(--color-bg-cream)]"
        >
            <div className="max-w-4xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--color-primary-green)]/20"></div>

                <div className="space-y-12">
                    {schoolData.dailyRoutine.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex flex-col md:flex-row gap-8 items-start md:items-center relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Icon Dot */}
                            <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-[var(--color-primary-green)] flex items-center justify-center z-10 shrink-0">
                                <Clock size={16} className="text-[var(--color-primary-green)]" />
                            </div>

                            {/* Content */}
                            <div className="pl-12 md:pl-0 md:w-1/2 md:px-12 w-full">
                                <div className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative ${index % 2 === 0 ? 'text-left md:text-right' : 'text-left'}`}>
                                    <span className="inline-block px-3 py-1 bg-[var(--color-bg-cream)] text-[var(--color-primary-green)] text-sm font-bold rounded-full mb-2">
                                        {item.time}
                                    </span>
                                    <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-1">{item.activity}</h3>
                                    <p className="text-gray-500">{item.description}</p>
                                </div>
                            </div>

                            {/* Empty space for the other side */}
                            <div className="hidden md:block md:w-1/2"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Timeline;
