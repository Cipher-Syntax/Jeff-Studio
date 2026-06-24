import React from 'react';
import { meImage } from '../../../data/projects';

const AboutSection = () => {
    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 transform -rotate-3"></div>
                        <img 
                            src={meImage} 
                            alt="Jeff" 
                            className="relative w-80 h-auto shadow-2xl object-cover border border-gray-700"
                        />
                    </div>
                </div>
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-4xl font-bold">About Me</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        I am a 3D Artist and Architectural Designer dedicated to bringing concepts to life. 
                        With a strong background in spatial design and visualization, I create compelling 
                        orthographics, plans, and 3D renders that tell a story.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
