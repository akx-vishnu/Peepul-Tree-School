import { motion } from 'framer-motion';
import Section from './Section';
import { schoolData } from '../data/schoolData';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    return (
        <Section id="testimonials" className="bg-[var(--color-bg-cream)]">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] font-bold text-[var(--color-primary-green)] mb-4">
                        Parent Stories
                    </h2>
                    <p className="text-gray-600">Hear from the families who have made Peepul Tree their second home.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {schoolData.testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col relative"
                        >
                            <div className="absolute -top-4 left-8 bg-[var(--color-primary-green)] text-white p-3 rounded-full">
                                <Quote size={20} fill="currentColor" />
                            </div>
                            <p className="text-gray-600 mb-6 italic pt-4">"{testimonial.quote}"</p>
                            <div className="mt-auto">
                                <h4 className="font-bold text-[var(--color-primary-green)] text-lg">{testimonial.name}</h4>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Testimonials;
