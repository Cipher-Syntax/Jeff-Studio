import SectionHeader from './SectionHeader';

const stats = [
    { value: '42', label: 'Plates Done', delay: 'delay-100' },
    { value: '6', label: 'Projects', delay: 'delay-200' },
    { value: '3', label: 'Awards', delay: 'delay-100' },
    { value: '4', label: 'Certifications', delay: 'delay-200' },
];

const infoRows = [
    { label: 'Full Name', value: 'Jefferson A. Toong' },
    { label: 'Program', value: <>BSIT &mdash; Architectural Drafting Technology</> },
    { label: 'University', value: 'Zamboanga Peninsula Polytechnic Universtiy, Philippines' },
    { label: 'Graduated', value: 'Batch 2026' },
    { label: 'Specialization', value: 'Residential & Commercial Drafting' },
    { label: 'Software', value: <>AutoCAD &middot; SketchUp &middot; Revit &middot; Lumion</> },
    { label: 'Location', value: 'Zamboanga City, Philippines' },
    { label: 'Status', value: 'Available for Work', highlight: true },
];

const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-[6%] bg-white dark:bg-[#07111f] transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto w-full">
                <SectionHeader number="01" title="ABOUT ME" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[100px]">
                    <div>
                        <div className="text-[15px] leading-[1.8] text-slate-600 dark:text-[#82b8d4] font-light mb-10 space-y-5 fade-in">
                            <p>
                                Hi, I'm <strong className="font-semibold text-slate-900 dark:text-[#d8edf8]">Jefferson A. Toong</strong> &mdash; a BSIT graduate majoring in Architectural
                                Drafting Technology at Zamboanga Peninsula Polytechnic Universtiy, Philippines. I specialize in translating architectural
                                concepts into precise, well-detailed technical drawings.
                            </p>
                            <p>
                                My training covers everything from freehand sketching and orthographic projection
                                to <strong className="font-semibold text-slate-900 dark:text-[#d8edf8]">AutoCAD</strong> drafting, 3D modeling in <strong className="font-semibold text-slate-900 dark:text-[#d8edf8]">SketchUp</strong>, and
                                architectural visualization. I take pride in the cleanliness and accuracy of every
                                plate I produce.
                            </p>
                            <p>
                                I'm driven by a passion for <strong className="font-semibold text-slate-900 dark:text-[#d8edf8]">design and construction</strong>, and I aspire
                                to work as an architectural drafter and eventually become a licensed architect.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {stats.map((stat) => (
                                <div key={`${stat.label}-${stat.value}`} className={`bg-slate-50 dark:bg-[#0d2240] border border-slate-200 dark:border-[#1c4a6a] p-5 text-center fade-in transition-colors duration-300 ${stat.delay}`}>
                                    <div className="font-sans font-bold text-3xl text-slate-900 dark:text-[#d8edf8] mb-1">{stat.value}</div>
                                    <div className="font-mono text-[9px] tracking-[1px] text-slate-500 dark:text-[#4a7f9a] uppercase">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col border-t border-slate-200 dark:border-[#1c4a6a] fade-in">
                        {infoRows.map((row) => (
                            <div key={row.label} className="flex flex-col sm:flex-row py-4 border-b border-slate-200 dark:border-[#1c4a6a] gap-2 sm:gap-0 transition-colors duration-300">
                                <span className="w-[140px] font-mono text-[11px] tracking-[1px] text-slate-500 dark:text-[#4a7f9a] uppercase flex-shrink-0 pt-1">
                                    {row.label}
                                </span>
                                <span className={`text-[14px] leading-[1.6] ${row.highlight ? 'text-[#5eafd4] font-medium' : 'text-slate-700 dark:text-[#b0d4e8]'}`}>
                                    {row.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;