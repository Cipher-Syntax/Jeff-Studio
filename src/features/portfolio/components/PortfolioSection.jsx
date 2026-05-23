import { useMemo, useState } from 'react';
import SectionHeader from './SectionHeader';
import GalleryItem from './GalleryItem';

// 1. Import your actual images here
// import plate1 from '../../../assets/images/plate-1.jpg';
// import plate2 from '../../../assets/images/plate-2.jpg';
// // Import the rest...

const filters = [
    { value: 'all', label: 'All Plates' },
    { value: 'freehand', label: 'Freehand' },
    { value: 'cad', label: 'CAD Drawings' },
    { value: '3d', label: '3D Renders' },
    { value: 'plans', label: 'Floor Plans' },
    { value: 'elevations', label: 'Elevations' },
];

// 2. Add the 'image' property to each object
const plates = [
    { id: 'plate-01', title: 'Orthographic Projection', tag: 'freehand', label: 'Plate 01', image: null },
    { id: 'plate-02', title: <>Floor Plan &mdash; Ground Floor</>, tag: 'plans', label: 'Plate 02', image: null },
    // Add image property to the rest...
    { id: 'plate-03', title: 'Front & Side Elevation', tag: 'elevations', label: 'Plate 03', image: null },
];

const PortfolioSection = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredPlates = useMemo(() => {
        if (activeFilter === 'all') return plates;
        return plates.filter((plate) => plate.tag === activeFilter);
    }, [activeFilter]);

    return (
        <section id="portfolio" className="py-24 px-[6%] bg-white dark:bg-[#07111f] border-t border-slate-200 dark:border-[#1c4a6a] transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto w-full">
                <SectionHeader number="03" title="PORTFOLIO" />

                <div className="flex flex-wrap gap-2 mb-9 fade-in">
                    {filters.map((filter) => (
                        <button
                            type="button"
                            key={filter.value}
                            className={`font-mono text-[9px] tracking-[2px] uppercase px-4 py-2 border cursor-pointer transition-all duration-200 ${activeFilter === filter.value
                                ? 'bg-[#3d8ab5] border-[#3d8ab5] text-white dark:text-[#07111f]'
                                : 'bg-transparent border-slate-200 dark:border-[#1c4a6a] text-slate-600 dark:text-[#82b8d4] hover:border-[#3d8ab5] hover:text-[#5eafd4] dark:hover:border-[#3d8ab5] dark:hover:text-[#5eafd4]'
                                }`}
                            onClick={() => setActiveFilter(filter.value)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5" id="gallery">
                    {filteredPlates.map((plate) => (
                        <GalleryItem key={plate.id} item={plate} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;