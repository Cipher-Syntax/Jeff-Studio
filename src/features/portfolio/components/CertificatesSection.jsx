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
        <section id="certificates">
            <div className="section-inner">
                <SectionHeader number="05" title="CERTIFICATES" />
                <div className="certs-grid">
                    {certificates.map((cert, index) => {
                        const delayClass = index === 0 ? '' : ` d${index}`;

                        return (
                            <div key={cert.id} className={`cert-card fade-in${delayClass}`}>
                                <div className="cert-icon">{cert.icon}</div>
                                <p className="cert-name">{cert.name}</p>
                                <p className="cert-who">{cert.who}</p>
                                <p className="cert-type">{cert.type}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;
