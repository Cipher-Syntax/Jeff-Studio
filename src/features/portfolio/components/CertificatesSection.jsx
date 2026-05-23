import SectionHeader from './SectionHeader';

const certificates = [
    {
        id: 'autocad-essentials',
        icon: <span aria-hidden="true">&#x1F3C5;</span>,
        name: 'AutoCAD Essentials Training',
        who: <>Autodesk &middot; 2024</>,
        type: 'Completion Certificate',
    },
    {
        id: 'drafting-seminar',
        icon: <span aria-hidden="true">&#x1F396;</span>,
        name: 'Architectural Drafting Seminar',
        who: <>[University] &middot; 2023</>,
        type: 'Attendance & Participation',
    },
    {
        id: 'best-plate',
        icon: <span aria-hidden="true">&#x1F3C6;</span>,
        name: <>Best Plate &mdash; Drafting Competition</>,
        who: <>Regional Level &middot; 2023</>,
        type: '1st Place Award',
    },
    {
        id: 'sketchup',
        icon: <span aria-hidden="true">&#x1F4DC;</span>,
        name: 'SketchUp Fundamentals',
        who: <>Trimble &middot; 2024</>,
        type: 'Online Certification',
    },
];

const CertificatesSection = () => {
    return (
        <section id="certificates" className="py-24 px-[6%] bg-white dark:bg-[#07111f] border-t border-slate-200 dark:border-[#1c4a6a] transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto w-full">
                <SectionHeader number="05" title="CERTIFICATES" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                    {certificates.map((cert, index) => {
                        const delayClass = index === 0 ? '' : `delay-[${index * 100}ms]`;

                        return (
                            <div key={cert.id} className={`bg-slate-50 dark:bg-[#0d2240] border border-slate-200 dark:border-[#1c4a6a] p-6 transition-colors duration-300 hover:border-[#3d8ab5] dark:hover:border-[#3d8ab5] fade-in ${delayClass}`}>
                                <div className="text-[22px] mb-3">{cert.icon}</div>
                                <p className="font-sans font-semibold text-[17px] text-slate-900 dark:text-[#d8edf8] mb-1.5 leading-[1.2]">{cert.name}</p>
                                <p className="font-mono text-[9px] tracking-[1px] text-[#3d8ab5] mb-1">{cert.who}</p>
                                <p className="font-mono text-[9px] tracking-[1px] text-slate-500 dark:text-[#4a7f9a]">{cert.type}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;