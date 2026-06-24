import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../../data/projects';
import SectionHeader from './SectionHeader';

const FeaturedProjectSection = () => {
    // Select first 3 items for featured
    const featuredProjects = projectsData.slice(0, 3);

    return (
        <section className="dark py-24 px-[6%] bg-[#07111f] border-t border-[#1c4a6a] transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto w-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 text-white">
                    <div className="flex-1 w-full">
                        <SectionHeader number="03" title="PORTFOLIO" />
                        <p className="text-[#82b8d4] text-[15px] max-w-[480px] mt-[-30px]">A curated selection of my latest 3D renders and architectural plans.</p>
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
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
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
