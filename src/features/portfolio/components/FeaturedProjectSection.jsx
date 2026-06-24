import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../../data/projects';

const FeaturedProjectSection = () => {
    // Select first 3 items for featured
    const featuredProjects = projectsData.slice(0, 3);

    return (
        <section className="py-20 bg-gray-950 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Selected Works</h2>
                        <p className="text-gray-400 max-w-2xl">A curated selection of my latest 3D renders and architectural plans.</p>
                    </div>
                    <Link 
                        to="/projects" 
                        className="hidden md:inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                    >
                        View Full Portfolio
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredProjects.map(project => (
                        <div key={project.id} className="group relative overflow-hidden bg-gray-800">
                            <div className="aspect-[4/3] w-full">
                                <img 
                                    src={project.image} 
                                    alt={project.alt} 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-2 block">{project.category}</span>
                                <h3 className="text-2xl font-bold">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 text-center md:hidden">
                    <Link 
                        to="/projects" 
                        className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                    >
                        View Full Portfolio
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjectSection;
