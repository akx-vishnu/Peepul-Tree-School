import { motion } from 'framer-motion';
import { schoolData } from '../data/schoolData';
import Section from './Section';
import { Leaf } from 'lucide-react';

const FloraFauna = () => {
    return (
        <Section
            id="flora-fauna"
            title="Flora & Fauna"
            subtitle="Discover the rich biodiversity that shares our campus."
            className="bg-white"
        >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {schoolData.floraFauna.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex items-center gap-2 mb-2">
                                    <Leaf size={16} className="text-[var(--color-primary-green)]" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary-green)]">
                                        Biodiversity
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 leading-tight">{item.name}</h3>
                                <p className="text-sm text-gray-200 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                    {item.description}
                                </p>
                            </div>

                            {/* Fun Fact Reveal */}
                            <div className="mt-4 pt-4 border-t border-white/20 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                <p className="text-xs font-semibold text-[var(--color-primary-green)] mb-1">Fun Fact:</p>
                                <p className="text-xs text-gray-200 italic">{item.fact}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default FloraFauna;
