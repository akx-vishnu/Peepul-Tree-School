import { motion } from 'framer-motion';
import Section from './Section';
import { schoolData } from '../data/schoolData';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openLightbox = (index) => setSelectedImage(index);
    const closeLightbox = () => setSelectedImage(null);

    const nextImage = (e) => {
        e.stopPropagation();
        setSelectedImage((prev) => (prev + 1) % schoolData.gallery.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setSelectedImage((prev) => (prev - 1 + schoolData.gallery.length) % schoolData.gallery.length);
    };

    return (
        <Section id="gallery" title="Moments of Joy" subtitle="A glimpse into our daily life of exploration and learning.">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {schoolData.gallery.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer group relative"
                        onClick={() => openLightbox(index)}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">View</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <button className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full" onClick={closeLightbox}>
                        <X size={32} />
                    </button>

                    <button className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full hidden md:block" onClick={prevImage}>
                        <ChevronLeft size={48} />
                    </button>

                    <img
                        src={schoolData.gallery[selectedImage].src}
                        alt={schoolData.gallery[selectedImage].alt}
                        className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full hidden md:block" onClick={nextImage}>
                        <ChevronRight size={48} />
                    </button>

                    <p className="absolute bottom-4 left-0 right-0 text-center text-white/80 font-medium">
                        {schoolData.gallery[selectedImage].alt}
                    </p>
                </div>
            )}
        </Section>
    );
};

export default Gallery;
