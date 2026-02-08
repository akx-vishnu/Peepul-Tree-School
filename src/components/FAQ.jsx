import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import { schoolData } from '../data/schoolData';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <Section id="faq" title="Common Questions" subtitle="Everything you need to know about joining our family.">
            <div className="max-w-3xl mx-auto space-y-4">
                {schoolData.faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                    >
                        <button
                            className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="font-semibold text-lg text-[var(--color-primary-green)]">{faq.question}</span>
                            <span className="text-[var(--color-primary-light)]">
                                {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                            </span>
                        </button>
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="px-6 pb-6 text-gray-600">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default FAQ;
