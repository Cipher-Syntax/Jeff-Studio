import SectionHeader from './SectionHeader';

const skills = [
    {
        tag: 'CORE',
        title: 'Manual Drafting',
        items: [
            'Freehand sketching',
            'Orthographic projection',
            'Perspective drawing',
            'Isometric & oblique',
            'Blueprint reading',
            'Technical lettering',
        ],
    },
    {
        tag: 'CAD',
        title: 'CAD Software',
        items: [
            'AutoCAD 2D / 3D',
            'SketchUp Pro',
            'Revit (basic)',
            'Lumion rendering',
            'V-Ray for SketchUp',
            'ArchiCAD (intro)',
        ],
    },
    {
        tag: 'DESIGN',
        title: 'Design Skills',
        items: [
            'Floor plan design',
            'Elevation drawings',
            'Section drawings',
            'Site development plan',
            'Detail drawings',
            'Roof framing plan',
        ],
    },
    {
        tag: 'TOOLS',
        title: 'Other Tools',
        items: [
            'Adobe Photoshop',
            'Microsoft Office',
            'Scale model making',
            'Physical plate layout',
            'Cost estimation (basic)',
            'Site surveying (basic)',
        ],
    },
];

const SkillsSection = () => {
    return (
        <section id="skills" className="grid-bg py-24 px-[6%] border-t border-slate-200 dark:border-[#1c4a6a] transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto w-full">
                <SectionHeader number="02" title="SKILLS & TOOLS" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => {
                        // Dynamically map old d1/d2 delays to Tailwind delay utilities
                        const delayClass = index === 0 ? '' : `delay-[${index * 100}ms]`;

                        return (
                            <div key={skill.title} className={`bg-white/80 dark:bg-[#07111f]/80 backdrop-blur-sm border border-slate-200 dark:border-[#1c4a6a] p-8 fade-in transition-colors duration-300 ${delayClass}`}>
                                <p className="font-mono text-[10px] tracking-[2px] text-[#5eafd4] mb-4 uppercase">
                                    &mdash; {skill.tag}
                                </p>
                                <h3 className="font-sans text-[18px] font-bold text-slate-900 dark:text-[#d8edf8] mb-5">
                                    {skill.title}
                                </h3>
                                <ul className="flex flex-col gap-3 m-0 p-0 list-none">
                                    {skill.items.map((item) => (
                                        <li key={item} className="relative pl-4 text-[13px] text-slate-600 dark:text-[#82b8d4] before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:bg-[#3d8ab5] before:rounded-full">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;