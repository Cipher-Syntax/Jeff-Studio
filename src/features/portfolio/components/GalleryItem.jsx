const renderDrawing = (tag, index) => {
    switch (tag) {
        case 'freehand':
            return (
                <>
                    <rect x="12" y="10" width="76" height="80" fill="none" stroke="#1e4a6a" strokeWidth="0.6" />
                    <line x1="12" y1="35" x2="88" y2="35" stroke="#2d6a9f" strokeWidth="0.5" />
                    <line x1="50" y1="10" x2="50" y2="90" stroke="#2d6a9f" strokeWidth="0.5" />
                    <rect x="16" y="38" width="30" height="30" fill="none" stroke="#5eafd4" strokeWidth="1" />
                    <rect x="54" y="38" width="30" height="30" fill="none" stroke="#5eafd4" strokeWidth="1" />
                    <line x1="24" y1="68" x2="24" y2="85" stroke="#3d8ab5" strokeWidth="0.6" />
                    <line x1="76" y1="68" x2="76" y2="85" stroke="#3d8ab5" strokeWidth="0.6" />
                    <text x="50" y="96" textAnchor="middle" fontSize="6" fill="#4a7f9a" fontFamily="monospace">
                        ORTHOGRAPHIC &mdash; PLATE {index}
                    </text>
                </>
            );
        case 'plans':
            return (
                <>
                    <rect x="10" y="10" width="80" height="80" fill="none" stroke="#2d6a9f" strokeWidth="0.8" />
                    <line x1="10" y1="10" x2="10" y2="90" stroke="#2d6a9f" strokeWidth="1.5" />
                    <line x1="10" y1="90" x2="90" y2="90" stroke="#2d6a9f" strokeWidth="1.5" />
                    <line x1="90" y1="10" x2="90" y2="90" stroke="#2d6a9f" strokeWidth="1.5" />
                    <line x1="10" y1="10" x2="90" y2="10" stroke="#2d6a9f" strokeWidth="1.5" />
                    <line x1="35" y1="10" x2="35" y2="90" stroke="#2d6a9f" strokeWidth="0.8" />
                    <line x1="65" y1="10" x2="65" y2="60" stroke="#2d6a9f" strokeWidth="0.8" />
                    <line x1="10" y1="55" x2="90" y2="55" stroke="#2d6a9f" strokeWidth="0.8" />
                    <rect x="38" y="60" width="20" height="30" fill="none" stroke="#5eafd4" strokeWidth="0.8" />
                    <rect x="14" y="14" width="16" height="14" fill="none" stroke="#5eafd4" strokeWidth="0.6" />
                    <path d="M55 20 A8 8 0 0 1 65 20" fill="none" stroke="#5eafd4" strokeWidth="0.6" />
                    <text x="50" y="97" textAnchor="middle" fontSize="6" fill="#4a7f9a" fontFamily="monospace">
                        FLOOR PLAN &mdash; PLATE {index}
                    </text>
                </>
            );
        case 'elevations':
            return (
                <>
                    <line x1="8" y1="82" x2="92" y2="82" stroke="#2d6a9f" strokeWidth="1.2" />
                    <rect x="18" y="48" width="64" height="34" fill="none" stroke="#2d6a9f" strokeWidth="0.8" />
                    <polygon points="14,48 50,18 86,48" fill="none" stroke="#2d6a9f" strokeWidth="0.8" />
                    <rect x="26" y="58" width="14" height="24" fill="none" stroke="#5eafd4" strokeWidth="0.8" />
                    <rect x="58" y="52" width="16" height="13" fill="none" stroke="#5eafd4" strokeWidth="0.8" />
                    <line x1="8" y1="82" x2="8" y2="89" stroke="#3d8ab5" strokeWidth="0.5" />
                    <line x1="92" y1="82" x2="92" y2="89" stroke="#3d8ab5" strokeWidth="0.5" />
                    <line x1="8" y1="87" x2="92" y2="87" stroke="#3d8ab5" strokeWidth="0.5" />
                    <text x="50" y="97" textAnchor="middle" fontSize="6" fill="#4a7f9a" fontFamily="monospace">
                        ELEVATION &mdash; PLATE {index}
                    </text>
                </>
            );
        case 'cad':
            return (
                <>
                    <rect x="8" y="8" width="84" height="84" fill="none" stroke="#1c4a6a" strokeWidth="0.4" strokeDasharray="3 2" />
                    <rect x="14" y="14" width="72" height="72" fill="none" stroke="#2d6a9f" strokeWidth="0.8" />
                    <line x1="8" y1="50" x2="92" y2="50" stroke="#1c4a6a" strokeWidth="0.4" strokeDasharray="4 3" />
                    <line x1="50" y1="8" x2="50" y2="92" stroke="#1c4a6a" strokeWidth="0.4" strokeDasharray="4 3" />
                    <rect x="18" y="18" width="28" height="28" fill="none" stroke="#5eafd4" strokeWidth="0.8" />
                    <rect x="54" y="18" width="28" height="28" fill="none" stroke="#5eafd4" strokeWidth="0.8" />
                    <rect x="30" y="54" width="40" height="28" fill="none" stroke="#5eafd4" strokeWidth="0.8" />
                    <line x1="8" y1="86" x2="14" y2="86" stroke="#3d8ab5" strokeWidth="0.5" />
                    <text x="50" y="97" textAnchor="middle" fontSize="6" fill="#4a7f9a" fontFamily="monospace">
                        AUTOCAD &mdash; PLATE {index}
                    </text>
                </>
            );
        case '3d':
            return (
                <>
                    <polygon points="50,12 82,34 82,72 50,88 18,72 18,34" fill="none" stroke="#2d6a9f" strokeWidth="0.8" />
                    <line x1="50" y1="12" x2="50" y2="46" stroke="#5eafd4" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.6" />
                    <line x1="82" y1="34" x2="50" y2="46" stroke="#5eafd4" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.6" />
                    <line x1="18" y1="34" x2="50" y2="46" stroke="#5eafd4" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.6" />
                    <polygon points="50,12 82,34 50,46 18,34" fill="rgba(30,74,110,0.3)" stroke="#5eafd4" strokeWidth="0.6" />
                    <polygon points="82,34 82,72 50,88 50,46" fill="rgba(13,36,68,0.4)" stroke="#5eafd4" strokeWidth="0.6" />
                    <polygon points="18,34 18,72 50,88 50,46" fill="rgba(10,28,52,0.4)" stroke="#5eafd4" strokeWidth="0.6" />
                    <text x="50" y="97" textAnchor="middle" fontSize="6" fill="#4a7f9a" fontFamily="monospace">
                        3D RENDER &mdash; PLATE {index}
                    </text>
                </>
            );
        default:
            return null;
    }
};

const GalleryItem = ({ item, index }) => {
    const patternId = `gp-${item.tag}-${index}`;

    return (
        <div className="gallery-item">
            <svg className="gallery-svg" viewBox="0 0 100 100" aria-hidden="true">
                {renderDrawing(item.tag, index + 1)}
            </svg>
            <svg className="gallery-pattern" aria-hidden="true">
                <defs>
                    <pattern id={patternId} width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M10 0L0 0 0 10" fill="none" stroke="#5eafd4" strokeWidth="0.3" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#${patternId})`} />
            </svg>
            <div className="g-overlay">
                <p className="g-tag">{item.tag}</p>
                <p className="g-title">{item.title}</p>
                <p className="g-plate">{item.label}</p>
            </div>
        </div>
    );
};

export default GalleryItem;
