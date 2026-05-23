import SectionHeader from './SectionHeader';

const stats = [
    { value: '42', label: 'Plates Done', delay: 'd1' },
    { value: '6', label: 'Projects', delay: 'd2' },
    { value: '3', label: 'Awards', delay: 'd1' },
    { value: '4', label: 'Certifications', delay: 'd2' },
];

const infoRows = [
    { label: 'Full Name', value: 'Juan Miguel Dela Cruz' },
    { label: 'Program', value: <>BSIT &mdash; Architectural Drafting Technology</> },
    { label: 'University', value: '[University Name], Philippines' },
    { label: 'Year Level', value: <>3rd Year &middot; Batch 2026</> },
    { label: 'Specialization', value: 'Residential & Commercial Drafting' },
    { label: 'Software', value: <>AutoCAD &middot; SketchUp &middot; Revit &middot; Lumion</> },
    { label: 'Location', value: 'Zamboanga City, Philippines' },
    { label: 'Status', value: 'Open for Internship / OJT', highlight: true },
];

const AboutSection = () => {
    return (
        <section id="about">
            <div className="section-inner">
                <SectionHeader number="01" title="ABOUT ME" />
                <div className="about-grid">
                    <div>
                        <div className="about-text fade-in">
                            <p>
                                Hi, I'm <strong>Juan Dela Cruz</strong> &mdash; a BSIT student majoring in Architectural
                                Drafting Technology at [University Name]. I specialize in translating architectural
                                concepts into precise, well-detailed technical drawings.
                            </p>
                            <p>
                                My training covers everything from freehand sketching and orthographic projection
                                to <strong>AutoCAD</strong> drafting, 3D modeling in <strong>SketchUp</strong>, and
                                architectural visualization. I take pride in the cleanliness and accuracy of every
                                plate I produce.
                            </p>
                            <p>
                                I'm driven by a passion for <strong>design and construction</strong>, and I aspire
                                to work as an architectural drafter and eventually become a licensed architect.
                            </p>
                        </div>
                        <div className="stat-row">
                            {stats.map((stat) => (
                                <div key={`${stat.label}-${stat.value}`} className={`stat-card fade-in ${stat.delay}`.trim()}>
                                    <div className="stat-num">{stat.value}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="info-table fade-in">
                        {infoRows.map((row) => (
                            <div key={row.label} className="info-row">
                                <span className="info-lbl">{row.label}</span>
                                <span className={`info-val${row.highlight ? ' open' : ''}`}>{row.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
