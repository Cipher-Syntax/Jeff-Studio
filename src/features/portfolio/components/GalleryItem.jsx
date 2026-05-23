const GalleryItem = ({ item }) => {
    return (
        <div className="relative overflow-hidden cursor-pointer aspect-[4/3] bg-slate-50 dark:bg-[#0d2240] border border-slate-200 dark:border-[#1c4a6a] transition-colors duration-200 hover:border-[#3d8ab5] dark:hover:border-[#3d8ab5] group fade-in">

            {/* The Actual Image replacing the SVGs */}
            {item.image ? (
                <img
                    src={item.image}
                    alt={item.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            ) : (
                /* Fallback if an image isn't provided yet */
                <div className="absolute inset-0 flex items-center justify-center text-slate-300 dark:text-[#1c4a6a] font-mono text-[10px]">
                    NO IMAGE
                </div>
            )}

            {/* Hover Overlay with Text Details */}
            <div className="absolute inset-0 bg-white/95 dark:bg-[#07111f]/95 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm">
                <p className="font-mono text-[9px] tracking-[2px] text-[#3d8ab5] uppercase mb-1.5">{item.tag}</p>
                <p className="font-sans text-[17px] font-semibold text-slate-900 dark:text-[#d8edf8] tracking-[0.5px] text-center px-4">{item.title}</p>
                <p className="font-mono text-[9px] text-slate-500 dark:text-[#4a7f9a] mt-2 tracking-[1px]">{item.label}</p>
            </div>
        </div>
    );
};

export default GalleryItem;