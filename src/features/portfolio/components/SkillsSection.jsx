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
        <section id="skills" className="grid-bg">
            <div className="section-inner">
                <SectionHeader number="02" title="SKILLS & TOOLS" />
                <div className="skills-grid">
                    {skills.map((skill, index) => {
                        const delayClass = index === 0 ? '' : ` d${index}`;

                        return (
                            <div key={skill.title} className={`skill-card fade-in${delayClass}`}>
                                <p className="skill-tag">&mdash; {skill.tag}</p>
                                <h3 className="skill-title">{skill.title}</h3>
                                <ul className="skill-list">
                                    {skill.items.map((item) => (
                                        <li key={item}>{item}</li>
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
