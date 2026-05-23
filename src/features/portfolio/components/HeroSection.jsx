const HeroSection = () => {
    return (
        <section id="hero" className="grid-bg">
            <div className="hero-inner">
                <div>
                    <p className="hero-tag">BSIT &mdash; ARCHITECTURAL DRAFTING TECHNOLOGY</p>
                    <h1 className="hero-name">
                        JEFFERSON<br />
                        <span className="hollow">ALAH TOONG</span>
                    </h1>
                    <p className="hero-subtitle">Architectural Drafter &middot; CAD Specialist &middot; Design Enthusiast</p>
                    <p className="hero-desc">
                        Creating precise technical drawings, spatial designs, and architectural
                        visualizations. Transforming concepts into detailed working drawings
                        with accuracy and intent.
                    </p>
                    <div className="hero-btns">
                        <a href="#portfolio" className="btn-primary">View Portfolio</a>
                        <a href="#" className="btn-outline">Download CV</a>
                    </div>
                </div>
                <div>
                    <div className="hero-photo-card">
                        <div className="photo-icon">&#128100;</div>
                        <p className="photo-hint">
                            YOUR PHOTO HERE<br />
                            <span>Replace with your image</span>
                        </p>
                    </div>
                    <p className="hero-elev">ELEV. FRONT &middot; A-01</p>
                </div>
            </div>
            <div className="scroll-hint">
                <span>SCROLL</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default HeroSection;
