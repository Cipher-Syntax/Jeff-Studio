import { useTheme } from '../../context/ThemeContext';

const NavBar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-14 px-[6%] bg-white/90 dark:bg-[#07111f]/90 backdrop-blur-md border-b border-gray-200 dark:border-[#1c4a6a] transition-colors duration-300">
            <span className="font-mono text-[13px] tracking-[2px] text-[#5eafd4]">
                [ <span className="text-gray-500 dark:text-[#4a7f9a]">JEFF</span> &middot; STUDIO ]
            </span>

            <ul className="hidden md:flex gap-7 list-none">
                {['About', 'Skills', 'Portfolio', 'Project', 'Contact'].map((item) => (
                    <li key={item}>
                        <a
                            href={`#${item.toLowerCase()}`}
                            className="font-mono text-[10px] tracking-[2px] text-gray-500 dark:text-[#82b8d4] uppercase hover:text-[#5eafd4] transition-colors"
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="flex items-center gap-6">
                {/* Theme Toggle Button added to Navbar */}
                <button
                    onClick={toggleTheme}
                    className="font-mono text-[10px] tracking-[1.5px] text-gray-500 hover:text-[#5eafd4] dark:text-[#82b8d4] dark:hover:text-[#5eafd4] uppercase transition-colors"
                >
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>

                <a
                    href="#contact"
                    className="font-mono text-[10px] tracking-[1.5px] text-[#5eafd4] uppercase border border-[#3d8ab5] px-[18px] py-2 hover:bg-[#3d8ab5] hover:text-white dark:hover:text-[#07111f] transition-all"
                >
                    Hire Me
                </a>
            </div>
        </nav>
    );
};

export default NavBar;