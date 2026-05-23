import { useMemo, useState } from 'react';
import SectionHeader from './SectionHeader';
import GalleryItem from './GalleryItem';

const filters = [
    { value: 'all', label: 'All Plates' },
    { value: 'freehand', label: 'Freehand' },
    { value: 'cad', label: 'CAD Drawings' },
    { value: '3d', label: '3D Renders' },
    { value: 'plans', label: 'Floor Plans' },
    { value: 'elevations', label: 'Elevations' },
];

const plates = [
    { id: 'plate-01', title: 'Orthographic Projection', tag: 'freehand', label: 'Plate 01' },
    { id: 'plate-02', title: <>Floor Plan &mdash; Ground Floor</>, tag: 'plans', label: 'Plate 02' },
    { id: 'plate-03', title: 'Front & Side Elevation', tag: 'elevations', label: 'Plate 03' },
    { id: 'plate-04', title: 'AutoCAD Floor Plan', tag: 'cad', label: 'Plate 04' },
    { id: 'plate-05', title: 'Isometric Drawing', tag: 'freehand', label: 'Plate 05' },
    { id: 'plate-06', title: 'Building Section', tag: 'cad', label: 'Plate 06' },
    { id: 'plate-07', title: '3D Exterior Render', tag: '3d', label: 'Plate 07' },
    { id: 'plate-08', title: 'Site Development Plan', tag: 'plans', label: 'Plate 08' },
    { id: 'plate-09', title: '3D Interior Render', tag: '3d', label: 'Plate 09' },
];

const PortfolioSection = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredPlates = useMemo(() => {
        if (activeFilter === 'all') return plates;
        return plates.filter((plate) => plate.tag === activeFilter);
    }, [activeFilter]);

    return (
        <section id="portfolio">
            <div className="section-inner">
                <SectionHeader number="03" title="PORTFOLIO" />
                <div className="filter-row fade-in">
                    {filters.map((filter) => (
                        <button
                            type="button"
                            key={filter.value}
                            className={`filter-btn${activeFilter === filter.value ? ' active' : ''}`}
                            onClick={() => setActiveFilter(filter.value)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
                <div className="gallery-grid" id="gallery">
                    {filteredPlates.map((plate, index) => (
                        <GalleryItem key={plate.id} item={plate} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
