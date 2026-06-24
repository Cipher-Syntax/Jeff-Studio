import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../../data/projects';
import Lightbox from '../components/Lightbox';

const ProjectsPage = () => {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = (index) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);
    const showNext = () => setLightboxIndex((prev) => (prev + 1) % projectsData.length);
    const showPrev = () => setLightboxIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 mt-5 flex flex-col items-start gap-4">
                    <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium">
                        <span>&#8592;</span> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Portfolio</h1>
                </div>

                {/* CSS Columns approach for Masonry */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {projectsData.map((project, index) => (
                        <div
                            key={project.id}
                            className="break-inside-avoid relative group cursor-pointer overflow-hidden bg-gray-800"
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={project.image}
                                alt={project.alt}
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                    <p className="text-sm text-gray-300">{project.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {lightboxIndex !== null && (
                <Lightbox
                    images={projectsData}
                    currentIndex={lightboxIndex}
                    onClose={closeLightbox}
                    onNext={showNext}
                    onPrev={showPrev}
                />
            )}
        </div>
    );
};

export default ProjectsPage;