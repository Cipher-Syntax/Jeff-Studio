const NavBar = () => {
    return (
        <nav>
            <span className="nav-logo">[ <span>JEFF</span> &middot; STUDIO ]</span>
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <a href="#contact" className="nav-cta">Hire Me</a>
        </nav>
    );
};

export default NavBar;