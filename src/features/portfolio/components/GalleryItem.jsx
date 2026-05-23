// src/features/portfolio/components/GalleryItem.jsx
import { useState } from 'react';

const GalleryItem = ({ item }) => {
    // Track flip state for touch devices (mobile)
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            // [perspective:1000px] gives the 3D depth effect when rotating
            className="relative cursor-pointer aspect-[4/3] group [perspective:1000px] fade-in"
            onClick={() => setIsFlipped(!isFlipped)}
            onMouseLeave={() => setIsFlipped(false)} // Reset if user clicks on desktop then moves mouse away
        >
            {/* Inner container holding both faces. 
              Flips if tapped (isFlipped state) OR hovered on large screens (lg:group-hover)
            */}
            <div
                className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''
                    } lg:group-hover:[transform:rotateY(180deg)]`}
            >
                {/* --- FRONT FACE (Image) --- */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-slate-50 dark:bg-[#0d2240] border border-slate-200 dark:border-[#1c4a6a] overflow-hidden transition-colors duration-200">
                    {item.image ? (
                        <img
                            src={item.image}
                            alt={item.label}
                            // Re-added the subtle zoom effect for the image itself
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-300 dark:text-[#1c4a6a] font-mono text-[10px]">
                            NO IMAGE
                        </div>
                    )}
                </div>

                {/* --- BACK FACE (Details) --- */}
                <div className="absolute inset-0 w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] bg-white dark:bg-[#07111f] border border-[#3d8ab5] flex flex-col items-center justify-center transition-colors duration-200">
                    <p className="font-mono text-[9px] tracking-[2px] text-[#3d8ab5] uppercase mb-1.5">{item.tag}</p>
                    <p className="font-sans text-[17px] font-semibold text-slate-900 dark:text-[#d8edf8] tracking-[0.5px] text-center px-4">{item.title}</p>
                    <p className="font-mono text-[9px] text-slate-500 dark:text-[#4a7f9a] mt-2 tracking-[1px]">{item.label}</p>
                </div>
            </div>
        </div>
    );
};

export default GalleryItem;