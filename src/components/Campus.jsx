import { motion } from 'framer-motion';
import Section from './Section';

const Campus = () => {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop",
            alt: "Outdoor Classroom",
            caption: "Learning amidst nature"
        },
        {
            src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2072&auto=format&fit=crop",
            alt: "Creative Play",
            caption: "Space for imagination"
        },
        {
            src: "https://images.unsplash.com/photo-1560785496-08882ca636d3?q=80&w=1974&auto=format&fit=crop",
            alt: "Safe Playgrounds",
            caption: "Safe and secure play areas"
        },
        {
            src: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=2069&auto=format&fit=crop",
            alt: "Gardening Activity",
            caption: "Hands-on environmental learning"
        }
    ];

    return (
        <Section
            id="campus"
            title="Our Campus"
            subtitle="A safe, green sanctuary designed to inspire curiosity and connection with the natural world."
            className="bg-white"
        >
            <div className="grid md:grid-cols-2 gap-8">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative overflow-hidden rounded-3xl h-64 md:h-80 cursor-pointer"
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white font-bold text-xl">{img.caption}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <p className="text-lg text-[var(--color-text-muted)] max-w-3xl mx-auto italic">
                    "The environment is the third teacher." — Loris Malaguzzi
                </p>
            </div>
        </Section>
    );
};

export default Campus;
