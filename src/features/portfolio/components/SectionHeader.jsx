const SectionHeader = ({ number, title }) => {
    return (
        <div className="section-header fade-in">
            <span className="sec-num">SEC. {number}</span>
            <h2 className="sec-title">{title}</h2>
            <div className="sec-rule"></div>
        </div>
    );
};

export default SectionHeader;
