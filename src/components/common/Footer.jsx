const Footer = () => {
    return (
        <div className="py-8 px-[6%] flex flex-col md:flex-row items-center justify-between border-t border-slate-200 dark:border-[#1c4a6a] bg-white dark:bg-[#07111f] transition-colors duration-300 fade-in">
            <p className="font-mono text-[10px] tracking-[1.5px] text-slate-500 dark:text-[#4a7f9a] uppercase mb-4 md:mb-0 text-center md:text-left">
                &copy; 2026 JEFF | STUDIO &middot; JEFFERSON ALAH TOONG &middot; ALL RIGHTS RESERVED
            </p>
            <div className="flex gap-6">
                <a href="#hero" className="font-mono text-[10px] tracking-[1.5px] text-slate-500 dark:text-[#82b8d4] uppercase hover:text-[#5eafd4] dark:hover:text-[#5eafd4] transition-colors">
                    Back to Top &uarr;
                </a>
                <a href="#portfolio" className="font-mono text-[10px] tracking-[1.5px] text-slate-500 dark:text-[#82b8d4] uppercase hover:text-[#5eafd4] dark:hover:text-[#5eafd4] transition-colors">
                    Portfolio
                </a>
                <a href="#contact" className="font-mono text-[10px] tracking-[1.5px] text-slate-500 dark:text-[#82b8d4] uppercase hover:text-[#5eafd4] dark:hover:text-[#5eafd4] transition-colors">
                    Contact
                </a>
            </div>
        </div>
    );
};

export default Footer;