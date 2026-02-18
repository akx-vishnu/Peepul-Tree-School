import { motion } from 'framer-motion';
import { schoolData } from '../data/schoolData';
import Section from './Section';
import { Leaf, Heart, Sparkles, Palette, Shield, HandHeart } from 'lucide-react';
const iconMap = {
    Leaf: Leaf,
    Heart: Heart,
    Sparkles: Sparkles,
    Palette: Palette,
    Shield: Shield,
    HandHeart: HandHeart
};

const About = () => {
    return (
        <Section id="about" className="bg-white overflow-hidden">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Vision Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-6"
                    >
                        Our Vision
                    </motion.h2>
                    <p className="text-xl leading-relaxed text-[var(--color-text-muted)] mb-8">
                        "{schoolData.vision}"
                    </p>

                    <div className="space-y-6">
                        {schoolData.philosophy.map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="mt-1 bg-[#f1f8e9] p-2 rounded-lg h-fit">
                                    <Leaf size={20} className="text-[var(--color-primary-green)]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1 text-[var(--color-text-dark)]">{item.title}</h4>
                                    <p className="text-[var(--color-text-muted)]">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Core Values Grid */}
                <div className="flex flex-col gap-6">
                    <div className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                        <p>{schoolData.coreValuesSummary}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {schoolData.coreValues.map((value, index) => {
                            const Icon = iconMap[value.icon] || Sparkles;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-[var(--color-bg-cream)] p-8 rounded-2xl hover:shadow-lg transition-shadow border border-transparent hover:border-[#dcedc8]"
                                >
                                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm text-[var(--color-primary-green)]">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                    <p className="text-sm text-[var(--color-text-muted)]">{value.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Note to Parents */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-20 max-w-4xl mx-auto text-center bg-[var(--color-bg-light)] p-10 rounded-3xl relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--color-primary-green)] to-[var(--color-accent-gold)]"></div>
                <h3 className="text-3xl font-bold mb-6 font-display text-[var(--color-text-dark)]">{schoolData.noteToParents.title}</h3>
                <p className="text-xl leading-relaxed text-[var(--color-text-muted)] italic">
                    "{schoolData.noteToParents.content}"
                </p>
                <div className="mt-8 flex justify-center">
                    <Heart className="text-[var(--color-accent-gold)]" size={32} fill="currentColor" />
                </div>
            </motion.div>
        </Section>
    );
};

export default About;
