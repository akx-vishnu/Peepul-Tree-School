import { motion } from 'framer-motion';

const Section = ({ id, title, subtitle, children, className = "" }) => {
    return (
        <section id={id} className={`py-20 md:py-32 ${className}`}>
            <div className="container mx-auto px-4">
                {(title || subtitle) && (
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        {title && (
                            <motion.h2
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="mb-4"
                            >
                                {title}
                            </motion.h2>
                        )}
                        {subtitle && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-[var(--color-text-muted)]"
                            >
                                {subtitle}
                            </motion.p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
