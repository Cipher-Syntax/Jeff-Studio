import SectionHeader from './SectionHeader';

const FeaturedProjectSection = () => {
    return (
        <section id="project" className="grid-bg py-24 px-[6%] border-t border-slate-200 dark:border-[#1c4a6a] transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto w-full">
                <SectionHeader number="04" title="FEATURED PROJECT" />

                <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-16 items-center">
                    <div className="aspect-[16/10] bg-white/80 dark:bg-[#0d2240]/80 backdrop-blur-sm border border-slate-200 dark:border-[#2a6a90] relative overflow-hidden flex flex-col items-center justify-center gap-2 font-mono text-[11px] text-slate-400 dark:text-[#4a7f9a] fade-in transition-colors duration-300">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                            <rect x="10" y="36" width="60" height="38" stroke="#2d6a9f" strokeWidth="1" />
                            <polygon points="5,36 40,10 75,36" stroke="#2d6a9f" strokeWidth="1" fill="none" />
                            <rect x="30" y="50" width="20" height="24" stroke="#5eafd4" strokeWidth="1" />
                            <rect x="14" y="42" width="14" height="10" stroke="#5eafd4" strokeWidth="0.75" />
                            <rect x="52" y="42" width="14" height="10" stroke="#5eafd4" strokeWidth="0.75" />
                            <line x1="5" y1="74" x2="75" y2="74" stroke="#1e4a6a" strokeWidth="1" />
                        </svg>
                        <span>PROJECT RENDERING / PHOTO</span>
                        <span className="text-[9px] mt-0.5 text-slate-400 dark:text-[#4a7f9a]">Replace with your actual render</span>
                    </div>

                    <div className="fade-in delay-100">
                        <p className="font-mono text-[10px] tracking-[3px] text-[#3d8ab5] uppercase mb-2.5">
                            Capstone Design Project
                        </p>
                        <h3 className="font-sans font-bold text-[32px] sm:text-[40px] leading-[1.05] text-slate-900 dark:text-[#d8edf8] mb-3.5">
                            RESIDENTIAL DESIGN PROJECT
                        </h3>
                        <p className="text-[14px] font-light text-slate-600 dark:text-[#82b8d4] leading-[1.8] mb-7">
                            A complete set of architectural working drawings for a 3-bedroom, 2-storey
                            single-family residential dwelling. Covers all phases from conceptual layout
                            to detailed construction drawings ready for building permit application.
                        </p>

                        <div className="grid grid-cols-2 gap-2.5 mb-7">
                            {[
                                { lbl: 'Building Type', val: 'Residential \u2014 Single Family' },
                                { lbl: 'Storeys', val: '2-storey' },
                                { lbl: 'Floor Area', val: '~180 sqm' },
                                { lbl: 'Drawing Set', val: '8 plates complete' },
                                { lbl: 'Software Used', val: 'AutoCAD + SketchUp' },
                                { lbl: 'Scale', val: '1:100 / 1:50' },
                            ].map((spec) => (
                                <div key={spec.lbl} className="bg-white/90 dark:bg-[#0d2240]/90 backdrop-blur-sm border border-slate-200 dark:border-[#1c4a6a] p-3 px-4 transition-colors duration-300">
                                    <p className="font-mono text-[9px] tracking-[1.5px] text-slate-500 dark:text-[#4a7f9a] uppercase mb-1">
                                        {spec.lbl}
                                    </p>
                                    <p className="text-[13px] text-slate-800 dark:text-[#d8edf8] font-medium">
                                        {spec.val}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <a href="#portfolio" className="font-mono text-[11px] tracking-[1.5px] bg-[#5eafd4] text-white dark:text-[#07111f] px-[26px] py-[13px] uppercase hover:bg-[#88c8e8] transition-colors inline-block">
                            View Drawing Set
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjectSection;