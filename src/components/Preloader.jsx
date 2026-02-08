import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const Preloader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--color-bg-cream)]"
        >
            <div className="flex flex-col items-center">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                        repeat: Infinity,
                    }}
                    className="mb-4 text-[var(--color-primary-green)]"
                >
                    <Leaf size={64} />
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-2xl font-[var(--font-heading)] font-bold text-[var(--color-primary-green)]"
                >
                    Peepul Tree School
                </motion.h2>
            </div>
        </motion.div>
    );
};

export default Preloader;
