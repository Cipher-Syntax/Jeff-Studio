import SectionHeader from './SectionHeader';

const FeaturedProjectSection = () => {
    return (
        <section id="project" className="grid-bg">
            <div className="section-inner">
                <SectionHeader number="04" title="FEATURED PROJECT" />
                <div className="project-layout">
                    <div className="project-img fade-in">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                            <rect x="10" y="36" width="60" height="38" stroke="#2d6a9f" strokeWidth="1" />
                            <polygon points="5,36 40,10 75,36" stroke="#2d6a9f" strokeWidth="1" fill="none" />
                            <rect x="30" y="50" width="20" height="24" stroke="#5eafd4" strokeWidth="1" />
                            <rect x="14" y="42" width="14" height="10" stroke="#5eafd4" strokeWidth="0.75" />
                            <rect x="52" y="42" width="14" height="10" stroke="#5eafd4" strokeWidth="0.75" />
                            <line x1="5" y1="74" x2="75" y2="74" stroke="#1e4a6a" strokeWidth="1" />
                        </svg>
                        <span>PROJECT RENDERING / PHOTO</span>
                        <span className="project-note">Replace with your actual render</span>
                    </div>
                    <div className="fade-in d1">
                        <p className="project-tag">Capstone Design Project</p>
                        <h3 className="project-title">RESIDENTIAL DESIGN PROJECT</h3>
                        <p className="project-desc">
                            A complete set of architectural working drawings for a 3-bedroom, 2-storey
                            single-family residential dwelling. Covers all phases from conceptual layout
                            to detailed construction drawings ready for building permit application.
                        </p>
                        <div className="specs-grid">
                            <div className="spec-item">
                                <p className="spec-lbl">Building Type</p>
                                <p className="spec-val">Residential &mdash; Single Family</p>
                            </div>
                            <div className="spec-item">
                                <p className="spec-lbl">Storeys</p>
                                <p className="spec-val">2-storey</p>
                            </div>
                            <div className="spec-item">
                                <p className="spec-lbl">Floor Area</p>
                                <p className="spec-val">~180 sqm</p>
                            </div>
                            <div className="spec-item">
                                <p className="spec-lbl">Drawing Set</p>
                                <p className="spec-val">8 plates complete</p>
                            </div>
                            <div className="spec-item">
                                <p className="spec-lbl">Software Used</p>
                                <p className="spec-val">AutoCAD + SketchUp</p>
                            </div>
                            <div className="spec-item">
                                <p className="spec-lbl">Scale</p>
                                <p className="spec-val">1:100 / 1:50</p>
                            </div>
                        </div>
                        <a href="#portfolio" className="btn-primary">View Drawing Set</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjectSection;
