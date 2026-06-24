import React, { useEffect } from 'react';

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onNext, onPrev]);

    if (currentIndex === null || !images[currentIndex]) return null;

    const currentImage = images[currentIndex];

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={onClose}
        >
            <button 
                className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl"
                onClick={(e) => { e.stopPropagation(); onClose(); }}
            >
                &times;
            </button>

            <button 
                className="absolute left-4 text-white hover:text-gray-300 text-5xl p-4"
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
            >
                &#8249;
            </button>

            <img 
                src={currentImage.image} 
                alt={currentImage.alt} 
                className="max-h-[90vh] max-w-[90vw] object-contain transition-transform duration-300"
                onClick={(e) => e.stopPropagation()}
            />

            <button 
                className="absolute right-4 text-white hover:text-gray-300 text-5xl p-4"
                onClick={(e) => { e.stopPropagation(); onNext(); }}
            >
                &#8250;
            </button>
            
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <p className="text-lg font-semibold">{currentImage.title}</p>
                <p className="text-sm text-gray-400">{currentIndex + 1} / {images.length}</p>
            </div>
        </div>
    );
};

export default Lightbox;
